import React, { Component } from "react"
import { Row, Col, Card, CardBody, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, ButtonDropdown, Button, TabContent, TabPane, Collapse, NavLink, NavItem, CardText, Nav, Badge } from "reactstrap"

import classnames from "classnames";

// datatable related plugins
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
    SizePerPageDropdownStandalone,
    PaginationTotalStandalone
} from 'react-bootstrap-table2-paginator';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../../assets/scss/custom/components/datatables.scss";

// Table data
const jobs = [

    { "id": 1, "JobTitle": "Junior Sister/ Charge Nurse", "city": "Mississippi", "state": "OH", "DayPosted": "Nov 24, 2021", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "33-43", "status": "Fulfilled" },

    { "id": 2, "JobTitle": "International Recruitment and Pastoral Care Lead", "city": "Mississippi", "state": "OH", "DayPosted": "Aug 5", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "47-65", "status": "Fulfilled" },

    { "id": 3, "JobTitle": "Registered Respiratory Nurse", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "66-75", "status": "Fulfilled" },

    { "id": 4, "JobTitle": "Security Specialist", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 20", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "41-49", "status": "Fulfilled" },

    { "id": 5, "JobTitle": "Night Nurse RGN/RMN", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 20", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "28-34", "status": "Fulfilled" },

    { "id": 6, "JobTitle": "Brielle Williamson", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "61-74", "status": "Fulfilled" },

    { "id": 7, "JobTitle": "Bruno Nash", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 20", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "38-45", "status": "Fulfilled" },

    { "id": 8, "JobTitle": "Caesar Vance", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "21-33", "status": "Fulfilled" },

    { "id": 9, "JobTitle": "Cara Stevens", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "46-54", "status": "Fulfilled" },

    { "id": 10, "JobTitle": "Cedric Kelly", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "22-31", "status": "Fulfilled" },

    { "id": 11, "JobTitle": "Marshall", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 22", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "36-42", "status": "Fulfilled" },

    { "id": 12, "JobTitle": "Hurst", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "39-45", "status": "Fulfilled" },

    { "id": 13, "JobTitle": "Rios", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "35-43", "status": "Fulfilled" },

    { "id": 14, "JobTitle": "Snider", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 26", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "27-34", "status": "Fulfilled" },

    { "id": 15, "JobTitle": "Wilder", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "23-28", "status": "Fulfilled" },

    { "id": 16, "JobTitle": "Camacho", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "47-65", "status": "Fulfilled" },

    { "id": 17, "JobTitle": "Green", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "48-56", "status": "Fulfilled" },

    { "id": 18, "JobTitle": "Winters", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "63-77", "status": "Fulfilled" },

    { "id": 19, "JobTitle": "Cortez", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "22-31", "status": "Fulfilled" },

    { "id": 20, "JobTitle": "Joyce", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "42-54", "status": "Fulfilled" },

    { "id": 21, "JobTitle": "Gloria Little", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "59-65", "status": "Fulfilled" },

    { "id": 22, "JobTitle": "Haley Kennedy", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "43-54", "status": "Fulfilled" },

    { "id": 23, "JobTitle": "Hermione Butler", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 22", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "47-65", "status": "Fulfilled" },

    { "id": 24, "JobTitle": "Herrod Chandler", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "59-65", "status": "Fulfilled" },

    { "id": 25, "JobTitle": "Hope Fuentes", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "41-49", "status": "Fulfilled" },

    { "id": 26, "JobTitle": "Howard Hatfield", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 28", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "51-58", "status": "Fulfilled" },

    { "id": 27, "JobTitle": "Jackson Bradshaw", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "65-72", "status": "Fulfilled" },

    { "id": 28, "JobTitle": "Jena Gaines", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 28", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "30-43", "status": "Fulfilled" },

    { "id": 29, "JobTitle": "Jenette Caldwell", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "30-43", "status": "Fulfilled" },

    { "id": 30, "JobTitle": "Jennifer Acosta", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "JobStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgCandidatesCRS": "43-54", "status": "Fulfilled" }

];

class Jobs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breadcrumbItems: [
                { title: "Jobs", link: "#" },
                { title: "Data Table", link: "#" },
            ],
            page: 1,
            sizePerPage: 10,
            jobData: jobs,

            activeTab: "active",
        };
    }

    toggleCustomTabs(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        const columns = [{
            dataField: 'JobTitle',
            text: 'Job Title',
            sort: true,
            formatter: (cell, row, rowIndex, extraData) => (
                <div>
                    <span>{row.JobTitle}</span>
                    <br />
                    <small>{row.city}, {row.state}</small>
                </div>
            ),
        }, {
            dataField: 'DayPosted',
            text: 'Day Posted',
            sort: true
        }, {
            dataField: 'JobStats',
            text: 'JobStats',
            formatter: (cell, row, rowIndex, extraData) => (
                <div className="d-flex text-center">
                    <span>
                        <strong>{row.JobStats.applicants}</strong>
                        <br />
                        <small>Applications</small>
                    </span>
                    <span className="divider mx-3 border-dashed"></span>
                    <span>
                        <strong className="text-success">{row.JobStats.ready}</strong>
                        <br />
                        <small>Ready</small>
                    </span>
                    <span className="spacer mx-3"></span>
                    <span>
                        <strong className="text-warning">{row.JobStats.AlmostReady}</strong>
                        <br />
                        <small>Almost Ready</small>
                    </span>
                </div>
            ),
        }, {
            dataField: 'AvgCandidatesCRS',
            text: 'Avg. candidates CRS',
            sort: true

        }, {
            dataField: 'status',
            text: 'Status',
            sort: true,
            formatter: (cell, row, rowIndex, extraData) => (
                <div className="status">
                    <span className="bg-light py-1 px-2 rounded"><small><i className="credread-tick-icon text-success me-1"></i></small>{row.status}</span>
                </div>
            ),
        }];

        const defaultSorted = [{
            dataField: 'id',
            order: 'asc'
        }];
        const paginationCustomTotal = (from, to, totalSize) => (
            <span className="react-bootstrap-table-pagination-total">
                Showing {from} to {to} of {totalSize} Results
            </span>
        );
        const pageOptions = {
            sizePerPage: 10,
            totalSize: jobs.length, // replace later with size(customers),
            custom: true,
            paginationTotalRenderer: paginationCustomTotal,
        }



        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Row>
                            <Col xs={12}>
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0">Jobs</h4>

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
                            <Col className="col-12">
                                <Card>
                                    <CardBody>

                                        <PaginationProvider
                                            pagination={paginationFactory(pageOptions)}
                                            keyField='id'
                                            columns={columns}
                                            data={this.state.jobData}
                                        >
                                            {({ paginationProps, paginationTableProps }) => (
                                                <ToolkitProvider
                                                    keyField='id'
                                                    columns={columns}
                                                    data={this.state.jobData}
                                                >
                                                    {toolkitProps => (
                                                        <React.Fragment>

                                                            <Row className="mb-2">
                                                                <Col md="4" className={'d-flex'}>
                                                                    <Dropdown
                                                                        isOpen={this.state.singlebtn}
                                                                        toggle={() =>
                                                                            this.setState({ singlebtn: !this.state.singlebtn })
                                                                        }
                                                                    >
                                                                        <DropdownToggle color="light" caret>
                                                                            <i className="credread-briefcase-icon left-icon"></i>
                                                                            <span className="mx-2">Industry</span>
                                                                            <i className="credread-arrowdown-icon right-icon"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu>
                                                                            <DropdownItem>Action</DropdownItem>
                                                                            <DropdownItem>Another action</DropdownItem>
                                                                            <DropdownItem>Something else here</DropdownItem>
                                                                        </DropdownMenu>
                                                                    </Dropdown>
                                                                    <Dropdown
                                                                        isOpen={this.state.singlebtn1}
                                                                        toggle={() =>
                                                                            this.setState({ singlebtn1: !this.state.singlebtn1 })
                                                                        }
                                                                        className={"mx-3"}
                                                                    >
                                                                        <DropdownToggle color="light" caret>
                                                                            <i className="credread-mappin-icon left-icon"></i>
                                                                            <span className="m-2">Location</span>
                                                                            <i className="credread-arrowdown-icon right-icon"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu>
                                                                            <DropdownItem>Action</DropdownItem>
                                                                            <DropdownItem>Another action</DropdownItem>
                                                                            <DropdownItem>Something else here</DropdownItem>
                                                                        </DropdownMenu>
                                                                    </Dropdown>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <Nav tabs className="nav-tabs-custom">
                                                                        <NavItem>
                                                                            <NavLink
                                                                                style={{ cursor: "pointer" }}
                                                                                className={classnames({
                                                                                    active: this.state.activeTab === "active"
                                                                                })}
                                                                                onClick={() => {
                                                                                    this.toggleCustomTabs("active");
                                                                                }}
                                                                            >
                                                                                <span className="d-block">Active <Badge className={this.state.activeTab == "active" ? "badge-soft-primary me-1" : "bg-dark me-1"}>10</Badge></span>
                                                                            </NavLink>
                                                                        </NavItem>
                                                                        <NavItem>
                                                                            <NavLink
                                                                                style={{ cursor: "pointer" }}
                                                                                className={classnames({
                                                                                    active: this.state.activeTab === "paused"
                                                                                })}
                                                                                onClick={() => {
                                                                                    this.toggleCustomTabs("paused");
                                                                                }}
                                                                            >
                                                                                <span className="d-block">Paused <Badge className={this.state.activeTab == "paused" ? "badge-soft-primary me-1" : "bg-dark me-1"}>2</Badge></span>

                                                                            </NavLink>
                                                                        </NavItem>
                                                                        <NavItem>
                                                                            <NavLink
                                                                                style={{ cursor: "pointer" }}
                                                                                className={classnames({
                                                                                    active: this.state.activeTab === "fulfilled"
                                                                                })}
                                                                                onClick={() => {
                                                                                    this.toggleCustomTabs("fulfilled");
                                                                                }}
                                                                            >
                                                                                <span className="d-block">Fulfilled <Badge className={this.state.activeTab == "fulfilled" ? "badge-soft-primary me-1" : "bg-dark me-1"}>22</Badge></span>
                                                                            </NavLink>
                                                                        </NavItem>
                                                                    </Nav>

                                                                    <TabContent activeTab={this.state.activeTab}>
                                                                        <TabPane tabId="active">
                                                                            <Row>
                                                                                <Col xl="12">
                                                                                    <div className="table-responsive" style={{ marginLeft: "-20px", marginRight: "-20px" }}>
                                                                                        <BootstrapTable
                                                                                            keyField={"id"}
                                                                                            responsive
                                                                                            bordered={false}
                                                                                            striped={false}
                                                                                            defaultSorted={defaultSorted}
                                                                                            classes={
                                                                                                "table align-middle table-nowrap"
                                                                                            }
                                                                                            headerWrapperClasses={"thead-light"}
                                                                                            {...toolkitProps.baseProps}
                                                                                            {...paginationTableProps}
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>

                                                                            <Row className="align-items-md-center mt-30">
                                                                                <Col className="inner-custom-pagination d-flex flex-column flex-sm-row align-items-center">
                                                                                    <div className="d-inline text-pagination my-3">
                                                                                        <PaginationTotalStandalone
                                                                                            {...paginationProps}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="mx-auto">
                                                                                        <PaginationListStandalone
                                                                                            {...paginationProps}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="d-inline">
                                                                                        <span className="text-pagination mx-2">Items per page</span>
                                                                                        <SizePerPageDropdownStandalone
                                                                                            {...paginationProps}
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </TabPane>
                                                                        <TabPane tabId="paused">
                                                                            <Row>
                                                                                <Col xl="12">
                                                                                    <div className="table-responsive" style={{ marginLeft: "-20px", marginRight: "-20px" }}>
                                                                                        <BootstrapTable
                                                                                            keyField={"id"}
                                                                                            responsive
                                                                                            bordered={false}
                                                                                            striped={false}
                                                                                            defaultSorted={defaultSorted}
                                                                                            classes={
                                                                                                "table align-middle table-nowrap"
                                                                                            }
                                                                                            headerWrapperClasses={"thead-light"}
                                                                                            {...toolkitProps.baseProps}
                                                                                            {...paginationTableProps}
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>

                                                                            <Row className="align-items-md-center mt-30">
                                                                                <Col className="inner-custom-pagination d-flex flex-column flex-sm-row align-items-center">
                                                                                    <div className="d-inline text-pagination my-3">
                                                                                        <PaginationTotalStandalone
                                                                                            {...paginationProps}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="mx-auto">
                                                                                        <PaginationListStandalone
                                                                                            {...paginationProps}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="d-inline">
                                                                                        <span className="text-pagination mx-2">Items per page</span>
                                                                                        <SizePerPageDropdownStandalone
                                                                                            {...paginationProps}
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </TabPane>
                                                                        <TabPane tabId="fulfilled">
                                                                            <Row>
                                                                                <Col xl="12">
                                                                                    <div className="table-responsive" style={{ marginLeft: "-20px", marginRight: "-20px" }}>
                                                                                        <BootstrapTable
                                                                                            keyField={"id"}
                                                                                            responsive
                                                                                            bordered={false}
                                                                                            striped={false}
                                                                                            defaultSorted={defaultSorted}
                                                                                            classes={
                                                                                                "table align-middle table-nowrap"
                                                                                            }
                                                                                            headerWrapperClasses={"thead-light"}
                                                                                            {...toolkitProps.baseProps}
                                                                                            {...paginationTableProps}
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>

                                                                            <Row className="align-items-md-center mt-30">
                                                                                <Col className="inner-custom-pagination d-flex flex-column flex-sm-row align-items-center">
                                                                                    <div className="d-inline text-pagination my-3">
                                                                                        <PaginationTotalStandalone
                                                                                            {...paginationProps}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="mx-auto">
                                                                                        <PaginationListStandalone
                                                                                            {...paginationProps}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="d-inline">
                                                                                        <span className="text-pagination mx-2">Items per page</span>
                                                                                        <SizePerPageDropdownStandalone
                                                                                            {...paginationProps}
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </TabPane>
                                                                    </TabContent>
                                                                </Col>
                                                            </Row>

                                                        </React.Fragment>
                                                    )
                                                    }
                                                </ToolkitProvider>
                                            )
                                            }</PaginationProvider>
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

export default Jobs