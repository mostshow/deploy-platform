import React, { findDOMNode, Component, PropTypes } from 'react'
import {Link} from 'react-router'
import { Menu, Icon } from 'antd';
import jwtDecode from 'jwt-decode'

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

// if (localStorage.jwtToken) {
    // let user = jwtDecode(localStorage.jwtToken);

export default class Nav extends Component {
    render() {
        const { login } = this.props
        let roleId = login.isAuthenticated?login.loginUser.roleId.roleId:''
        let  project = (
                <SubMenu key="project" title={<span><Icon type="appstore"/><span>项目管理</span></span>}>
                    <MenuItem key="project-list">
                        <Link to="/project/list">项目列表</Link>
                    </MenuItem>
                    <MenuItem key="project-create">
                        <Link to="/project/create">新建项目</Link>
                    </MenuItem>
                </SubMenu>
        )
        let category= (
                <SubMenu key="category" title={<span><Icon type="tag" /><span>项目栏目</span></span>}>
                    <MenuItem key="category-list">
                        <Link to="/category/list">栏目列表</Link>
                    </MenuItem>
                    <MenuItem key="category-create">
                        <Link to="/category/create">添加栏目</Link>
                    </MenuItem>
                </SubMenu>
        )
        let image= (
                <SubMenu key="image" title={<span><Icon type="tag" /><span>图片管理</span></span>}>
                    <MenuItem key="image-list">
                        <Link to="/image/list">图片列表</Link>
                    </MenuItem>
                    <MenuItem key="image-create">
                        <Link to="/image/create">添加图片</Link>
                    </MenuItem>
                </SubMenu>
        )
        let imgCategory= (
                <SubMenu key="imgCategory" title={<span><Icon type="tag" /><span>图片栏目</span></span>}>
                    <MenuItem key="imgCategory-list">
                        <Link to="/imgCategory/list">栏目列表</Link>
                    </MenuItem>
                    <MenuItem key="imgCategory-create">
                        <Link to="/imgCategory/create">添加栏目</Link>
                    </MenuItem>
                </SubMenu>
        )
        let publish= (
                <SubMenu key="publish" title={<span><Icon type="tag" /><span>服务器配置</span></span>}>
                    <MenuItem key="publish-list">
                        <Link to="/publish/list">服务器列表</Link>
                    </MenuItem>
                    <MenuItem key="publish-create">
                        <Link to="/publish/create">添加服务器</Link>
                    </MenuItem>
                </SubMenu>
        )
        let user= (
                <SubMenu key="user" title={<span><Icon type="user"/><span>用户管理</span></span>}>
                    <MenuItem key="user-list">
                        <Link to="/user/list">用户列表</Link>
                    </MenuItem>
                    <MenuItem key="user-create">
                        <Link to="/user/create">新建用户</Link>
                    </MenuItem>
                </SubMenu>
        )
        let setting= (
                <SubMenu key="user_modify" title={<span><Icon type="user"/><span>个人设置</span></span>}>
                    <MenuItem key="user-modify">
                        <Link to="/user/modify">修改资料</Link>
                    </MenuItem>
                </SubMenu>
        )
        let roles= (
                <SubMenu key="roles" title={<span><Icon type="team" /><span>角色管理</span></span>}>
                    <MenuItem key="roles-list">
                        <Link to="/roles/list">角色列表</Link>
                    </MenuItem>
                    <MenuItem key="roles-create">
                        <Link to="/roles/create">新建角色</Link>
                    </MenuItem>
                </SubMenu>
        )

        let roleControl = [
            [project, category, image, imgCategory, publish, user, roles, setting ],//管理员
            [project, category, image, imgCategory, setting],//开发
            [project, category, setting ],//测试
            [image, imgCategory, setting ],//运营
            [project, category, image, imgCategory, publish, setting ],//运维
        ]

        return(
            <div className='menu'>
            <Menu mode="inline" theme="dark" style={{width: '240px'}}>
                {roleControl[roleId]}
            </Menu>
            </div>
        )

    }
}

Nav.propTypes = {

}


