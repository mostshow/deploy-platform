
import createFetch from '../fetch'
import * as ActionTypes from '../../constants/imgCategory'
import { take, fork, put, call, select} from 'redux-saga/effects'
import { getListImgCategory} from '../../reducers/selectors'
import * as actions from '../../actions'
import { message} from 'antd'

const fetchListImgCategory = createFetch(actions.imgCategory.listImgCategory)

function *loadListProcategory(apiname, requiredFields){
  const listImgCategory = yield select(getListImgCategory)
  if(!listImgCategory){
    yield call(fetchListImgCategory,apiname, requiredFields)
  }
}

function* watchList() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_LIST_IMGCATEGORY)
        yield fork(fetchListImgCategory, apiname, requiredFields,{
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_CREATE_IMGCATEGORY)
        yield fork(createFetch(actions.imgCategory.createImgCategory), apiname, requiredFields,{
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_DEL_IMGCATEGORY)
        yield fork(createFetch(actions.imgCategory.delImgCategory), apiname, requiredFields,{
            succAct:actions.imgCategory.loadListImgCategory(),
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_EDIT_IMGCATEGORY)
        yield fork(createFetch(actions.imgCategory.editImgCategory), apiname, requiredFields,{
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

