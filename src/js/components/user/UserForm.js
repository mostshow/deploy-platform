

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
        this.handlePasswordBlur = this.handlePasswordBlur.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.checkConfirm = this.checkConfirm.bind(this);
        this.state = {
            passwordDirty: false,
        }
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
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if(isEdit){
                    let params = {
                        id:toEditData.key,
                        ...values
                    }
                    loadEditUser(params);
                }else{
                    let val = {name,gitPath,branch,category}
                    loadCreateUser(val);
                    form.setFieldsValue({
                        username: '',
                        email: '',
                        password: '',
                        rePassword: '',
                        roleId: '',
                    });
                }
            }
        });
    }
    handleReturn(){
        let { navigate, dispatch} = this.props
        dispatch(navigate(`/user/list`))
    }
    handlePasswordBlur(e) {
        const value = e.target.value;
        this.setState({ passwordDirty: this.state.passwordDirty || !!value });
    }
    checkPassword(rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码不一致!');
        } else {
            callback();
        }
    }
    checkConfirm(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.passwordDirty) {
            form.validateFields(['rePassword'], { force: true });
        }
        callback();
    }
    render(){
        const {form, roles , loading, isEdit, toEditData } = this.props
        const getFieldDecorator = form.getFieldDecorator
        const addOptions = []
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
        const rolename = isEdit&&toEditData.rolename

        let formOptions = {
            rules: [
                { required: true, message: '请选择用户类型' },
            ],
            onChange: this.handleSelectChange
        }
        if(!isEmpty(roles)){
            roles.forEach(item => {
                if(rolename&&rolename == item.rolename){
                    rolesOptions.initialValue = item._id;
                    addOptions.push(<Option   key={item._id}>{item.rolename}</Option>)
                }else
                    addOptions.push(<Option   key={item._id}>{item.rolename}</Option>)

            })
        }else{
            addOptions.push(<Option  value={'loading'} key="loading">loading</Option>)
        }


        let container = (
            <div>
            <Form onSubmit={this.onSubmit}>
                <FormItem {...formItemLayout} hasFeedback label="用户名">
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入项目名称!' }],
                    })(
                        <Input />
                )}
                </FormItem>
                <FormItem {...formItemLayout} label="E-mail" hasFeedback >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: '请输入有效的邮箱!',
                        }, {
                            required: true, message: '请输入你的邮箱',
                        }],
                    })( <Input />)}
                </FormItem>
                <FormItem {...formItemLayout}label="密码" hasFeedback >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: '请输入密码!',
                        }, {
                            validator: this.checkConfirm,
                        }],
                    })(<Input type="password" onBlur={this.handlePasswordBlur} />)}
                </FormItem>
                <FormItem {...formItemLayout} label="确认密码" hasFeedback >
                    {getFieldDecorator('rePassword', {
                        rules: [{
                            required: true, message: '请输入确认密码!',
                        }, {
                            validator: this.checkPassword,
                        }],
                    })( <Input type="password" />)}
                </FormItem>
                <FormItem {...formItemLayout} label="用户类型"  hasFeedback>
                    {getFieldDecorator('roleId', {...formOptions})(
                        <Select placeholder="请选择用户类型"  >
                            {addOptions}
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
ProjectForm.propTypes = {

}
export default Form.create()(ProjectForm)

