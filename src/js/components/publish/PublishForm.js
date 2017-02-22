

import React, {Component , ProTypes} from 'react'
import {Form, Button, Input , Radio, Select, Spin} from 'antd'

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const Option = Select.Option;
class PublishForm extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
    }
    componentDidMount() {
        let { isEdit, toEditData } = this.props;
        if(this.props.isEdit){
            this.props.form.setFieldsValue({
                publishName: toEditData.publishName,
                ip: toEditData.ip,
                domain: toEditData.domain,
                dir: toEditData.dir,
                generate: toEditData.generate=='是'?1:0,
            });
        }else{
            this.props.form.setFieldsValue({
                generate: 1,
            });
        }

    }
    onSubmit(e) {
        e.preventDefault();
        let { isEdit, toEditData, loadCreatePublish, loadEditPublish, form} = this.props;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if(isEdit){
                    let params = {
                        id:toEditData.key,
                        ...values
                    }
                    loadEditPublish(params);
                }else{
                    loadCreatePublish(values);
                    form.setFieldsValue({
                        publishName: '',
                        ip: '',
                        domain: '',
                        dir: '',
                    });
                }
            }
        });
    }
    handleReturn(){
        let { navigate, dispatch} = this.props
        dispatch(navigate(`/publish/list`))
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
                    <FormItem {...formItemLayout} hasFeedback label="服务器名称">
                        {getFieldDecorator('publishName', {
                            rules: [{ required: true, message: '请输入服务器名称!' }],
                        })(
                            <Input />
                    )}
                    </FormItem>
                    <FormItem {...formItemLayout} hasFeedback label="IP地址">
                        {getFieldDecorator('ip', {
                            rules: [{ required: true, message: '请输入ip地址!' }],
                        })(
                            <Input />
                    )}
                    </FormItem>
                    <FormItem {...formItemLayout} hasFeedback label="域名">
                        {getFieldDecorator('domain', {
                            rules: [{ required: true, message: '请输入域名!' }],
                        })(
                            <Input />
                    )}
                    </FormItem>
                    <FormItem {...formItemLayout} hasFeedback label="项目目录">
                        {getFieldDecorator('dir', {
                            rules: [{ required: true, message: '请输入项目目录!' }],
                        })(
                            <Input />
                    )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="是否生成访问目录" >
                        {getFieldDecorator('generate')(
                            <RadioGroup >
                                <Radio value={1}>是</Radio>
                                <Radio value={0}>否</Radio>
                            </RadioGroup>
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
PublishForm.propTypes = {

}
export default Form.create()(PublishForm)

