
import createFetch from '../fetch'
import * as ActionTypes from '../../constants/project'
import { take, fork} from 'redux-saga/effects'
import * as actions from '../../actions'

function* watchList() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_LIST_PROJECT)
        yield fork(createFetch(actions.project.listProject), apiname, requiredFields)
    }
}
function* watchCreate() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_CREATE_PROJECT)
        yield fork(createFetch(actions.project.createProject), apiname, requiredFields)
    }
}

function* watchDel() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_DEL_PROJECT)
        yield fork(createFetch(actions.project.delProject), apiname, requiredFields)
    }
}
function* watchEdit() {
    while(true) {
        const {apiname, requiredFields = []} = yield take(ActionTypes.LOAD_EDIT_PROJECT)
        yield fork(createFetch(actions.project.editProject), apiname, requiredFields)
    }
}
export default [fork(watchList),fork(watchCreate),fork(watchDel),fork(watchEdit)]

