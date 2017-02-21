
import createFetch from '../fetch'
import * as ActionTypes from '../../constants/roles'
import { take, fork, put, call, select} from 'redux-saga/effects'
import { getListRoles} from '../../reducers/selectors'
import * as actions from '../../actions'
import { message} from 'antd'

const fetchListRoles = createFetch(actions.roles.listRoles)

function *loadListRoles(apiname, requiredFields){
  const listRoles = yield select(getListRoles)
  if(!listRoles){
    yield call(fetchListRoles,apiname, requiredFields)
  }
}

function* watchList() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_LIST_ROLES)
        yield fork(fetchListRoles, apiname, requiredFields,{
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_CREATE_ROLES)
        yield fork(createFetch(actions.roles.createRoles), apiname, requiredFields,{
            // succAct:actions.navigate('/roles/list'),
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_DEL_ROLES)
        yield fork(createFetch(actions.roles.delRoles), apiname, requiredFields,{
            succAct:actions.roles.loadListRoles(),
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_EDIT_ROLES)
        yield fork(createFetch(actions.roles.editRoles), apiname, requiredFields,{
            succAct:actions.navigate('roles/list'),
            succFn:function(){
                message.success('修改成功！')
            },
            failFn:function(err){
                message.error(err||'修改失败！')
            }
        })
    }
}
export default [fork(watchList),fork(watchCreate),fork(watchDel),fork(watchEdit)]

