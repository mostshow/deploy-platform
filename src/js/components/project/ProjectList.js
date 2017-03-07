

import React, { Component, PropTypes } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Table,Spin,Button,Popconfirm, Select, Pagination } from 'antd';
import isEmpty from 'lodash/isEmpty'

const Option = Select.Option;
export default class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.onSelect = this.onSelect.bind(this)
        this.onShowSizeChange = this.onShowSizeChange.bind(this)
        this.onShowSizeChange = this.onShowSizeChange.bind(this)
        this.onChange = this.onChange.bind(this)

        this.state = {
            pagination:{
                pageSize:10,
                page:1,
                category:0
            }
        }

    }
    handleDel (proCategory) {
        let id = proCategory.key;
        let pagination = this.state.pagination

        this.props.actions.updateProjectPagination({pagination});
        this.props.actions.loadDelProject({id});
    }

    onSelect(key){
        let category = key;
        let pagination = Object.assign(this.state.pagination,{category})
        this.loadListProject(pagination)
    }

    onShowSizeChange(page,pageSize){
        let pagination = Object.assign(this.state.pagination,{page,pageSize})
        this.setState({
            pagination
        })
        this.loadListProject(pagination)
    }
    onChange(page) {
        let pagination = Object.assign(this.state.pagination,{page})
        this.setState({
            pagination
        })
        this.loadListProject(pagination)
    }
    loadListProject(pagination){
        this.props.actions.loadListProject({
            dataFrom:(pagination.page - 1)*pagination.pageSize,
            dataCount:pagination.pageSize,
            category:pagination.category||0
        })

    }

    handleOperate (operateData){
        actions.operateProjectBtn({operateData})
        this.props.jump(`/project/operate`)

    }
    handleEdit (toEditData){
        actions.editProjectBtn({toEditData})
        this.props.jump(`/project/edit`)

    }
    render() {
        const ctx  = this
        const { data , loading, proCategory, pagination } = this.props
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

        let categoryOptions = []
        if(!isEmpty(proCategory)){
            categoryOptions.push(<Option defaultValue key={0}>全部</Option>)
            proCategory.forEach(item => {
                    categoryOptions.push(<Option key={item._id}>{item.name}</Option>)
            })
        }else{
            categoryOptions.push(<Option  value={'loading'} key="0">loading</Option>)
        }
        let container = (
            <div className="container">
                <div>
                    <Select placeholder="请选择项目类型" defaultValue="全部" onSelect={this.onSelect} style={{ width: 200 }} >
                        {categoryOptions}
                    </Select>
                    <Pagination
                        style={{float:'right'}}
                        onShowSizeChange={this.onShowSizeChange}
                        onChange={this.onChange}
                        showQuickJumper
                        showSizeChanger
                        defaultCurrent={pagination.page}
                        defaultPageSize={pagination.pagesize}
                        total={data.totalRecord}  />
                </div>
                <Table
                    className='mgt20'
                    pagination={false}
                    dataSource={data.dataSource}
                    expandedRowRender={record => <p>{record.description}</p>} columns={columns} bordered />
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




