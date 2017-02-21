

import React, { Component, PropTypes } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Table,Spin,Button,Popconfirm } from 'antd';
export default class UserList extends Component {
    constructor(props) {
        super(props)

    }
    handleDel (user) {
        let id = user.key;
        this.props.actions.loadDelUser({id});
    }

    handleEdit (toEditData){
        let {actions, navigate, dispatch} = this.props
        actions.editUserBtn({toEditData})
        dispatch(navigate(`/user/edit`))

    }
    render() {
        const ctx  = this
        const { data , loading } = this.props
        const isEmpty = data.length === 0
        const columns = [{
            title: '用户名',
            dataIndex: 'username',
            key: 'username',

        }, {
            title: '用户类型',
            dataIndex: 'rolename',
            key: 'rolename',
        }, {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
        }, {
            title: '创建时间',
            dataIndex: 'createAt',
            key: 'createAt',
        }, {
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
                <Table dataSource={data.dataSource} columns={columns} bordered />
            </div>
        )

        return(
            <div>
                <Spin spinning={loading}>{container}</Spin>
            </div>
        )
    }
}
UserList.propTypes = {

}
UserList.defaultProps = {

}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(loadRepo, dispatch)
// }




