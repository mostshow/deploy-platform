

import React, {Component , ProTypes} from 'react'
import {Form, Button, Input , Radio, Select, Spin} from 'antd'
import isEmpty from 'lodash/isEmpty'

const FormItem = Form.Item;
const Option = Select.Option;
class ImageForm extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
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
        let { proCategory } = this.props;
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
        const {form, proCategory, loading, isEdit, toEditData } = this.props
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
                { required: true, message: '请选择项目类型' },
            ],
            onChange: this.handleSelectChange
        }

        if(!isEmpty(proCategory)){
            proCategory.forEach(item => {
                if(category&&category == item.name){
                    formOptions.initialValue = item._id
                    categoryOptions.push(<Option   key={item._id}>{item.name}</Option>)
                }else
                    categoryOptions.push(<Option   key={item._id}>{item.name}</Option>)

            })
        }else{
            categoryOptions.push(<Option  value={'loading'} key="loading">loading</Option>)
        }


        let container = (
            <div>
            <Form onSubmit={this.onSubmit}>
                <FormItem {...formItemLayout} hasFeedback label="项目名">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入项目名称!' }],
                    })(
                        <Input />
                )}
                </FormItem>
                <FormItem  {...formItemLayout} hasFeedback label="git －地址">
                    {getFieldDecorator('gitPath', {
                        rules: [{ required: true, message: '请输入项目名称!' }],
                    })(
                        <Input />
                )}
                </FormItem>
                <FormItem {...formItemLayout} hasFeedback label="分支名">
                    {getFieldDecorator('branch', {
                        rules: [{ required: true, message: '请输入项目名称!' }],
                    })(
                        <Input />
                )}
                </FormItem>
                <FormItem {...formItemLayout} hasFeedback label="访问目录">
                    {getFieldDecorator('accessDir' )(
                        <Input placeholder="可不填，自动生成" />
                )}
                </FormItem>
                <FormItem {...formItemLayout} label="项目类型"  hasFeedback>
                    {getFieldDecorator('category',{...formOptions})(
                        <Select placeholder="请选择项目类型"  >
                            {categoryOptions}
                        </Select>
                )}
                </FormItem>

                <FormItem {...formItemLayout} hasFeedback label="项目描述">
                    {getFieldDecorator('description',{
                        rules: [{ required: true, message: '请输入项目描述!' }],
                    })(<Input type="textarea" />)}
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

