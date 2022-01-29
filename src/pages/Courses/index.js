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
const courses = [

    { "id": 1, "CourseTitle": "Manufacturing", "city": "Mississippi", "state": "OH", "DayPosted": "Nov 24, 2021", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "33-43", "status": "Fulfilled" },

    { "id": 2, "CourseTitle": "Logistics", "city": "Mississippi", "state": "OH", "DayPosted": "Aug 5", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "47-65", "status": "Fulfilled" },

    { "id": 3, "CourseTitle": "Medical Assistant", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "66-75", "status": "Fulfilled" },

    { "id": 4, "CourseTitle": "Welding", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 20", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "41-49", "status": "Fulfilled" },

    { "id": 5, "CourseTitle": "Automotive", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 20", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "28-34", "status": "Fulfilled" },

    { "id": 6, "CourseTitle": "Technology", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "61-74", "status": "Fulfilled" },

    { "id": 7, "CourseTitle": "Machine Tool Technology", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 20", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "38-45", "status": "Fulfilled" },

    { "id": 8, "CourseTitle": "Manufacturing", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "21-33", "status": "Fulfilled" },

    { "id": 9, "CourseTitle": "Automotive", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "46-54", "status": "Fulfilled" },

    { "id": 10, "CourseTitle": "Logistics", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "22-31", "status": "Fulfilled" },

    { "id": 11, "CourseTitle": "Marshall", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 22", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "36-42", "status": "Fulfilled" },

    { "id": 12, "CourseTitle": "Hurst", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "39-45", "status": "Fulfilled" },

    { "id": 13, "CourseTitle": "Rios", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "35-43", "status": "Fulfilled" },

    { "id": 14, "CourseTitle": "Snider", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 26", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "27-34", "status": "Fulfilled" },

    { "id": 15, "CourseTitle": "Wilder", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "23-28", "status": "Fulfilled" },

    { "id": 16, "CourseTitle": "Camacho", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "47-65", "status": "Fulfilled" },

    { "id": 17, "CourseTitle": "Green", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "48-56", "status": "Fulfilled" },

    { "id": 18, "CourseTitle": "Winters", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "63-77", "status": "Fulfilled" },

    { "id": 19, "CourseTitle": "Cortez", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "22-31", "status": "Fulfilled" },

    { "id": 20, "CourseTitle": "Joyce", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "42-54", "status": "Fulfilled" },

    { "id": 21, "CourseTitle": "Gloria Little", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "59-65", "status": "Fulfilled" },

    { "id": 22, "CourseTitle": "Haley Kennedy", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "43-54", "status": "Fulfilled" },

    { "id": 23, "CourseTitle": "Hermione Butler", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 22", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "47-65", "status": "Fulfilled" },

    { "id": 24, "CourseTitle": "Herrod Chandler", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "59-65", "status": "Fulfilled" },

    { "id": 25, "CourseTitle": "Hope Fuentes", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "41-49", "status": "Fulfilled" },

    { "id": 26, "CourseTitle": "Howard Hatfield", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 28", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "51-58", "status": "Fulfilled" },

    { "id": 27, "CourseTitle": "Jackson Bradshaw", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "65-72", "status": "Fulfilled" },

    { "id": 28, "CourseTitle": "Jena Gaines", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 28", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "30-43", "status": "Fulfilled" },

    { "id": 29, "CourseTitle": "Jenette Caldwell", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "30-43", "status": "Fulfilled" },

    { "id": 30, "CourseTitle": "Jennifer Acosta", "city": "Mississippi", "state": "OH", "DayPosted": "Jul 25", "CourseStats": { "applicants": 57, "ready": 22, "AlmostReady": 33 }, "AvgStudentsCRS": "43-54", "status": "Fulfilled" }

];

class Courses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breadcrumbItems: [
                { title: "Courses", link: "#" },
                { title: "Data Table", link: "#" },
            ],
            page: 1,
            sizePerPage: 10,
            courseData: courses,

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
            dataField: 'CourseTitle',
            text: 'Course Title',
            sort: true,
            formatter: (cell, row, rowIndex, extraData) => (
                <div>
                    <span>{row.CourseTitle}</span>
                    <br />
                    <small>{row.city}, {row.state}</small>
                </div>
            ),
        }, {
            dataField: 'DayPosted',
            text: 'Day Posted',
            sort: true
        }, {
            dataField: 'CourseStats',
            text: 'CourseStats',
            formatter: (cell, row, rowIndex, extraData) => (
                <div className="d-flex text-center">
                    <span>
                        <strong>{row.CourseStats.applicants}</strong>
                        <br />
                        <small>Applications</small>
                    </span>
                    <span className="divider mx-3 border-dashed"></span>
                    <span>
                        <strong className="text-success">{row.CourseStats.ready}</strong>
                        <br />
                        <small>Ready</small>
                    </span>
                    <span className="spacer mx-3"></span>
                    <span>
                        <strong className="text-warning">{row.CourseStats.AlmostReady}</strong>
                        <br />
                        <small>Almost Ready</small>
                    </span>
                </div>
            ),
        }, {
            dataField: 'AvgStudentsCRS',
            text: 'Avg. students CRS',
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
            totalSize: courses.length, // replace later with size(customers),
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
                                    <h4 className="mb-0">Courses</h4>

                                    <div className="page-title-right">
                                        <Button
                                            color="primary"
                                        >
                                            <i className="credread-plus-icon"></i> <span className="p-1">Add New Course</span>
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
                                            data={this.state.courseData}
                                        >
                                            {({ paginationProps, paginationTableProps }) => (
                                                <ToolkitProvider
                                                    keyField='id'
                                                    columns={columns}
                                                    data={this.state.courseData}
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
                                                                            <DropdownItem>Logistics</DropdownItem>
                                                                            <DropdownItem>Automotive</DropdownItem>
                                                                            <DropdownItem>Medical Assistant</DropdownItem>
                                                                            <DropdownItem>Machine Tool Technology</DropdownItem>
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
                                                                            <DropdownItem>Mississippi, OH</DropdownItem>
                                                                            <DropdownItem>Another City</DropdownItem>
                                                                            <DropdownItem>Some Other Location</DropdownItem>
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

export default Courses