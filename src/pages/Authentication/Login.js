import React, { Component } from 'react';

import { Row, Col, Input, Button, Alert, Container, Label } from "reactstrap";

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import { checkLogin, apiError } from '../../store/actions';

// import images
import logo from "../../assets/images/logo.svg";
import loginHeroImg from "../../assets/images/login-hero-image.svg";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "admin@admin.com", password: "123456" }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, values) {
        this.props.checkLogin(values, this.props.history);
    }

    componentDidMount() {
        this.props.apiError("");
        document.body.classList.add("auth-body-bg");
    }

    componentWillUnmount() {
        document.body.classList.remove("auth-body-bg");
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
                                            <Col xs={10} lg={8} >
                                                <div className="d-flex flex-column h-100 justify-content-between">
                                                    <div>
                                                        <div className="mt-5">
                                                            <Link to="/">
                                                                <img src={logo} alt="CredRead Logo" height="41" />
                                                            </Link>
                                                        </div>
                                                        <div className="mt-0 mt-md-2 mt-lg-5 pt-3">
                                                            <h1 className="mt-4">Employer Sign In</h1>
                                                            <p className="text-muted">Amet minim mollit non deserunt ullamco est sit. </p>
                                                        </div>
                                                        <div className="mt-5">

                                                            {this.props.loginError && this.props.loginError ? <Alert color="danger">{this.props.loginError}</Alert> : null}

                                                            <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit} >

                                                                <div className="auth-form-group-custom mb-3">
                                                                    <i className="credread-envelop-icon auti-custom-input-icon"></i>
                                                                    <AvField name="username" value={this.state.username} type="text" className="form-control" id="username" validate={{ email: true, required: true }} placeholder="Enter username" />
                                                                </div>

                                                                <div className="auth-form-group-custom mb-3">
                                                                    <i className="credread-lock-icon auti-custom-input-icon"></i>
                                                                    <AvField name="password" value={this.state.password} type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <Button block color="primary" className="w-100 btn-lg" type="submit">Sign In</Button>
                                                                </div>

                                                                <div className="mt-3">
                                                                    <Link to="/forgot-password" className="text-muted">Forgot your password?</Link>
                                                                </div>
                                                            </AvForm>
                                                        </div>
                                                    </div>
                                                    <div className="mt-5 mb-2">
                                                        <p>Don’t have an account? <Link to="#" className="fw-medium text-primary"> Contact sales </Link> </p>
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
                                                <img src={loginHeroImg} alt="Welcome" className="img-fluid" />
                                                <h2 className='text-light font-weight-regular mt-4'>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                                </h2>
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
    const { loginError } = state.Login;
    return { loginError };
}

export default withRouter(connect(mapStatetoProps, { checkLogin, apiError })(Login));