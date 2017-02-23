
import createFetch from '../fetch'
import * as ActionTypes from '../../constants/project'
import { take, fork} from 'redux-saga/effects'
import * as actions from '../../actions'
import { message} from 'antd'


function* watchOffline() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_OFFLINE_PROJECT)
        yield fork(createFetch(actions.project.offlineProject), apiname, requiredFields,{
            succAct:actions.project.updateOperateData({...requiredFields,online:false}),
            succFn:function(){
                message.success('下线成功！')
            },
            failFn:function(err){
                message.error(err||'上线失败！')
            }
        })
    }
}
function* watchOnline() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_ONLINE_PROJECT)
        yield fork(createFetch(actions.project.onlineProject), apiname, requiredFields,{
            succAct:actions.project.updateOperateData({...requiredFields,online:true}),
            succFn:function(){
                message.success('上线成功！')
            },
            failFn:function(err){
                message.error(err||'上线失败！')
            }
        })
    }
}
function* watchList() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_LIST_PROJECT)
        yield fork(createFetch(actions.project.listProject), apiname, requiredFields,{
            succFn:function(){
                message.success('加载完成！')
            },
            failFn:function(err){
                message.error(err||'加载失败！')
            }
        })
    }
}
function* watchCreate() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_CREATE_PROJECT)
        yield fork(createFetch(actions.project.createProject), apiname, requiredFields,{
            // succAct:actions.navigate('/project/list'),
            succFn:function(){
                message.success('新建成功！')
            },
            failFn:function(err){
                message.error(err||'新建失败！')
            }
        })
    }
}

function* watchDel() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_DEL_PROJECT)
        yield fork(createFetch(actions.project.delProject), apiname, requiredFields,{
            succAct:actions.project.loadListProject(),
            succFn:function(){
                message.success('删除成功！')
            },
            failFn:function(err){
                message.error(err||'删除失败！')
            }
        })
    }
}
function* watchEdit() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_EDIT_PROJECT)
        yield fork(createFetch(actions.project.editProject), apiname, requiredFields,{
            succAct:actions.navigate('project/list'),
            succFn:function(){
                message.success('修改成功！')
            },
            failFn:function(err){
                message.error(err||'修改失败！')
            }
        })
    }
}
export default [fork(watchList),fork(watchCreate),fork(watchDel),fork(watchEdit), fork(watchOnline), fork(watchOffline)]

