

import React, { Component, PropTypes } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Table,Spin,Button,Popconfirm } from 'antd';
export default class ProjectList extends Component {
    constructor(props) {
        super(props)

    }
    handleDel (proCategory) {
        let id = proCategory.key;
        this.props.actions.loadDelProject({id});
    }

    handleOperate (operateData){
        let {actions, navigate, dispatch} = this.props
        actions.operateProjectBtn({operateData})
        dispatch(navigate(`/project/operate`))

    }
    handleEdit (toEditData){
        let {actions, navigate, dispatch} = this.props
        actions.editProjectBtn({toEditData})
        dispatch(navigate(`/project/edit`))

    }
    render() {
        const ctx  = this
        const { data , loading } = this.props
        const isEmpty = data.length === 0
        const columns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name',

        }, {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
        }, {
            title: '分支名',
            dataIndex: 'branch',
            key: 'branch',
        }, {
            title: 'git地址',
            dataIndex: 'gitPath',
            key: 'gitPath',
        }, {
            title: '创建时间',
            dataIndex: 'createAt',
            key: 'createAt',
        }, {
            title: '创建者',
            dataIndex: 'createBy',
            key: 'createBy',
        }, {
            title: '管理',
            dataIndex: '',
            key: 'x',
            width:160,
            render: (text, record) => (
            <Button.Group type="ghost">
                <Button className='mgr5' size="small" onClick={() => this.handleOperate(record)}>管理</Button>
                <Button className='mgr5' size="small" onClick={() => this.handleEdit(record)}>编辑</Button>
                <Popconfirm title="确定要删除吗？" onConfirm={() => this.handleDel(record)}>
                    <Button size="small">删除</Button>
                </Popconfirm>
            </Button.Group>
            )
        }]

        let container = (
            <div className="container">
                <Table dataSource={data.dataSource} expandedRowRender={record => <p>{record.description}</p>} columns={columns} bordered />
            </div>
        )

        return(
            <div>
                <Spin spinning={loading}>{container}</Spin>
            </div>
        )
    }
}
ProjectList.propTypes = {

}
ProjectList.defaultProps = {

}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(loadRepo, dispatch)
// }




