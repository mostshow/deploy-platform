

import * as ActionTypes from '../../constants/imgCategory'
import {action} from '../../utils/tools'

export const listImgCategory = {
    request: (apiurl) => action(ActionTypes.LIST_IMGCATEGORY.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.LIST_IMGCATEGORY.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.LIST_IMGCATEGORY.FAILURE, {apiurl, error}),
}
export const createImgCategory = {
    request: (apiurl) => action(ActionTypes.CREATE_IMGCATEGORY.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.CREATE_IMGCATEGORY.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.CREATE_IMGCATEGORY.FAILURE, {apiurl, error}),
}
export const delImgCategory = {
    request: (apiurl) => action(ActionTypes.DEL_IMGCATEGORY.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.DEL_IMGCATEGORY.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.DEL_IMGCATEGORY.FAILURE, {apiurl, error}),
}
export const editImgCategory = {
    request: (apiurl) => action(ActionTypes.EDIT_IMGCATEGORY.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.EDIT_IMGCATEGORY.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.EDIT_IMGCATEGORY.FAILURE, {apiurl, error}),
}
export const editImgCategoryBtn = (toEditData={}) => action(ActionTypes.EDIT_IMGCATEGORY_BTN,toEditData)

export const loadListImgCategory = ( requiredFields = {}) => action(ActionTypes.LOAD_LIST_IMGCATEGORY, {apiname:'/imgCategory/list', requiredFields})
export const loadCreateImgCategory = ( requiredFields = {}) => action(ActionTypes.LOAD_CREATE_IMGCATEGORY, {apiname:'/imgCategory/create', requiredFields})
export const loadEditImgCategory = ( requiredFields = {}) => action(ActionTypes.LOAD_EDIT_IMGCATEGORY, {apiname:'/imgCategory/edit', requiredFields})
export const loadDelImgCategory = ( requiredFields = {}) => action(ActionTypes.LOAD_DEL_IMGCATEGORY, {apiname:'/imgCategory/del', requiredFields})





export default {editImgCategoryBtn, loadListImgCategory ,loadCreateImgCategory ,loadEditImgCategory,loadDelImgCategory}
