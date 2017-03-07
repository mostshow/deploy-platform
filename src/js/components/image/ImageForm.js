

import React, {Component , ProTypes} from 'react'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {Form, Button, Input , Radio, Select, Spin, message} from 'antd'
import ImageViewLi from './ImageViewLi'
import { UPLOAD_URL } from '../../constants/ServerTypes'
import isEmpty from 'lodash/isEmpty'
import '../../../css/image.css'

const FormItem = Form.Item;
const Option = Select.Option;
const dropZoneStyle = {
    width: '100%',
    height: 100,
    borderWidth: 2,
    borderColor: '#666',
    borderStyle: 'dashed',
    borderRadius: 5
};

class ImageForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            fileList: [],
            uploading: false
        }
        this.handleReturn = this.handleReturn.bind(this);
        this.onOpenClick = this.onOpenClick.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }

    onDrop(acceptedFiles) {
        let  { jump } = this.props
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    uploading: true,
                    //fileList:this.state.fileList
                });

                let upload = request.post(UPLOAD_URL)
                .withCredentials()
                .field('categoryId', values.category)
                .field('file', acceptedFiles);

                upload.end((err, res) => {
                    if (err || !res.ok) {
                        message.error(err||'连接错误！')
                        console.error(err);
                    }
                    let response = res.body;
                    if(response.code == -3){
                        message.warning(response.msg)
                        jump('/login')
                    }else{
                        let fileList = this.state.fileList
                        fileList.unshift(response.result)
                        this.setState({
                            fileList,
                            uploading: false
                        });
                    }
                });
            }
        });
    }

    handleDel (key,url) {
        let id = key;
        this.props.loadDelImage({id,url});
        let fileList = this.state.fileList.filter((item) =>{
            return item.key != key
        })
        this.setState({
            fileList,
            uploading: false
        });
    }

    onOpenClick() {
      this.dropzone.open();
    }

    handleReturn(){
        this.props.jump(`/image/list`)
    }

    render(){
        let {form, imgCategory, loading, isEdit, toEditData} = this.props
        let { fileList, uploading } = this.state;
        let getFieldDecorator = form.getFieldDecorator
        let categoryOptions = []
        let formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        };
        let isLoading = loading||uploading;

        let formOptions = {
            rules: [
                { required: true, message: '请选择图片类型' },
            ],
            onChange: this.handleSelectChange
        }
        if(!isEmpty(imgCategory)){
            imgCategory.forEach(item => {
                    categoryOptions.push(<Option key={item._id}>{item.name}</Option>)
            })
        }else{
            categoryOptions.push(<Option  value={'loading'} key="loading">loading</Option>)
        }


        let container = (
            <div>
                <div>

                <Form>
                <FormItem {...formItemLayout} label="图片类型"  hasFeedback>
                    {getFieldDecorator('category',{...formOptions})(
                        <Select placeholder="请选择图片类型"  >
                            {categoryOptions}
                        </Select>
                )}
                </FormItem>
                </Form>
                    <Dropzone multiple={false} ref={(node) => { this.dropzone = node; }} style={dropZoneStyle} onDrop={this.onDrop}>
                        <h2 style={{textAlign: 'center'}}>点击 / 拖拽</h2>
                    </Dropzone>
                    <ImageViewLi fileList={fileList} handleDel={this.handleDel} />
                </div>

            </div>
        )
        return(
            <div>
                <Spin spinning={isLoading}>{container}</Spin>
            </div>
        )
    }
}
ImageForm.propTypes = {

}
export default Form.create()(ImageForm)



