
import React, { Component } from "react";
import { Row, Col, Alert, Button, Container, Label } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// action
import { forgetUser } from '../../store/actions';

// import images
import logo from "../../assets/images/logo.svg";
import resetPassword from "../../assets/images/reset-password.svg";

class ForgetPasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        // handleValidSubmit
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    // handleValidSubmit
    handleValidSubmit(event, values) {
        this.props.forgetUser(values, this.props.history);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Container fluid className="p-0">
                        <Row className="g-0">
                            <Col md={6}>
                                <div className="authentication-page-content d-flex align-items-center">
                                    <div className="w-100 h-100">
                                        <Row className="g-0 justify-content-center h-100 bg-white">
                                            <Col xs={10} lg={8}>
                                                <div className="d-flex flex-column h-100 justify-content-between">
                                                    <div>
                                                        <div className="mt-5">
                                                            <Link to="/">
                                                                <img src={logo} alt="CredRead Logo" height="41" />
                                                            </Link>
                                                        </div>
                                                        <div className="mt-0 mt-md-2 mt-lg-5 pt-3">
                                                            <h1 className="mt-4">Forgot your password?</h1>
                                                            <p className="text-muted">
                                                                Please enter your email address and we will send you an email with instructions for resetting your password.
                                                            </p>
                                                        </div>
                                                        <div className="mt-5">

                                                            {this.props.loginError && this.props.loginError ? <Alert color="danger">{this.props.loginError}</Alert> : null}

                                                            <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit} >

                                                                <div className="auth-form-group-custom mb-3">
                                                                    <i className="credread-envelop-icon auti-custom-input-icon"></i>
                                                                    <AvField name="username" value={this.state.username} type="text" className="form-control" id="username" validate={{ email: true, required: true }} placeholder="Enter your registered e-mail." />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <Button block color="primary" className="w-100 btn-lg" type="submit">Reset password</Button>
                                                                </div>

                                                            </AvForm>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className="d-none d-md-block">
                                <div className="bg-primary d-flex justify-content-center align-items-center h-100">
                                    <Row className="g-0 justify-content-center">
                                        <Col md={10} lg={8} >
                                            <div className="d-flex flex-column justify-content-center h-100 text-center">
                                                <img src={resetPassword} alt="Welcome" className="img-fluid" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { message, forgetError, loading } = state.Forget;
    return { message, forgetError, loading };
}

export default withRouter(
    connect(mapStatetoProps, { forgetUser })(ForgetPasswordPage)
);
