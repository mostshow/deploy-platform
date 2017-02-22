
import createFetch from '../fetch'
import * as ActionTypes from '../../constants/publish'
import { take, fork, put, call, select} from 'redux-saga/effects'
// import { getListPublish} from '../../reducers/selectors'
import * as actions from '../../actions'
import { message} from 'antd'

const fetchListPublish = createFetch(actions.publish.listPublish)

// function *loadListPublish(apiname, requiredFields){
//   const listPublish = yield select(getListPublish)
//   if(!listPublish){
//     yield call(fetchListPublish,apiname, requiredFields)
//   }
// }

function* watchList() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_LIST_PUBLISH)
        yield fork(fetchListPublish, apiname, requiredFields,{
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_CREATE_PUBLISH)
        yield fork(createFetch(actions.publish.createPublish), apiname, requiredFields,{
            // succAct:actions.navigate('/category/list'),
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_DEL_PUBLISH)
        yield fork(createFetch(actions.publish.delPublish), apiname, requiredFields,{
            succAct:actions.publish.loadListPublish(),
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_EDIT_PUBLISH)
        yield fork(createFetch(actions.publish.editPublish), apiname, requiredFields,{
            succAct:actions.navigate('publish/list'),
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

