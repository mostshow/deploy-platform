import React, { findDOMNode, Component, PropTypes } from 'react'
import {Link} from 'react-router'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export default class Nav extends Component {
    render() {
        return(
            <div className='menu'>
            <Menu mode="inline" theme="dark" style={{width: '240px'}}>
                <SubMenu key="project" title={<span><Icon type="appstore"/><span>项目管理</span></span>}>
                    <MenuItem key="project-list">
                        <Link to="/project/list">项目列表</Link>
                    </MenuItem>
                    <MenuItem key="project-new">
                        <Link to="/project/new">新建项目</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu key="category" title={<span><Icon type="tag" /><span>项目栏目</span></span>}>
                    <MenuItem key="category-list">
                        <Link to="/category/list">栏目列表</Link>
                    </MenuItem>
                    <MenuItem key="category-new">
                        <Link to="/category/new">添加栏目</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu key="user" title={<span><Icon type="user"/><span>用户管理</span></span>}>
                    <MenuItem key="user-list">
                        <Link to="/user/list">用户列表</Link>
                    </MenuItem>
                    <MenuItem key="user-new">
                        <Link to="/user/new">新建用户</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu key="roles" title={<span><Icon type="team" /><span>角色管理</span></span>}>
                    <MenuItem key="roles-list">
                        <Link to="/roles/list">角色列表</Link>
                    </MenuItem>
                    <MenuItem key="roles-new">
                        <Link to="/roles/new">新建角色</Link>
                    </MenuItem>
                </SubMenu>
            </Menu>
            </div>
        )
    }
}

Nav.propTypes = {

}


