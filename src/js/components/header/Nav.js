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
                    <MenuItem key="project-create">
                        <Link to="/project/create">新建项目</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu key="category" title={<span><Icon type="tag" /><span>项目栏目</span></span>}>
                    <MenuItem key="category-list">
                        <Link to="/category/list">栏目列表</Link>
                    </MenuItem>
                    <MenuItem key="category-create">
                        <Link to="/category/create">添加栏目</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu key="image" title={<span><Icon type="tag" /><span>图片管理</span></span>}>
                    <MenuItem key="image-list">
                        <Link to="/image/list">图片列表</Link>
                    </MenuItem>
                    <MenuItem key="image-create">
                        <Link to="/image/create">添加图片</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu key="imgCategory" title={<span><Icon type="tag" /><span>图片栏目</span></span>}>
                    <MenuItem key="imgCategory-list">
                        <Link to="/imgCategory/list">栏目列表</Link>
                    </MenuItem>
                    <MenuItem key="imgCategory-create">
                        <Link to="/imgCategory/create">添加栏目</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu key="publish" title={<span><Icon type="tag" /><span>服务器配置</span></span>}>
                    <MenuItem key="publish-list">
                        <Link to="/publish/list">服务器列表</Link>
                    </MenuItem>
                    <MenuItem key="publish-create">
                        <Link to="/publish/create">添加服务器</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu key="user" title={<span><Icon type="user"/><span>用户管理</span></span>}>
                    <MenuItem key="user-list">
                        <Link to="/user/list">用户列表</Link>
                    </MenuItem>
                    <MenuItem key="user-create">
                        <Link to="/user/create">新建用户</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu key="roles" title={<span><Icon type="team" /><span>角色管理</span></span>}>
                    <MenuItem key="roles-list">
                        <Link to="/roles/list">角色列表</Link>
                    </MenuItem>
                    <MenuItem key="roles-create">
                        <Link to="/roles/create">新建角色</Link>
                    </MenuItem>
                </SubMenu>
            </Menu>
            </div>
        )
    }
}

Nav.propTypes = {

}


