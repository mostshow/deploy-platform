

import React, { Component, PropTypes } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import isEmpty from 'lodash/isEmpty'
import {Spin, Pagination, Select } from 'antd';
import { editImageBtn  } from '../../actions/image'
import ImageViewLi from './ImageViewLi'
import '../../../css/image.css'
import * as ActionTypes from '../../constants/image'

const Option = Select.Option;
export default class ImageList extends Component {
    constructor(props,context) {
        super(props,context)
        this.onChange = this.onChange.bind(this)
        this.onShowSizeChange = this.onShowSizeChange.bind(this)
        this.handleDel = this.handleDel.bind(this)
        this.onSelect = this.onSelect.bind(this)
        this.state = {
            pagination:{
                pageSize:10,
                page:1,
                category:0
            }
        }

    }
    handleDel (key,url) {
        let id = key;
        this.props.actions.loadDelImage({id,url});
    }
    onSelect(key){
        let category = key;
        let pagination = Object.assign(this.state.pagination,{category})
        this.setState({
            pagination
        })
        this.loadListImage(pagination)
    }
    onShowSizeChange(page,pageSize){
        let pagination = Object.assign(this.state.pagination,{page,pageSize})
        this.setState({
            pagination
        })
        this.loadListImage(pagination)
    }
    onChange(page) {
        let pagination = Object.assign(this.state.pagination,{page})
        this.setState({
            pagination
        })
        this.loadListImage(pagination)
    }
    loadListImage(pagination){
        console.log(pagination)
        this.props.actions.loadListImage({
            dataFrom:(pagination.page - 1)*pagination.pageSize,
            dataCount:pagination.pageSize,
            category:pagination.category||0
        })

    }
    render() {
        const ctx  = this
        const { data , imgCategory, actions, visible,dispatch, loading } = this.props
        let categoryOptions = []
        if(!isEmpty(imgCategory)){
            categoryOptions.push(<Option defaultValue key={0}>全部</Option>)
            imgCategory.forEach(item => {
                    categoryOptions.push(<Option key={item._id}>{item.name}</Option>)
            })
        }else{
            categoryOptions.push(<Option  value={'loading'} key="0">loading</Option>)
        }
        let container = (
            <div className="container">
                <div>
                <Select placeholder="请选择图片类型" defaultValue="全部" onSelect={this.onSelect} style={{ width: 200 }} >
                    {categoryOptions}
                </Select>

                    <Pagination
                        style={{float:'right'}}
                        onShowSizeChange={this.onShowSizeChange}
                        onChange={this.onChange}
                        showQuickJumper
                        showSizeChanger
                        defaultCurrent={this.state.pagination.pagesize}
                        defaultPageSize={this.state.pagination.pagesize}
                        total={data.totalRecord}  />
                </div>
                <ImageViewLi fileList={data.dataSource} handleDel={this.handleDel} />
            </div>
        )

        return(
            <div>
                <Spin spinning={loading}>{container}</Spin>
            </div>
        )
    }
}

ImageList.propTypes = {

}
ImageList.contextTypes = {
  router: PropTypes.object.isRequired
};

