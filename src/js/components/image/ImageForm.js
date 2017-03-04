

import React, {Component , ProTypes} from 'react'
import {Form, Button, Input , Radio, Select, Spin, Upload, Icon, Modal} from 'antd'
import isEmpty from 'lodash/isEmpty'
import '../../../css/image.css'
import Dropzone from 'react-dropzone';
import request from 'superagent';

const FormItem = Form.Item;
const Option = Select.Option;
const UPLOAD_URL = 'http://localhost:3002/api/image/create';
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
            files: [],
            previewVisible: false,
            previewImage: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
        this.onOpenClick = this.onOpenClick.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(acceptedFiles) {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // this.setState({
                //     files: acceptedFiles
                // });
                console.log('form: ', values);
                let upload = request.post(UPLOAD_URL)
                .withCredentials()
                .field('categoryId', values.category)
                .field('file', acceptedFiles);

                upload.end((err, response) => {
                    if (err) {
                        console.error(err);
                    }

                    console.log(response)
                    // if (response.body.secure_url !== '') {
                    //     this.setState({
                    //         uploadedFileCloudinaryUrl: response.body.secure_url
                    //     });
                    // }
                });
            }
        });
    }

    onOpenClick() {
      this.dropzone.open();
    }

    componentDidMount() {
        let { isEdit, toEditData} = this.props;
        if(this.props.isEdit){
            this.props.form.setFieldsValue({
                name: toEditData.name,
                description: toEditData.description,
            });
        }
    }
    onSubmit(e) {
        e.preventDefault();
        let { isEdit, toEditData, actions, loadEditImage, loadCreateImage, form} = this.props;
        let params = form.getFieldsValue()

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('form: ', values);
                if(isEdit){
                    let params = {
                        id:toEditData.key,
                        ...values
                    }
                    loadEditImage(params);
                }else{
                    if(!values.accessDir){
                        delete values.accessDir
                    }
                    loadCreateImage(values);
                    form.setFieldsValue({
                        name: '',
                        description:''
                    });
                }
            }
        });
    }
    handleReturn(){
        let { navigate, dispatch} = this.props
        dispatch(navigate(`/image/list`))
    }
    render(){
        const {form, imgCategory, loading, isEdit, toEditData} = this.props
        const { previewVisible, previewImage, fileList } = this.state;
        const getFieldDecorator = form.getFieldDecorator
        const categoryOptions = []
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        };
        const category = isEdit&&toEditData.type

        let formOptions = {
            rules: [
                { required: true, message: '请选择图片类型' },
            ],
            onChange: this.handleSelectChange
        }
        const uploadButton = (
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
          </div>
        );
        if(!isEmpty(imgCategory)){
            imgCategory.forEach(item => {
                if(category&&category == item.name){
                    formOptions.initialValue = item._id
                    categoryOptions.push(<Option key={item._id}>{item.name}</Option>)
                }else
                    categoryOptions.push(<Option key={item._id}>{item.name}</Option>)

            })
        }else{
            categoryOptions.push(<Option  value={'loading'} key="loading">loading</Option>)
        }


                    // <div>{this.state.files.map((file) => <img width="100" height='100' src={file.preview} /> )}</div>
        let container = (
            <div>
                <div>

                <Form onSubmit={this.onSubmit}>
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
                    {this.state.files.length > 0 ? <div>
                    <h2>Uploading {this.state.files.length} files...</h2>
                    <ul>
                        <li></li>
                    </ul>
                    </div> : null}
                </div>

            </div>
)
return(
    <div>
        <Spin spinning={loading}>{container}</Spin>
    </div>
)
    }
}
ImageForm.propTypes = {

}
export default Form.create()(ImageForm)



