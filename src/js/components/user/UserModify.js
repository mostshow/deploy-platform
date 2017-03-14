

import React, {Component , ProTypes} from 'react'
import {Form, Button, Input , Radio, Select, Spin} from 'antd'
import isEmpty from 'lodash/isEmpty'

const FormItem = Form.Item;
const Option = Select.Option;
class UserModify extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.handlePasswordBlur = this.handlePasswordBlur.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.checkConfirm = this.checkConfirm.bind(this);
        this.state = {
            passwordDirty: false,
        }
    }
    componentDidMount() {
        const {toEditData} = this.props
        this.props.form.setFieldsValue({
            username: toEditData.username
        });
    }

    onSubmit(e) {
        e.preventDefault();
        let { toEditData, loadModifyUser, form} = this.props;
        let params = form.getFieldsValue()
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let params = {
                    id:toEditData.id,
                    ...values
                }
                loadModifyUser(params);
                form.setFieldsValue({
                    password: '',
                    rePassword: '',
                });
            }
        });
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
        const {form, loadModifyUser, toEditData} = this.props
        const getFieldDecorator = form.getFieldDecorator
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
        let container = (
            <div>
            <Form onSubmit={this.onSubmit}>
                <FormItem {...formItemLayout} hasFeedback label="用户名">
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名称!' }],
                    })(
                        <Input readOnly  />
                )}
                </FormItem>
                <FormItem {...formItemLayout} label="原密码" hasFeedback >
                    {getFieldDecorator('opassword', {
                        rules: [{
                            required: true, message: '请输入原密码!',
                        }]
                    })(<Input type="password" />)}
                </FormItem>
                <FormItem {...formItemLayout}label="新密码" hasFeedback >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: '请输入新密码!',
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
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">提交</Button>
                </FormItem>
                 </Form>
            </div>
        )
        return(
            <div>
                {container}
            </div>
        )
    }
}
UserModify.propTypes = {

}
export default Form.create()(UserModify)


