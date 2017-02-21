

import React, { Component, PropTypes } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Table,Spin,Button } from 'antd';
export default class ProstatusList extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const ctx  = this
        const { data , actions, visible, loading } = this.props
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
            title: '创建者',
            dataIndex: 'createBy',
            key: 'createBy',
        },{
            title: '管理',
            dataIndex: '',
            key: 'x',
            width:100,
            render: (text, record) => (
                <span>
                    <a href="javascript:void(0)" onClick={() => actions.editProject(record.key)} >编辑</a>
                    <span className="ant-divider" />
                    <a href="javascript:void(0)" onClick={() => ctx.handleClick(record.key)} >删除</a>
                </span>
            )
        }]

        let container = (
            <div className="container">
                <Table dataSource={data.dataSource} columns={columns} bordered />
            </div>
        )
        if (loading) {
            return (
                <Spin tip="Loading..." style={{marginTop:100+'px'}}>
                    {container}
                </Spin>
            )
        }
        return(
            container
        )
    }
}
ProstatusList.propTypes = {
    
}


