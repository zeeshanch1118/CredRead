import React, { Component } from "react"
import { Row, Col, Card, CardBody, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, ButtonDropdown, Button, TabContent, TabPane, Collapse, NavLink, NavItem, CardText, Nav, Badge, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, } from "reactstrap"
import classnames from "classnames";
import uploadPhoto from "../../assets/images/upload-photo.svg";
import { AvForm, AvField } from "availity-reactstrap-validation";

class Settings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: "AccountSettings",

            uploadPhoto: "",
            uploadLogo: "",
            btnUploadPhotoLabel: "Upload Photo",
            btnUploadLogoLabel: "Upload Logo",

            modalChangePassword: false,
        };

        this.modalChangePassword = this.modalChangePassword.bind(this);

    }

    handleChangePhoto = (e) => {
        this.setState({ uploadPhoto: URL.createObjectURL(e.target.files[0]) });
        this.setState({ btnUploadPhotoLabel: "Change Photo" })
    }
    handleRemovePhoto = () => {
        this.setState({ uploadPhoto: "" })
        this.setState({ btnUploadPhotoLabel: "Upload Photo" })
    }
    handleChangeLogo = (e) => {
        this.setState({ uploadLogo: URL.createObjectURL(e.target.files[0]) });
        this.setState({ btnUploadLogoLabel: "Change Logo" })
    }
    handleRemoveLogo = () => {
        this.setState({ uploadLogo: "" })
        this.setState({ btnUploadLogoLabel: "Upload Logo" })
    }
    toggleCustomTabs(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    modalChangePassword() {
        this.setState(prevState => ({
            modalChangePassword: !prevState.modalChangePassword
        }));
        this.removeBodyCss();
    }
    removeBodyCss() {
        document.body.classList.add("no_padding");
    }

    render() {

        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">
                        <Row>
                            <Col xs={12}>
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0">Settings</h4>

                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="col-12">
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col>
                                                <Nav tabs className="nav-tabs-custom">
                                                    <NavItem>
                                                        <NavLink
                                                            style={{ cursor: "pointer" }}
                                                            className={classnames({
                                                                active: this.state.activeTab === "AccountSettings"
                                                            })}
                                                            onClick={() => {
                                                                this.toggleCustomTabs("AccountSettings");
                                                            }}
                                                        >
                                                            Account Settings
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            style={{ cursor: "pointer" }}
                                                            className={classnames({
                                                                active: this.state.activeTab === "CompanyProfile"
                                                            })}
                                                            onClick={() => {
                                                                this.toggleCustomTabs("CompanyProfile");
                                                            }}
                                                        >
                                                            Company Profile

                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>

                                                <TabContent activeTab={this.state.activeTab} className="py-4 px-3">
                                                    <TabPane tabId="AccountSettings">
                                                        <Row>
                                                            <Col sm={12} className="d-flex justify-content-start">
                                                                <div className="me-5" style={{ width: '180px' }}>
                                                                    <Label className="form-label" htmlFor="validationCustom01">Your Photo</Label>

                                                                    <div className="rounded mb-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#F5F5F5', border: '1px dashed #E0E0E0' }}>
                                                                        {
                                                                            this.state.uploadPhoto ? <img src={this.state.uploadPhoto} className="img-fluid w-100 rounded" /> : <i className="credread-camera-icon me-2 my-5 py-4"></i>
                                                                        }
                                                                    </div>

                                                                    <Button
                                                                        color="white border"
                                                                        className="waves-effect waves-light p-0 w-100"
                                                                    >
                                                                        <div style={{ position: "absolute", zIndex: 1, display: 'flex', justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}><i className="credread-upload-icon me-2"></i> {this.state.btnUploadPhotoLabel}</div>
                                                                        <input type="file" onChange={this.handleChangePhoto} accept="image/*" className="p-1" style={{ opacity: "0", position: "relative", zIndex: 2, cursor: "pointer" }} />
                                                                    </Button>

                                                                    <div className="my-2">
                                                                        {
                                                                            this.state.btnUploadPhotoLabel == "Change Photo" ?
                                                                                <Button
                                                                                    color="white border"
                                                                                    className="waves-effect waves-light w-100 mb-2"
                                                                                    onClick={this.handleRemovePhoto}
                                                                                >
                                                                                    Remove Photo
                                                                                </Button> :
                                                                                <p>
                                                                                    PNG, JPG or GIF. Minimum 200 by 200 px. Maximum file size 5mb
                                                                                </p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-5">
                                                                    <AvForm className="needs-validation" >
                                                                        <Row>
                                                                            <Col md="12">
                                                                                <div className="mb-3">
                                                                                    <AvField
                                                                                        label="First &amp; Last Name"
                                                                                        name="FirstLastName"
                                                                                        placeholder="Jenny Wilson"
                                                                                        type="text"
                                                                                        errorMessage="Enter First Name"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="FirstLastName"
                                                                                    />
                                                                                </div>
                                                                            </Col>
                                                                            <Col md="12">
                                                                                <div className="mb-3">
                                                                                    <AvField
                                                                                        name="email"
                                                                                        label="Email"
                                                                                        placeholder="jenny@example.com"
                                                                                        type="email"
                                                                                        errorMessage="Invalid Email"
                                                                                        validate={{
                                                                                            required: { value: true },
                                                                                            email: { value: true }
                                                                                        }}
                                                                                        id="Email"
                                                                                    />
                                                                                </div>
                                                                            </Col>
                                                                            <Col md="12">
                                                                                <div className="mb-3">
                                                                                    <Button
                                                                                        type="button"
                                                                                        color="white" className="waves-effect waves-light text-primary p-0"
                                                                                        onClick={this.modalChangePassword}
                                                                                    >
                                                                                        Change Password
                                                                                    </Button>
                                                                                </div>

                                                                                <Modal
                                                                                    isOpen={this.state.modalChangePassword}
                                                                                    toggle={this.modalChangePassword}
                                                                                    centered={true}
                                                                                >
                                                                                    <ModalHeader toggle={() => this.setState({ modalChangePassword: false })}>
                                                                                        Change Password
                                                                                    </ModalHeader>
                                                                                    <ModalBody>
                                                                                        <Row>
                                                                                            <Col md="12">
                                                                                                <div className="mb-3">
                                                                                                    <AvField
                                                                                                        label="Password"
                                                                                                        name="password"
                                                                                                        type="password"
                                                                                                        placeholder="Your current password"
                                                                                                        errorMessage="Your current password"
                                                                                                        validate={{ required: { value: true } }}
                                                                                                    />
                                                                                                </div>
                                                                                            </Col>
                                                                                            <Col md="12">
                                                                                                <div className="mb-3">
                                                                                                    <AvField
                                                                                                        label="New password"
                                                                                                        name="password"
                                                                                                        type="password"
                                                                                                        placeholder="Enter new password"
                                                                                                        errorMessage="Enter new password"
                                                                                                        validate={{ required: { value: true } }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="text-muted p-0">
                                                                                                    8 characters or longer. At least one number and one letter.
                                                                                                </div>
                                                                                            </Col>
                                                                                        </Row>
                                                                                    </ModalBody>
                                                                                    <ModalFooter>
                                                                                        <Button type="button" color="white" className="border" onClick={this.modalChangePassword}>Close</Button>
                                                                                        <Button type="button" color="primary">Change Password</Button>
                                                                                    </ModalFooter>
                                                                                </Modal>
                                                                            </Col>
                                                                        </Row>
                                                                        <Button className="w-100" color="primary" type="submit">Save Changes</Button>
                                                                    </AvForm>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                    <TabPane tabId="CompanyProfile">
                                                        <Row>
                                                            <Col sm={12} className="d-flex justify-content-start">
                                                                <div className="me-5" style={{ width: '180px' }}>
                                                                    <Label className="form-label" htmlFor="validationCustom01">Company Logo</Label>

                                                                    <div className="rounded mb-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#F5F5F5', border: '1px dashed #E0E0E0' }}>
                                                                        {
                                                                            this.state.uploadLogo ? <img src={this.state.uploadLogo} className="img-fluid w-100 rounded" /> : <i className="credread-camera-icon me-2 my-5 py-4"></i>
                                                                        }
                                                                    </div>

                                                                    <Button
                                                                        color="white border"
                                                                        className="waves-effect waves-light p-0 w-100"
                                                                    >
                                                                        <div style={{ position: "absolute", zIndex: 1, display: 'flex', justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}><i className="credread-upload-icon me-2"></i> {this.state.btnUploadLogoLabel}</div>
                                                                        <input type="file" onChange={this.handleChangeLogo} accept="image/*" className="p-1" style={{ opacity: "0", position: "relative", zIndex: 2, cursor: "pointer" }} />
                                                                    </Button>

                                                                    <div className="my-2">
                                                                        {
                                                                            this.state.btnUploadLogoLabel == "Change Logo" ?
                                                                                <Button
                                                                                    color="white border"
                                                                                    className="waves-effect waves-light w-100 mb-2"
                                                                                    onClick={this.handleRemoveLogo}
                                                                                >
                                                                                    Remove Logo
                                                                                </Button> :
                                                                                <p>
                                                                                    PNG, JPG or GIF. Minimum 200 by 200 px. Maximum file size 5mb
                                                                                </p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-5">
                                                                    <AvForm className="needs-validation" >
                                                                        <Row>
                                                                            <Col md="12">
                                                                                <div className="mb-3">
                                                                                    <AvField
                                                                                        label="Company Name"
                                                                                        name="CompanyName"
                                                                                        placeholder="ex. Acme"
                                                                                        type="text"
                                                                                        errorMessage="Enter Company Name"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="CompanyName"
                                                                                    />
                                                                                </div>
                                                                            </Col>
                                                                            <Col md="12">
                                                                                <div className="mb-3">
                                                                                    <AvField
                                                                                        label="Industry"
                                                                                        name="Industry"
                                                                                        type="select"
                                                                                        errorMessage="Enter Industry"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="Industry">
                                                                                        <option readonly>Please Select</option>
                                                                                        <option>1</option>
                                                                                        <option>2</option>
                                                                                        <option>3</option>
                                                                                        <option>4</option>
                                                                                        <option>5</option>
                                                                                    </AvField>
                                                                                </div>
                                                                            </Col>
                                                                            <Col md="12">
                                                                                <div className="mb-3">
                                                                                    <AvField
                                                                                        label="Headquarter Location"
                                                                                        name="HeadquarterLocation"
                                                                                        placeholder="Search Location"
                                                                                        type="text"
                                                                                        errorMessage="Enter Headquarter Location"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="HeadquarterLocation"
                                                                                    />
                                                                                </div>
                                                                            </Col>
                                                                            <Col md="12">
                                                                                <div className="mb-3">
                                                                                    <AvField
                                                                                        label="Company Description"
                                                                                        name="CompanyDescription"
                                                                                        placeholder="Describe your company."
                                                                                        type="textarea"
                                                                                        errorMessage="Enter Company Description"
                                                                                        className="form-control"
                                                                                        validate={{ required: { value: true } }}
                                                                                        id="CompanyDescription"
                                                                                    />
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <Button className="w-100" color="primary" type="submit">Save Changes</Button>
                                                                    </AvForm>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                </TabContent>
                                            </Col>
                                        </Row>
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

export default Settings