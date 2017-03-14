
import createFetch from '../fetch'
import * as ActionTypes from '../../constants/user'
import { take, fork} from 'redux-saga/effects'
import * as actions from '../../actions'
import {message } from 'antd';

function* watchList() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_LIST_USER)
        yield fork(createFetch(actions.user.listUser), apiname, requiredFields,{
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_CREATE_USER)
        yield fork(createFetch(actions.user.createUser), apiname, requiredFields,{
            // succAct:actions.navigate('/user/list'),
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_DEL_USER)
        yield fork(createFetch(actions.user.delUser), apiname, requiredFields,{
            succAct:actions.user.loadListUser(),
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_EDIT_USER)
        yield fork(createFetch(actions.user.editUser), apiname, requiredFields,{
            succAct:actions.navigate('user/list'),
            succFn:function(){
                message.success('修改成功！')
            },
            failFn:function(err){
                message.error(err||'修改失败！')
            }
        })
    }
}
function* watchModify() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_MODIFY_USER)
        yield fork(createFetch(actions.user.modifyUser), apiname, requiredFields,{
            succFn:function(){
                message.success('修改成功！')
            },
            failFn:function(err){
                message.error(err||'修改失败！')
            }
        })
    }
}
function* watchLogin() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_LOGIN_USER)
        yield fork(createFetch(actions.user.loginUser), apiname, requiredFields,{
            succAct:actions.navigate('/'),
            succFn:function(){
                message.success('登录成功！')
            },
            failFn:function(err){
                message.error(err||'登录失败！')
            },
        })
    }
}
function* watchLogout() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_LOGOUT_USER)
        yield fork(createFetch(actions.user.logoutUser), apiname, requiredFields,{
            succAct:actions.navigate('/'),
            succFn:function(){
                message.success('登出成功！')
            }
        })
    }
}

export default [fork(watchLogin),fork(watchLogout),fork(watchList),fork(watchCreate),fork(watchDel),fork(watchEdit),fork(watchModify)]

