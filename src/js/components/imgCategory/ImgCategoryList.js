

import React, { Component, PropTypes } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Table,Spin,Button,Popconfirm } from 'antd';
import { editImgCategoryBtn  } from '../../actions/imgCategory'
import * as ActionTypes from '../../constants/imgCategory'

export default class ImgCategoryList extends Component {
    constructor(props,context) {
        super(props,context)

    }
    handleDel (imgCategory) {
        let id = imgCategory.key;
        this.props.actions.loadDelImgCategory({id});
    }

    handleEdit (toEditData){
        let {actions, navigate, dispatch} = this.props
        actions.editImgCategoryBtn({toEditData})
        dispatch(navigate(`/category/edit`))

    }

    render() {
        const ctx  = this
        const { data , actions, visible,dispatch, loading } = this.props
        const isEmpty = data.length === 0
        const columns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name',

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
ImgCategoryList.propTypes = {

}
ImgCategoryList.contextTypes = {
  router: PropTypes.object.isRequired
};

