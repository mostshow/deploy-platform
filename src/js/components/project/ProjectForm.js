

import React, {Component , ProTypes} from 'react'
import {Form, Button, Input , Radio, Select, Spin} from 'antd'
import isEmpty from 'lodash/isEmpty'

const FormItem = Form.Item;
const Option = Select.Option;
class ProjectForm extends Component {
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
                gitPath: toEditData.gitPath,
                branch: toEditData.branch,
                // category: toEditData.type,
            });
        }
    }
    componentWillMount() {
        let { proCategory } = this.props;
    }

    onSubmit(e) {
        e.preventDefault();
        let { isEdit, toEditData, actions, loadEditProject, loadCreateProject, form} = this.props;
        let params = form.getFieldsValue()

                    // let     name= '活动页面';
                    // let     gitPath= 'git@github.com:mostshow/drf.git';
                    // let     branch= 'test-project';
                    // let     category='58aac37e8dd5d30da9c4f07f';
                    // let val = {name,gitPath,branch,category}
                    // loadCreateProject(val);
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('form: ', values);
                if(isEdit){
                    let params = {
                        id:toEditData.key,
                        ...values
                    }
                    loadEditProject(params);
                }else{
                    // let     name= '活动页面';
                    // let     gitPath= 'git@10.16.15.113:web-dev/activity.git';
                    // let     branch= 'test-project';
                    // let     category='586f30605b502f92e8950968';
                    // let val = {name,gitPath,branch,category}
                    loadCreateProject(values);
                    form.setFieldsValue({
                        name: '',
                        gitPath: '',
                        branch: '',
                        category: '',
                    });
                }
            }
        });
    }
    handleReturn(){
        let { navigate, dispatch} = this.props
        dispatch(navigate(`/project/list`))
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
                <FormItem {...formItemLayout} label="项目类型"  hasFeedback>
                    {getFieldDecorator('category',{...formOptions})(
                        <Select placeholder="请选择项目类型"  >
                            {categoryOptions}
                        </Select>
                )}
                </FormItem>

                <FormItem {...formItemLayout} hasFeedback label="项目描述">
                    {getFieldDecorator('describe')(<Input type="textarea" />)}
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
ProjectForm.propTypes = {

}
export default Form.create()(ProjectForm)

