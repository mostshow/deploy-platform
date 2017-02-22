

import React, {Component , ProTypes} from 'react'
import {Form, Button, Input , Radio, Select, Spin, Badge, Icon,  menu, Dropdown, Table, Popconfirm} from 'antd'
import isEmpty from 'lodash/isEmpty'
import  '../../../css/operate_project.css'

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
                    loadCreateProject(values);
                    form.setFieldsValue({
                        name: '',
                        gitPath: '',
                        branch: '',
                        category: '',
                        description:''
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
        const { publish, loading, isEdit, operateData } = this.props
        const project_id = operateData._id;
        const projectPublish = operateData.publish;
        const data = publish.map((item) => {
            if(~projectPublish.indexOf(item._id))
                item.state = true
            else
                item.state = false

            if(item.generate)
                item.generateDir = '/'+item._id.slice(0,10)+project_id.slice(0,10)
            else
                item.generateDir = '/'
            item.key = item._id
            item.address = `http://${item.domain}${item.generateDir}/index.html`
            return item;
        })
        const columns = [
            { title: '服务器', dataIndex: 'publishName', key: 'publishName' },
            { title: '生成目录', dataIndex: 'generateDir', key: 'generateDir' },
            { title: '状态', key: 'state', render: (record) => {
                return <span><Badge status={record.state?'success':'error'} /></span> }
            },
            { title: '访问目录', key: 'address', render: (record) => {
                // let address = `http://${record.domain}${record.generateDir}/index.html`
                return <a href={record.address} target="_blank">{record.address}</a> }
            },
            {
                    title: '操作',
                    dataIndex: 'operation',
                    key: 'operation',
                    render: () => (
                        <span className={'table-operation'}>
                            <a href="#">上线</a><span className="ant-divider" />
                            <a href="#">下线</a><span className="ant-divider" />
                            <a href="#">回滚</a>
                        </span>
                    ),
                },
        ];

        let container = (
            <div>
                <div className="mgb30">
                    <p className="mgb10"> 项目名：{operateData.name}</p>
                    <p> 描述：{operateData.description}</p>
                </div>
                <div>
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
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

