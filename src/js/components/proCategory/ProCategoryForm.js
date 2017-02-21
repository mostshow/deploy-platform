

import React, {Component , ProTypes} from 'react'
import {Form, Button, Input , Radio, Select, Spin} from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;
class ProCategoryForm extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
    }
    componentDidMount() {
        let { isEdit, toEditData } = this.props;
        if(this.props.isEdit){
            this.props.form.setFieldsValue({
                name: toEditData.name,
            });
        }
    }
    onSubmit(e) {
        e.preventDefault();
        let { isEdit, toEditData, loadCreateProCategory, loadEditProCategory, form} = this.props;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if(isEdit){
                    let params = {
                        id:toEditData.key,
                        ...values
                    }
                    loadEditProCategory(params);
                }else{
                    loadCreateProCategory(values);
                    form.setFieldsValue({
                        name: '',
                    });
                }
            }
        });
    }
    handleReturn(){
        let { navigate, dispatch} = this.props
        dispatch(navigate(`/category/list`))
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
                    <FormItem {...formItemLayout} hasFeedback label="栏目名">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: '请输入栏目名称!' }],
                        })(
                            <Input />
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
ProCategoryForm.propTypes = {

}
export default Form.create()(ProCategoryForm)

