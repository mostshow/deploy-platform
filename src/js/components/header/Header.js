
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { Menu, Icon, Button } from 'antd';
import connect from 'react-redux'


const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
class Header extends Component {
    constructor(props,context) {
        super(props,context)
        this.logout = this.logout.bind(this);
    }
    logout(event) {
        this.props.actions.loadLogoutUser();
        event.preventDefault();
    }
    componentWillReceiveProps() {
        if(localStorage.getItem('jwtToken')){
        }
    }
    render () {
        const { login } = this.props
        let username = login.loginUser&&login.loginUser.username
        const userLinks = (
            <div className="login">
                <a  href="javascript:void(0)" onClick={this.logout}>登出</a>
                <a className="mgr10" href="javascript:void(0)">{ `Welcome Back ${ username}` }</a>
            </div>
        )

        const guestLinks = (
            <div className="login">
            <Link to="/login">登录</Link>
            </div>
        )
        return (
            <div >
            <header className='header'>
            <Link to="/">自动部署系统</Link>
            </header>
            { login.isAuthenticated ? userLinks : guestLinks }
            </div>
        );
    }
}
Header.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Header;
