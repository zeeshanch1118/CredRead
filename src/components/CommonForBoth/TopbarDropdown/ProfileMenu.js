import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//i18n
import { withNamespaces } from "react-i18next";

// users
import avatar from '../../../assets/images/user-thumb.png';

class ProfileMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    render() {

        let username = "Admin";
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser"));
            const uNm = obj.email.split("@")[0];
            username = uNm.charAt(0).toUpperCase() + uNm.slice(1);
        }

        return (
            <React.Fragment>
                <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-inline-block user-dropdown">
                    <DropdownToggle tag="button" className="btn header-item waves-effect d-flex align-items-center" id="page-header-user-dropdown">
                        <img className="rounded-circle header-profile-user me-2" src={avatar} alt="Header Avatar" />
                        <div className='d-none d-xl-flex flex-column align-items-start me-2'>
                            <div className="text-dark">Jenny Wilson</div>
                            <div className="text-muted"><small>Local Community Hospital</small></div>
                        </div>
                        <i className="credread-arrowdown-icon d-none ms-1 d-xl-inline-block" style={{ fontSize: 11 }}></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem href="#">{this.props.t('Account')}</DropdownItem>
                        <DropdownItem href="#">{this.props.t('Company Profile')}</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem className="text-danger" href="/logout">{this.props.t('Log Out')}</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default withNamespaces()(ProfileMenu);
