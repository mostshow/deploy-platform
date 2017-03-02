

import React, {Component , ProTypes} from 'react'
import {Form, Button, Input , Radio, Select, Spin, Upload, Icon, Modal} from 'antd'
import isEmpty from 'lodash/isEmpty'
import '../../../css/image.css'

const FormItem = Form.Item;
const Option = Select.Option;
class ImageForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            previewVisible: false,
            previewImage: '',
            uploaderProps : {
                action: "http://localhost:3002/api/image/create",
                data: { categoryId: 1, size: 2 },
                multiple: true,
                withCredentials:true,
                listType: "picture-card",
                showUploadListr: false,
                beforeUpload(file) {
                    console.log('beforeUpload', file.name);
                },
                onStart: (file) => {
                    console.log('onStart', file.name);
                    // this.refs.inner.abort(file);
                },
                onSuccess(file) {
                    console.log('onSuccess', file);
                },
                onProgress(step, file) {
                    console.log('onProgress', Math.round(step.percent), file.name);
                },
                onError(err) {
                    console.log('onError', err);
                },
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.beforeUpload = this.beforeUpload.bind(this);
    }
    beforeUpload(fileList){
        console.log(arguments)
        console.log({ fileList })
        // this.setState({ fileList })
        // return false;
    }
    handleCancel(){
        this.setState({ previewVisible: false })
    }

    handlePreview(file) {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange ({ fileList }){
        // return;
        console.log({fileList})
        this.setState({ fileList })
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
    componentWillMount() {
        let { imgCategory } = this.props;
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
        const tailFormItemLayout = {
            wrapperCol: {
                span: 14,
                offset: 6,
            },
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


        let container = (
            <div>
                  <div className="clearfix">
                      <Upload
                          {...this.state.uploaderProps}
                          onPreview={this.handlePreview}
                          onChange={this.handleChange}
                          beforeUpload={this.beforeUpload}
                      >
                      {uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                      <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                  </div>
                <Form onSubmit={this.onSubmit}>
                    <FormItem {...formItemLayout} hasFeedback label="图片名">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: '请输入图片名称!' }],
                        })(
                            <Input />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="图片类型"  hasFeedback>
                    {getFieldDecorator('category',{...formOptions})(
                        <Select placeholder="请选择图片类型"  >
                            {categoryOptions}
                        </Select>
                )}
            </FormItem>

            <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" size="large">提交</Button>
                <Button  className="mgl10" onClick={this.handleReturn} size="large">返回</Button>
            </FormItem>
        </Form>
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


