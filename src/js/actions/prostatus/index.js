

import * as ActionTypes from '../../constants/prostatus'
import {action} from '../../utils/tools'

export const listProstatus = {
    request: (apiurl) => action(ActionTypes.LIST_PROSTATUS.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.LIST_PROSTATUS.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.LIST_PROSTATUS.FAILURE, {apiurl, error}),
}
export const createProstatus = {
    request: (apiurl) => action(ActionTypes.CREATE_PROSTATUS.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.CREATE_PROSTATUS.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.CREATE_PROSTATUS.FAILURE, {apiurl, error}),
}
export const delProstatus = {
    request: (apiurl) => action(ActionTypes.DEL_PROSTATUS.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.DEL_PROSTATUS.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.DEL_PROSTATUS.FAILURE, {apiurl, error}),
}
export const editProstatus = {
    request: (apiurl) => action(ActionTypes.EDIT_PROSTATUS.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.EDIT_PROSTATUS.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.EDIT_PROSTATUS.FAILURE, {apiurl, error}),
}


export const loadListProstatus = ( requiredFields = []) => action(ActionTypes.LOAD_LIST_PROSTATUS, {apiname:'/prostatus/list', requiredFields})
export const loadCreatProstatus = ( requiredFields = []) => action(ActionTypes.LOAD_CREATE_PROSTATUS, {apiname:'/prostatus/create', requiredFields})
export const loadEditProstatus = ( requiredFields = []) => action(ActionTypes.LOAD_EDIT_PROSTATUS, {apiname:'/prostatus/edit', requiredFields})
export const loadDelProstatus = ( requiredFields = []) => action(ActionTypes.LOAD_DEL_PROSTATUS, {apiname:'/prostatus/del', requiredFields})





export default {loadListProstatus ,loadCreatProstatus ,loadEditProstatus,loadDelProstatus}
