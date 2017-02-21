

import * as ActionTypes from '../../constants/proCategory'
import {action} from '../../utils/tools'

export const listProCategory = {
    request: (apiurl) => action(ActionTypes.LIST_PROCATEGORY.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.LIST_PROCATEGORY.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.LIST_PROCATEGORY.FAILURE, {apiurl, error}),
}
export const createProCategory = {
    request: (apiurl) => action(ActionTypes.CREATE_PROCATEGORY.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.CREATE_PROCATEGORY.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.CREATE_PROCATEGORY.FAILURE, {apiurl, error}),
}
export const delProCategory = {
    request: (apiurl) => action(ActionTypes.DEL_PROCATEGORY.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.DEL_PROCATEGORY.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.DEL_PROCATEGORY.FAILURE, {apiurl, error}),
}
export const editProCategory = {
    request: (apiurl) => action(ActionTypes.EDIT_PROCATEGORY.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.EDIT_PROCATEGORY.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.EDIT_PROCATEGORY.FAILURE, {apiurl, error}),
}
export const editProCategoryBtn = (toEditData={}) => action(ActionTypes.EDIT_PROCATEGORY_BTN,toEditData)

export const loadListProCategory = ( requiredFields = {}) => action(ActionTypes.LOAD_LIST_PROCATEGORY, {apiname:'/proCategory/list', requiredFields})
export const loadCreateProCategory = ( requiredFields = {}) => action(ActionTypes.LOAD_CREATE_PROCATEGORY, {apiname:'/proCategory/create', requiredFields})
export const loadEditProCategory = ( requiredFields = {}) => action(ActionTypes.LOAD_EDIT_PROCATEGORY, {apiname:'/proCategory/edit', requiredFields})
export const loadDelProCategory = ( requiredFields = {}) => action(ActionTypes.LOAD_DEL_PROCATEGORY, {apiname:'/proCategory/del', requiredFields})





export default {editProCategoryBtn, loadListProCategory ,loadCreateProCategory ,loadEditProCategory,loadDelProCategory}
