

import React, { Component, PropTypes } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Table,Spin,Button,Popconfirm } from 'antd';
import { editPublishBtn  } from '../../actions/publish'
import * as ActionTypes from '../../constants/publish'

export default class PublishList extends Component {
    constructor(props,context) {
        super(props,context)

    }
    handleDel (publish) {
        let id = publish.key;
        this.props.actions.loadDelPublish({id});
    }

    handleEdit (toEditData){
        let {actions, navigate, dispatch} = this.props
        actions.editPublishBtn({toEditData})
        dispatch(navigate(`/publish/edit`))

    }

    render() {
        const ctx  = this
        const { data , actions, visible,dispatch, loading } = this.props
        const isEmpty = data.length === 0
        const columns = [{
            title: '服务器',
            dataIndex: 'publishName',
            key: 'publishName',

        },{
            title: 'ip地址',
            dataIndex: 'ip',
            key: 'ip',

        },{
            title: '域名',
            dataIndex: 'domain',
            key: 'domain',

        },{
            title: '生成目录',
            dataIndex: 'generate',
            key: 'generate',
        },{
            title: '路径',
            dataIndex: 'dir',
            key: 'dir',
        },{
            title: '创建时间',
            dataIndex: 'createAt',
            key: 'createAt',
        },{
            title: '创建者',
            dataIndex: 'createBy',
            key: 'createBy',
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
PublishList.propTypes = {

}
PublishList.contextTypes = {
  router: PropTypes.object.isRequired
};

