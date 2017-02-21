
import createFetch from '../fetch'
import * as ActionTypes from '../../constants/prostatus'
import { take, fork} from 'redux-saga/effects'
import * as actions from '../../actions'

function* watchList() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_LIST_PROSTATUS)
        yield fork(createFetch(actions.prostatus.listProstatus), apiname, requiredFields)
    }
}
function* watchCreate() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_CREATE_PROSTATUS)
        yield fork(createFetch(actions.prostatus.createProstatus), apiname, requiredFields)
    }
}

function* watchDel() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_DEL_PROSTATUS)
        yield fork(createFetch(actions.prostatus.delProstatus), apiname, requiredFields)
    }
}
function* watchEdit() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_EDIT_PROSTATUS)
        yield fork(createFetch(actions.prostatus.editProstatus), apiname, requiredFields)
    }
}
export default [fork(watchList),fork(watchCreate),fork(watchDel),fork(watchEdit)]

