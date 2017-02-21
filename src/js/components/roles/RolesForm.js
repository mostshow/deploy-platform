

import React, {Component , ProTypes} from 'react'
import {Form, Button, Input , Radio, Select, Spin, InputNumber} from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;
class RolesForm extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
    }
    componentDidMount() {
        let { isEdit, toEditData } = this.props;
        if(this.props.isEdit){
            this.props.form.setFieldsValue({
                rolename: toEditData.rolename,
                roleId: toEditData.roleId,
            });
        }
    }
    onSubmit(e) {
        e.preventDefault();
        let { isEdit, toEditData, loadCreateRoles, loadEditRoles, form} = this.props;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if(isEdit){
                    let params = {
                        id:toEditData.key,
                        ...values
                    }
                    loadEditRoles(params);
                }else{
                    loadCreateRoles(values);
                    form.setFieldsValue({
                        rolename: '',
                        roleId: '',
                    });
                }
            }
        });
    }
    handleReturn(){
        let { navigate, dispatch} = this.props
        dispatch(navigate(`/roles/list`))
    }
    render(){
        let {form, loading} = this.props;
        let getFieldDecorator = form.getFieldDecorator
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
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
                    <FormItem {...formItemLayout} hasFeedback label="角色名">
                        {getFieldDecorator('rolename', {
                            rules: [{ required: true, message: '请输入角色名称!' }],
                        })(
                            <Input />
                    )}
                    </FormItem>
                    <FormItem {...formItemLayout} hasFeedback label="roleId">
                        {getFieldDecorator('roleId', {
                            rules: [{ required: true, message: '请输入roleId!' }],
                            initialValue: 3
                        })(
                            <InputNumber min={1} max={10} />
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
RolesForm.propTypes = {

}
export default Form.create()(RolesForm)

