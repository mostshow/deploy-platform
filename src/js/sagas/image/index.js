
import { message} from 'antd'
import createFetch from '../fetch'
import * as ActionTypes from '../../constants/image'
import { take, fork, put, call, select} from 'redux-saga/effects'
import { getListImage, getImagePagination} from '../../reducers/selectors'
import * as actions from '../../actions'

const fetchListImage = createFetch(actions.image.listImage)

function *loadListProcategory(apiname, requiredFields){
  const listImage = yield select(getListImage)
  if(!listImage){
    yield call(fetchListImage,apiname, requiredFields)
  }
}

function* watchList() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_LIST_IMAGE)
        yield fork(fetchListImage, apiname, requiredFields,{
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_CREATE_IMAGE)
        yield fork(createFetch(actions.image.createImage), apiname, requiredFields,{
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_DEL_IMAGE)
        const pagination = yield select(getImagePagination)
        yield fork(createFetch(actions.image.delImage), apiname, requiredFields,{
            succAct:actions.image.loadListImage({
                dataFrom:(pagination.page - 1)*pagination.pageSize,
                dataCount:pagination.pageSize,
                category:pagination.category||0
            }),
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
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_EDIT_IMAGE)
        yield fork(createFetch(actions.image.editImage), apiname, requiredFields,{
            succAct:actions.navigate('image/list'),
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

