
import React, {Component , PropTypes} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import style from '../../../css/login.css'

const FormItem = Form.Item;
class LoginForm extends Component {
    constructor(props,context) {
        super(props,context)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        let ctx =this;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                ctx.props.actions.loadLoginUser(values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (

        <div className='login_wrapper'>

            <div className='login_body'>
                <section className='login_form'>

                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入管理员账号',
                                        type: 'string'
                                    }
                                ]
                            })(<Input type="text" addonBefore={<Icon type="user"/>}/>)}
                        </FormItem>

                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入密码',
                                        type: 'string'
                                    }
                                ]
                            })(<Input type="password" addonBefore={<Icon type="lock"/>}/>)}
                        </FormItem>

                        <Button type="primary" htmlType="submit">登录</Button>
                    </Form>

                </section>

            </div>

        </div>
    );
    }
}
LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}
LoginForm.propTypes = {
    
}
export default Form.create()(LoginForm)

