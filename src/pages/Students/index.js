import React, { Component } from "react"
import { Row, Col, Card, CardBody, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, ButtonDropdown, Button, TabContent, TabPane, Collapse, NavLink, NavItem, CardText, Nav, Badge, List, UncontrolledTooltip, TooltipItem } from "reactstrap"

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

import user1 from "../../assets/images/users/avatar-1.jpg"
import user2 from "../../assets/images/users/avatar-2.jpg"
import user3 from "../../assets/images/users/avatar-3.jpg"
import user4 from "../../assets/images/users/avatar-4.jpg"
import user5 from "../../assets/images/users/avatar-5.jpg"
import user6 from "../../assets/images/users/avatar-6.jpg"
import credscore from "../../assets/images/credscore.png"

// Table data
const students = [

    {
        id: 1,
        image: user1,
        name: "Darrell Steward",
        crs: 78,
        status: "New"
    },
    {
        id: 2,
        image: user2,
        name: "Darrell Steward",
        crs: 24,
        status: "In Review"
    },
    {
        id: 3,
        image: user3,
        name: "Darrell Steward",
        crs: 34,
        status: "New"
    },
    {
        id: 4,
        image: user4,
        name: "Darrell Steward",
        crs: 78,
        status: "New"
    },
    {
        id: 5,
        image: user5,
        name: "Darrell Steward",
        crs: 23,
        status: "In Review"
    },
    {
        id: 6,
        image: user6,
        name: "Darrell Steward",
        crs: 87,
        status: "New"
    },
    {
        id: 7,
        image: user1,
        name: "Darrell Steward",
        crs: 78,
        status: "New"
    },
    {
        id: 8,
        image: user2,
        name: "Darrell Steward",
        crs: 24,
        status: "In Review"
    },
    {
        id: 9,
        image: user3,
        name: "Darrell Steward",
        crs: 34,
        status: "New"
    },
    {
        id: 10,
        image: user4,
        name: "Darrell Steward",
        crs: 78,
        status: "New"
    },
    {
        id: 11,
        image: user5,
        name: "Darrell Steward",
        crs: 23,
        status: "In Review"
    },
    {
        id: 12,
        image: user6,
        name: "Darrell Steward",
        crs: 87,
        status: "New"
    },
    {
        id: 13,
        image: user1,
        name: "Darrell Steward",
        crs: 78,
        status: "New"
    },
    {
        id: 14,
        image: user2,
        name: "Darrell Steward",
        crs: 24,
        status: "In Review"
    },
    {
        id: 15,
        image: user3,
        name: "Darrell Steward",
        crs: 34,
        status: "New"
    },
    {
        id: 16,
        image: user4,
        name: "Darrell Steward",
        crs: 78,
        status: "New"
    },
    {
        id: 17,
        image: user5,
        name: "Darrell Steward",
        crs: 23,
        status: "In Review"
    },
    {
        id: 18,
        image: user6,
        name: "Darrell Steward",
        crs: 87,
        status: "New"
    },
    {
        id: 19,
        image: user1,
        name: "Darrell Steward",
        crs: 78,
        status: "New"
    },
    {
        id: 20,
        image: user2,
        name: "Darrell Steward",
        crs: 24,
        status: "In Review"
    },
    {
        id: 21,
        image: user3,
        name: "Darrell Steward",
        crs: 34,
        status: "New"
    },
    {
        id: 22,
        image: user4,
        name: "Darrell Steward",
        crs: 78,
        status: "New"
    },
    {
        id: 23,
        image: user5,
        name: "Darrell Steward",
        crs: 23,
        status: "In Review"
    },
    {
        id: 24,
        image: user6,
        name: "Darrell Steward",
        crs: 87,
        status: "New"
    },


];

class Students extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breadcrumbItems: [
                { title: "Students", link: "#" },
                { title: "Data Table", link: "#" },
            ],
            page: 1,
            sizePerPage: 10,
            courseData: students,

            activeTab: "active",
            activeTab2: "empCriteria",
        };
    }

    toggleCustomTabs(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    toggleCustomTabs2(tab2) {
        if (this.state.activeTab2 !== tab2) {
            this.setState({
                activeTab2: tab2
            });
        }
    }

    render() {

        const columns = [{
            dataField: 'image',
            text: 'Student',
            formatter: (cell, row, rowIndex, extraData) => (
                <div className="w-auto">
                    <img src={row.image} alt={row.name} className="rounded-circle avatar-sm" />
                </div>
            ),
            style: {
                width: '1%',
                paddingRight: '5px'
            },
            headerStyle: {
                paddingRight: '0',
                paddingTop: '10px',
                paddingBottom: '10px',
            }
        }, {
            dataField: 'name',
            text: '',
        }, {
            dataField: 'crs',
            text: '',
            formatter: (cell, row, rowIndex, extraData) => (
                <div className="text-end">
                    <small>CRS: <b className="text-dark">{row.crs}</b></small>
                    <br />
                    <small className={row.status == 'New' ? "text-primary" : "text-success"}>{row.status}</small>
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
            totalSize: students.length, // replace later with size(customers),
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
                                    <h4 className="mb-0">Students</h4>
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
                                                                            <span className="mx-2">Course</span>
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
                                                                                <span className="d-block">All Active <Badge className={this.state.activeTab == "active" ? "badge-soft-primary me-1" : "bg-dark me-1"}>122</Badge></span>
                                                                            </NavLink>
                                                                        </NavItem>
                                                                        {/* <NavItem>
                                                                            <NavLink
                                                                                style={{ cursor: "pointer" }}
                                                                                className={classnames({
                                                                                    active: this.state.activeTab === "new"
                                                                                })}
                                                                                onClick={() => {
                                                                                    this.toggleCustomTabs("new");
                                                                                }}
                                                                            >
                                                                                <span className="d-block">New <Badge className={this.state.activeTab == "new" ? "badge-soft-primary me-1" : "bg-dark me-1"}>86</Badge></span>

                                                                            </NavLink>
                                                                        </NavItem>
                                                                        <NavItem>
                                                                            <NavLink
                                                                                style={{ cursor: "pointer" }}
                                                                                className={classnames({
                                                                                    active: this.state.activeTab === "inreview"
                                                                                })}
                                                                                onClick={() => {
                                                                                    this.toggleCustomTabs("inreview");
                                                                                }}
                                                                            >
                                                                                <span className="d-block">In Review <Badge className={this.state.activeTab == "inreview" ? "badge-soft-primary me-1" : "bg-dark me-1"}>38</Badge></span>
                                                                            </NavLink>
                                                                        </NavItem>
                                                                        <NavItem>
                                                                            <NavLink
                                                                                style={{ cursor: "pointer" }}
                                                                                className={classnames({
                                                                                    active: this.state.activeTab === "hired"
                                                                                })}
                                                                                onClick={() => {
                                                                                    this.toggleCustomTabs("hired");
                                                                                }}
                                                                            >
                                                                                <span className="d-block">Hired <Badge className={this.state.activeTab == "hired" ? "badge-soft-primary me-1" : "bg-dark me-1"}>8</Badge></span>
                                                                            </NavLink>
                                                                        </NavItem>
                                                                        <NavItem>
                                                                            <NavLink
                                                                                style={{ cursor: "pointer" }}
                                                                                className={classnames({
                                                                                    active: this.state.activeTab === "deferred"
                                                                                })}
                                                                                onClick={() => {
                                                                                    this.toggleCustomTabs("deferred");
                                                                                }}
                                                                            >
                                                                                <span className="d-block">Deferred <Badge className={this.state.activeTab == "deferred" ? "badge-soft-primary me-1" : "bg-dark me-1"}>146</Badge></span>
                                                                            </NavLink>
                                                                        </NavItem> */}
                                                                    </Nav>

                                                                    <TabContent activeTab={this.state.activeTab}>
                                                                        <TabPane tabId="active">
                                                                            <Row style={{ marginBottom: '-20px' }}>
                                                                                <Col md={3}>
                                                                                    <Row>
                                                                                        <Col xl="12">
                                                                                            <div className="table-responsive" style={{ marginLeft: "-20px", marginRight: "-12px" }}>
                                                                                                <BootstrapTable
                                                                                                    keyField={"id"}
                                                                                                    responsive
                                                                                                    bordered={false}
                                                                                                    striped={false}
                                                                                                    defaultSorted={defaultSorted}
                                                                                                    classes={
                                                                                                        "table align-middle table-nowrap table-sm"
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
                                                                                            <div className="mx-auto">
                                                                                                <PaginationListStandalone
                                                                                                    {...paginationProps}
                                                                                                />
                                                                                            </div>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </Col>
                                                                                <Col md={9} className="border-start px-4">
                                                                                    <Row>
                                                                                        <Col>
                                                                                            <div className="py-3 border-bottom d-flex justify-content-between align-items-center">
                                                                                                <Dropdown
                                                                                                    isOpen={this.state.btnNew}
                                                                                                    toggle={() =>
                                                                                                        this.setState({ btnNew: !this.state.btnNew })
                                                                                                    }
                                                                                                >
                                                                                                    <DropdownToggle color="light" className="bg-primary-light border-primary" caret>
                                                                                                        <i className="credread-userfile-icon left-icon text-primary"></i>
                                                                                                        <span className="ms-2 me-4">New</span>
                                                                                                        <i className="credread-arrowdown-icon right-icon"></i>
                                                                                                    </DropdownToggle>
                                                                                                    <DropdownMenu>
                                                                                                        <DropdownItem>Action</DropdownItem>
                                                                                                        <DropdownItem>Another action</DropdownItem>
                                                                                                        <DropdownItem>Something else here</DropdownItem>
                                                                                                    </DropdownMenu>
                                                                                                </Dropdown>

                                                                                                <div className="text-muted d-flex align-items-center">
                                                                                                    <a href="#" className="text-muted"><i className="credread-expanduser-icon me-3" style={{ fontSize: '20px' }}></i></a>
                                                                                                    <a href="#" className="text-muted"><i className="credread-cross-icon"></i></a>
                                                                                                </div>

                                                                                            </div>

                                                                                        </Col>
                                                                                    </Row>
                                                                                    <Row>
                                                                                        <Col>
                                                                                            <div className="py-4 d-flex justify-content-between align-items-center">
                                                                                                <div id="userDetail">
                                                                                                    <div className="d-flex align-items-center">
                                                                                                        <img src={user1} className="rounded-circle avatar-lg me-3" />
                                                                                                        <div>
                                                                                                            <h3>Darrell Steward</h3>

                                                                                                            <span className="d-flex align-items-center">
                                                                                                                <a href="mailto:willie.jennings@example.com">willie.jennings@example.com</a>  <i className="credread-duplicate-icon text-primary ms-2"></i>
                                                                                                            </span>
                                                                                                            <p className="mt-1 mb-0 text-muted">(480) 555-0103</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="mt-3 d-flex">
                                                                                                        <div className="px-3 text-center pt-2">
                                                                                                            <small>Applied</small>
                                                                                                            <br />
                                                                                                            <small className="text-dark">5 days ago</small>
                                                                                                        </div>
                                                                                                        <div className="rounded px-3 py-2 ms-4 bg-gray-2 d-flex align-items-center">
                                                                                                            <span className="pe-3 text-center text-muted">
                                                                                                                <i className="credread-briefcase-icon"></i>
                                                                                                                <br />
                                                                                                                <small>Course</small>
                                                                                                            </span>
                                                                                                            <span className="border-start ps-3">
                                                                                                                <h6 className="m-0">Urgent Care Nurse</h6>
                                                                                                                <small className="text-muted">Mississippi, OH</small>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div id="CRScore" className="d-flex justify-content-end">
                                                                                                    <img src={credscore} className="w-50" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </Col>
                                                                                    </Row>
                                                                                    <Row>
                                                                                        <Col>
                                                                                            <div>
                                                                                                <Nav tabs className="nav-tabs-custom">
                                                                                                    <NavItem>
                                                                                                        <NavLink
                                                                                                            style={{ cursor: "pointer" }}
                                                                                                            className={classnames({
                                                                                                                active: this.state.activeTab2 === "crFactors"
                                                                                                            })}
                                                                                                            onClick={() => {
                                                                                                                this.toggleCustomTabs2("crFactors");
                                                                                                            }}
                                                                                                        >
                                                                                                            <span className="d-block"><i className="credread-filter-icon me-2"></i>CR Factors</span>
                                                                                                        </NavLink>
                                                                                                    </NavItem>
                                                                                                    <NavItem>
                                                                                                        <NavLink
                                                                                                            style={{ cursor: "pointer" }}
                                                                                                            className={classnames({
                                                                                                                active: this.state.activeTab2 === "empCriteria"
                                                                                                            })}
                                                                                                            onClick={() => {
                                                                                                                this.toggleCustomTabs2("empCriteria");
                                                                                                            }}
                                                                                                        >
                                                                                                            <span className="d-block"><i className="credread-message-icon me-2"></i>Course Criteria</span>

                                                                                                        </NavLink>
                                                                                                    </NavItem>
                                                                                                    <NavItem>
                                                                                                        <NavLink
                                                                                                            style={{ cursor: "pointer" }}
                                                                                                            className={classnames({
                                                                                                                active: this.state.activeTab2 === "resume"
                                                                                                            })}
                                                                                                            onClick={() => {
                                                                                                                this.toggleCustomTabs2("resume");
                                                                                                            }}
                                                                                                        >
                                                                                                            <span className="d-block"><i className="credread-file-icon me-2"></i>Resume &amp; Attachments</span>
                                                                                                        </NavLink>
                                                                                                    </NavItem>
                                                                                                    <NavItem>
                                                                                                        <NavLink
                                                                                                            style={{ cursor: "pointer" }}
                                                                                                            className={classnames({
                                                                                                                active: this.state.activeTab2 === "profile"
                                                                                                            })}
                                                                                                            onClick={() => {
                                                                                                                this.toggleCustomTabs2("profile");
                                                                                                            }}
                                                                                                        >
                                                                                                            <span className="d-block"><i className="credread-user-icon me-2"></i>Profile</span>
                                                                                                        </NavLink>
                                                                                                    </NavItem>
                                                                                                </Nav>

                                                                                                <TabContent activeTab={this.state.activeTab2}>
                                                                                                    <TabPane tabId="crFactors">
                                                                                                        <Row>
                                                                                                            <Col className="py-4">
                                                                                                                CR Factors
                                                                                                            </Col>
                                                                                                        </Row>
                                                                                                    </TabPane>
                                                                                                    <TabPane tabId="empCriteria">
                                                                                                        <Row>
                                                                                                            <Col className="py-4">
                                                                                                                <div className="d-flex align-items-center mb-2">
                                                                                                                    <h2 className="me-2 m-0">Your student specific course criteria</h2>
                                                                                                                    <i href="#" id="question" className="credread-questionmark-icon text-muted"></i>
                                                                                                                    <UncontrolledTooltip
                                                                                                                        placement="right"
                                                                                                                        target="question"
                                                                                                                    >
                                                                                                                        Hello world!
                                                                                                                    </UncontrolledTooltip>
                                                                                                                </div>
                                                                                                                <List type="unstyled">
                                                                                                                    <li className="border-bottom py-3 d-flex">
                                                                                                                        <Badge pill className="bg-secondary rounded-circle p-0 me-3 mt-2" style={{ width: '5px', height: '5px' }}> </Badge>
                                                                                                                        <div>
                                                                                                                            Do you have extensive experience in assessing patients, inserting IVs, and collecting phlebotomy samples?
                                                                                                                            <br />
                                                                                                                            <b>Yes</b>
                                                                                                                        </div>
                                                                                                                    </li>
                                                                                                                    <li className="border-bottom py-3 d-flex">
                                                                                                                        <Badge pill className="bg-secondary rounded-circle p-0 me-3 mt-2" style={{ width: '5px', height: '5px' }}> </Badge>
                                                                                                                        <div>
                                                                                                                            Are you available to work rotational shifts?
                                                                                                                            <br />
                                                                                                                            <b>Yes</b>
                                                                                                                        </div>
                                                                                                                    </li>
                                                                                                                    <li className="py-3 d-flex">
                                                                                                                        <Badge pill className="bg-secondary rounded-circle p-0 me-3 mt-2" style={{ width: '5px', height: '5px' }}> </Badge>
                                                                                                                        <div>
                                                                                                                            Do you have proficiency in electronic patient management systems, such as Mediexcel and e-MDs Chart?
                                                                                                                            <br />
                                                                                                                            <b>Either no than yes</b>
                                                                                                                        </div>
                                                                                                                    </li>
                                                                                                                </List>

                                                                                                            </Col>
                                                                                                        </Row>
                                                                                                    </TabPane>
                                                                                                    <TabPane tabId="resume">
                                                                                                        <Row>
                                                                                                            <Col className="py-4">
                                                                                                                Resume &amp; Attachments
                                                                                                            </Col>
                                                                                                        </Row>
                                                                                                    </TabPane>
                                                                                                    <TabPane tabId="profile">
                                                                                                        <Row>
                                                                                                            <Col className="py-4">
                                                                                                                Profile
                                                                                                            </Col>
                                                                                                        </Row>
                                                                                                    </TabPane>
                                                                                                </TabContent>
                                                                                            </div>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </Col>
                                                                            </Row>
                                                                        </TabPane>
                                                                        {/* <TabPane tabId="new">
                                                                            <Row>
                                                                                <Col>
                                                                                    new
                                                                                </Col>
                                                                            </Row>
                                                                        </TabPane>
                                                                        <TabPane tabId="inreview">
                                                                            <Row>
                                                                                <Col>
                                                                                    inreview
                                                                                </Col>
                                                                            </Row>
                                                                        </TabPane>
                                                                        <TabPane tabId="hired">
                                                                            <Row>
                                                                                <Col>
                                                                                    hired
                                                                                </Col>
                                                                            </Row>
                                                                        </TabPane>
                                                                        <TabPane tabId="deferred">
                                                                            <Row>
                                                                                <Col>
                                                                                    deferred
                                                                                </Col>
                                                                            </Row>
                                                                        </TabPane> */}
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

export default Students