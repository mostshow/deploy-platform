

import React, {Component , ProTypes} from 'react'
import {Form, Button, Input , Radio, Select, Spin, Badge, Icon, Tag,  menu, Dropdown, Table, Popconfirm} from 'antd'
import isEmpty from 'lodash/isEmpty'
import  '../../../css/operate_project.css'

const FormItem = Form.Item;
const Option = Select.Option;
class ProjectForm extends Component {
    constructor(props){
        super(props)
        this.handleReturn = this.handleReturn.bind(this);
        this.handleOnline = this.handleOnline.bind(this);
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

    handleOnline(record) {
        let {loadOnlineProject, navigate, dispatch, operateData} = this.props
        let onlineData = {
            project_id:operateData._id,
            publish_id:record.key
        }
        loadOnlineProject({...onlineData})
        // dispatch(navigate(`/project/operate`))
    }
    handleOffline(record) {
        let {loadOfflineProject, navigate, dispatch, operateData} = this.props
        let offlineData = {
            project_id:operateData._id,
            publish_id:record.key
        }
        loadOfflineProject({...offlineData})
        // dispatch(navigate(`/project/operate`))
    }
    handleRevert(record) {
        let { operateData, loadRevertProject} = this.props
        let revertData = {
            project_id:operateData._id,
            publish_id:record._id,
            revertVersion:record.version
        }

        loadRevertProject({...revertData})

    }
    handleReturn(){
        let { navigate, dispatch} = this.props
        dispatch(navigate(`/project/list`))
    }
    render() {
        const { publish, loading, isEdit, operateData,onlinePublish } = this.props
        const project_id = operateData._id;
        const accessDir = operateData.accessDir;
        // const projectPublish = operateData.publish;
        const data = publish.map((item) => {
            let backupInfo = operateData.backupInfo
            if(~onlinePublish.indexOf(item._id))
                item.state = true
            else
                item.state = false

            if(item.generate)
                item.generateDir = '/'+accessDir
            else
                item.generateDir = '/'
            item.key = item._id
            if(backupInfo&&backupInfo[item.key]){
                item.backupData =  backupInfo[item.key].backup
                item.revertVersion = backupInfo[item.key].revertVersion
            }else{
                item.backupData = [];
                item.revertVersion = ''
            }
            item.address = `http://${item.domain}${item.generateDir}/index.html`
            return item;
        })
        const columns = [
            { title: '服务器', dataIndex: 'publishName', key: 'publishName' },
            { title: '生成目录', dataIndex: 'generateDir', key: 'generateDir' },
            { title: '访问目录', key: 'address', render: (record) => {
                // let address = `http://${record.domain}${record.generateDir}/index.html`
                return <a href={record.address} target="_blank">{record.address}</a> }
            },
            { title: '上线状态', key: 'state', render: (record) => {
                return <span><Badge status={record.state?'success':'default'} /></span> }
            },
            {
                    title: '操作',
                    dataIndex: 'operation',
                    key: 'operation',
                    render: (text, record) => {
                        let operateBtn;
                        let revert;
                        // if(record.state){
                        //     operateBtn = (
                        //         <Popconfirm title="确定要下线吗？" onConfirm={() => this.handleOffline(record)}>
                        //             <Button className='mgr5' type="danger"  size="small">下线</Button>
                        //         </Popconfirm>
                        //     )
                        // }else{
                        //     operateBtn = (
                        //     <Popconfirm title="确定要上线吗？" onConfirm={() => this.handleOnline(record)}>
                        //         <Button className='mgr5'  type="primary"  size="small">上线</Button>
                        //     </Popconfirm>
                        //     )
                        // }
                        if(record.revertVersion){
                            revert = (
                                <Tag color="cyan-inverse">（已回滚）</Tag>
                            )
                        }else{
                            revert = ( <div></div> )
                        }
                        return(
                            <Button.Group   type="ghost">
                                <Popconfirm title="确定要上线吗？" onConfirm={() => this.handleOnline(record)}>
                                    <Button className='mgr5'  type="primary"  size="small">发布</Button>
                                </Popconfirm>
                                <Popconfirm title="确定要下线吗？" onConfirm={() => this.handleOffline(record)}>
                                    <Button className='mgr5'   size="small">下线</Button>
                                </Popconfirm>
                                {revert}
                            </Button.Group>

                        )
                    }
            },
        ];
        const expandedRowRender = (record) => {
            const columns = [
                { title: '备份版本', dataIndex: 'version', key: 'version' },
                { title: '回滚状态', key: 'state', render: (text, record) => <span><Badge status={record.state} /></span> },
                {
                    title: '操作',
                    dataIndex: 'revert',
                    key: 'revert',
                    render: (text, record, index) => (
                            <Popconfirm title="确定要回滚吗？" onConfirm={() => this.handleRevert(record)}>
                                <Button size="small"  >回滚</Button>
                            </Popconfirm>
                    ),
                },
            ];
            let data = record.backupData.map((item,i)=>{
                return {
                    key: i,
                    _id: record.key,
                    version: item,
                    state: item == record.revertVersion ?'processing':'default',
                }
            })
            return (
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
            );
        };
        let container = (
            <div>

                <div className=" titColumn">
                    <h3 className="mgb10"> 项目名：{operateData.name}</h3>
                    <p> 描述：{operateData.description}</p>
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    expandedRowRender={expandedRowRender}
                />
                <Button  className="mgt10 fr" onClick={this.handleReturn} size="large">返回</Button>
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

