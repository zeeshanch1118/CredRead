import React, { Component } from "react"
import { Row, Col, Card, CardBody, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, ButtonDropdown, Button, Progress, TabContent, TabPane, Collapse, NavLink, NavItem, CardText, Nav, Badge } from "reactstrap"

import ReactApexChart from 'react-apexcharts';

import jobs from "../../assets/images/jobs.svg";
import deferredJobs from "../../assets/images/deferred-jobs.svg";
import reviewJob from "../../assets/images/review-job.svg";
import selectJob from "../../assets/images/select-job.svg";

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: [{
                name: '# of Candidates',
                type: 'column',
                data: [1, 1, 5, 8, 15, 11, 8, 5, 3]
            }, {
                name: 'Creadready Score',
                type: 'line',
                data: [0, 2, 6, 11, 15, 9, 6, 4, 2]
            }],
            options: {
                chart: {
                    toolbar: {
                        show: false,
                    }
                },
                xaxis: {
                    title: {
                        text: 'Creadready Score',
                        style: {
                            fontWeight: 200,
                        },
                    }
                },
                yaxis: {
                    title: {
                        text: '# of Candidates',
                        style: {
                            fontWeight: 200,
                        },
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    width: 2,
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '40%',
                    },
                },
                dataLabels: {
                    enabled: false,
                },

                legend: {
                    show: false,
                },
                colors: ['#54C3EB', '#007AB2'],
                labels: ['60', '65', '70', '75', '80', '85', '90', '95', '100'],
            }
        };
    }

    render() {

        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Row>
                            <Col xs={12}>
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0">Dashboard</h4>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="page-title-box d-flex align-items-end justify-content-between">
                                    <div style={{ width: '300px' }}>
                                        <div className="text-muted">
                                            Show Statistics for
                                        </div>

                                        <Dropdown
                                            isOpen={this.state.singlebtn}
                                            toggle={() =>
                                                this.setState({ singlebtn: !this.state.singlebtn })
                                            }
                                        >
                                            <DropdownToggle color="light w-100 d-flex" caret>
                                                <i className="credread-briefcase-icon left-icon mt-1"></i>
                                                <span className="mx-2">Urgent Care Nurse</span>
                                                <i className="credread-arrowdown-icon right-icon ms-auto mt-1"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>

                                    <div className="page-title-right">
                                        <Button
                                            color="primary"
                                        >
                                            <i className="credread-plus-icon"></i> <span className="p-1">Add New Job</span>
                                        </Button>
                                    </div>

                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="col-12 col-md-8">
                                <Card>
                                    <CardBody className="px-4 py-5">
                                        <Row>
                                            <Col className="col-12 col-md-6">
                                                <h3>Total Candidates</h3>
                                                <h1 className="display-5 font-weight-bold">64</h1>
                                            </Col>
                                            <Col className="col-12 col-md-6">
                                                <div className="d-flex justify-content-around text-center">
                                                    <div>
                                                        <h3 className="text-success">40</h3>
                                                        <p className="m-0 text-muted">Ready</p>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-warning">18</h3>
                                                        <p className="m-0 text-muted">Almost Ready</p>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-gray-7">6</h3>
                                                        <p className="m-0 text-muted">Getting Started</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-12 col-md-6 mt-4 border-top pt-4 pe-5">
                                                <h3>CredReadiness Candidate Distribution</h3>
                                                <h1 className="display-5 font-weight-bold">78-85</h1>
                                                <p className="m-0 text-muted">
                                                    The CredReadiness Score for any job role will range from 60 to 100 with a score of 80 or above being defined as Ready. A score of 80 represents the Average Score of individuals in the workforce who are successful in that job role.
                                                </p>
                                                <Button
                                                    type="button"
                                                    color="white" className="waves-effect waves-light text-primary p-0 mt-3"
                                                >
                                                    See Candidates List
                                                </Button>
                                            </Col>
                                            <Col className="col-12 col-md-6 pt-5">
                                                <div id="line-column-chart" className="apex-charts">
                                                    <ReactApexChart options={this.state.options} series={this.state.series} type="line" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <Row>
                                    <Col className="col-6 col-md-3">
                                        <Card>
                                            <CardBody className="text-center">
                                                <img src={jobs} alt="Welcome" className="img-fluid" />
                                                <h1 className="mt-3">18</h1>
                                                <p className="m-0 text-muted">New Candidates</p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col className="col-6 col-md-3">
                                        <Card>
                                            <CardBody className="text-center">
                                                <img src={reviewJob} alt="Welcome" className="img-fluid" />
                                                <h1 className="mt-3">30</h1>
                                                <p className="m-0 text-muted">In Review</p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col className="col-6 col-md-3">
                                        <Card>
                                            <CardBody className="text-center">
                                                <img src={deferredJobs} alt="Welcome" className="img-fluid" />
                                                <h1 className="mt-3">16</h1>
                                                <p className="m-0 text-muted">Deferred</p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col className="col-6 col-md-3">
                                        <Card>
                                            <CardBody className="text-center">
                                                <img src={selectJob} alt="Welcome" className="img-fluid" />
                                                <h1 className="mt-3">32 days</h1>
                                                <p className="m-0 text-muted">Time to Hire</p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="col-12 col-md-4">
                                <Card>
                                    <CardBody className="px-4 py-5">
                                        <h2>Gender by CredReady Score</h2>
                                        <p className="text-muted">
                                            The % of each gender that has a CRS 80% - 100%.
                                        </p>
                                        <div>
                                            <Progress className="progress-xl" multi>
                                                <Progress bar color="primary" value={51}></Progress>
                                                <Progress bar color="warning" value={37}></Progress>
                                                <Progress bar color="gray-6" value={12}></Progress>
                                            </Progress>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="d-flex mt-3">
                                                <Badge pill className="bg-primary rounded-circle me-2 mt-1" style={{ width: '16px', height: '16px' }}> </Badge>
                                                <span>
                                                    <h3 className="m-0" style={{ width: '44px' }}>51%</h3>
                                                    <p className="m-0 text-muted">Male</p>
                                                </span>
                                            </span>
                                            <span className="d-flex mt-3">
                                                <Badge pill className="bg-warning rounded-circle me-2 mt-1" style={{ width: '16px', height: '16px' }}> </Badge>
                                                <span>
                                                    <h3 className="m-0" style={{ width: '44px' }}>27%</h3>
                                                    <p className="m-0 text-muted">Female</p>
                                                </span>
                                            </span>
                                            <span className="d-flex mt-3">
                                                <Badge pill className="bg-gray-6 rounded-circle me-2 mt-1" style={{ width: '16px', height: '16px' }}> </Badge>
                                                <span>
                                                    <h3 className="m-0" style={{ width: '44px' }}>12%</h3>
                                                    <p className="m-0 text-muted">Not Identified</p>
                                                </span>
                                            </span>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody className="px-4 py-5">
                                        <h2>Ethnicity by CredReady Score</h2>
                                        <p className="text-muted">
                                            The % of each ethnicity that has a CRS 80% - 100%.
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <span className="d-flex mt-3 m-0 text-muted">
                                                White
                                            </span>
                                            <span className="d-flex align-items-center">
                                                <Progress className="progress-lg me-3" color="primary" value={35} style={{ width: '60px' }}></Progress>
                                                <h4 className="m-0" style={{ width: '44px' }}>35%</h4>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="d-flex mt-3 m-0 text-muted">
                                                Black or African American
                                            </span>
                                            <span className="d-flex align-items-center">
                                                <Progress className="progress-lg me-3" color="primary" value={26} style={{ width: '60px' }}></Progress>
                                                <h4 className="m-0" style={{ width: '44px' }}>26%</h4>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="d-flex mt-3 m-0 text-muted">
                                                Asian
                                            </span>
                                            <span className="d-flex align-items-center">
                                                <Progress className="progress-lg me-3" color="primary" value={18} style={{ width: '60px' }}></Progress>
                                                <h4 className="m-0" style={{ width: '44px' }}>18%</h4>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="d-flex mt-3 m-0 text-muted">
                                                Hispanic or Latino
                                            </span>
                                            <span className="d-flex align-items-center">
                                                <Progress className="progress-lg me-3" color="primary" value={9} style={{ width: '60px' }}></Progress>
                                                <h4 className="m-0" style={{ width: '44px' }}>9%</h4>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="d-flex mt-3 m-0 text-muted">
                                                American Indian or Alaskan Native
                                            </span>
                                            <span className="d-flex align-items-center">
                                                <Progress className="progress-lg me-3" color="primary" value={6} style={{ width: '60px' }}></Progress>
                                                <h4 className="m-0" style={{ width: '44px' }}>6%</h4>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="d-flex mt-3 m-0 text-muted">
                                                Native Hawaiian or Pacific Islander
                                            </span>
                                            <span className="d-flex align-items-center">
                                                <Progress className="progress-lg me-3" color="primary" value={2} style={{ width: '60px' }}></Progress>
                                                <h4 className="m-0" style={{ width: '44px' }}>2%</h4>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="d-flex mt-3 m-0 text-muted">
                                                Two or more races
                                            </span>
                                            <span className="d-flex align-items-center">
                                                <Progress className="progress-lg me-3" color="primary" value={0} style={{ width: '60px' }}></Progress>
                                                <h4 className="m-0" style={{ width: '44px' }}>0%</h4>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="d-flex mt-3 m-0 text-muted">
                                                Not Identified
                                            </span>
                                            <span className="d-flex align-items-center">
                                                <Progress className="progress-lg me-3" color="primary" value={0} style={{ width: '60px' }}></Progress>
                                                <h4 className="m-0" style={{ width: '44px' }}>0%</h4>
                                            </span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default Dashboard