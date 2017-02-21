
import createFetch from '../fetch'
import * as ActionTypes from '../../constants/proCategory'
import { take, fork, put, call, select} from 'redux-saga/effects'
import { getListProCategory} from '../../reducers/selectors'
import * as actions from '../../actions'
import { message} from 'antd'

const fetchListProCategory = createFetch(actions.proCategory.listProCategory)

function *loadListProcategory(apiname, requiredFields){
  const listProCategory = yield select(getListProCategory)
  if(!listProCategory){
    yield call(fetchListProCategory,apiname, requiredFields)
  }
}

function* watchList() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_LIST_PROCATEGORY)
        yield fork(fetchListProCategory, apiname, requiredFields,{
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_CREATE_PROCATEGORY)
        yield fork(createFetch(actions.proCategory.createProCategory), apiname, requiredFields,{
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_DEL_PROCATEGORY)
        yield fork(createFetch(actions.proCategory.delProCategory), apiname, requiredFields,{
            succAct:actions.proCategory.loadListProCategory(),
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_EDIT_PROCATEGORY)
        yield fork(createFetch(actions.proCategory.editProCategory), apiname, requiredFields,{
            succAct:actions.navigate('category/list'),
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

