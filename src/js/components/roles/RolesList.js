

import React, { Component, PropTypes } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Table,Spin,Button,Popconfirm } from 'antd';
import { editRolesBtn  } from '../../actions/roles'
import * as ActionTypes from '../../constants/roles'

export default class RolesList extends Component {
    constructor(props,context) {
        super(props,context)

    }
    handleDel (roles) {
        let id = roles.key;
        this.props.actions.loadDelRoles({id});
    }

    handleEdit (toEditData){
        let {actions, navigate, dispatch} = this.props
        actions.editRolesBtn({toEditData})
        dispatch(navigate(`/roles/edit`))

    }

    render() {
        const ctx  = this
        const { data , actions, visible,dispatch, loading } = this.props
        const isEmpty = data.length === 0
        const columns = [{
            title: '名称',
            dataIndex: 'rolename',
            key: 'rolename',

        },{
            title: 'roleId',
            dataIndex: 'roleId',
            key: 'roleId',

        },{
            title: '创建时间',
            dataIndex: 'createAt',
            key: 'createAt',

        },{
            title: '更新时间',
            dataIndex: 'updateAt',
            key: 'updateAt',

        },{
            title: '管理',
            dataIndex: '',
            key: 'x',
            width:120,
            render: (text, record) => (
            <Button.Group type="ghost">
                <Button className='mgr5' size="small" onClick={() => this.handleEdit(record)}>编辑</Button>
                <Popconfirm title="确定要删除吗？" onConfirm={() => this.handleDel(record)}>
                    <Button size="small">删除</Button>
                </Popconfirm>
            </Button.Group>
            )
        }]

        let container = (
            <div className="container">
                <Table dataSource={data.dataSource} pagination={false}  columns={columns} bordered />
            </div>
        )

        return(
            <div>
                <Spin spinning={loading}>{container}</Spin>
            </div>
        )
    }
}
RolesList.propTypes = {

}
RolesList.contextTypes = {
  router: PropTypes.object.isRequired
};

