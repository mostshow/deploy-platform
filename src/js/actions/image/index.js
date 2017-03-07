

import * as ActionTypes from '../../constants/image'
import {action} from '../../utils/tools'

export const listImage = {
    request: (apiurl) => action(ActionTypes.LIST_IMAGE.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.LIST_IMAGE.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.LIST_IMAGE.FAILURE, {apiurl, error}),
}
export const createImage = {
    request: (apiurl) => action(ActionTypes.CREATE_IMAGE.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.CREATE_IMAGE.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.CREATE_IMAGE.FAILURE, {apiurl, error}),
}
export const delImage = {
    request: (apiurl) => action(ActionTypes.DEL_IMAGE.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.DEL_IMAGE.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.DEL_IMAGE.FAILURE, {apiurl, error}),
}
export const editImage = {
    request: (apiurl) => action(ActionTypes.EDIT_IMAGE.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.EDIT_IMAGE.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.EDIT_IMAGE.FAILURE, {apiurl, error}),
}
export const editImageBtn = (toEditData={}) => action(ActionTypes.EDIT_IMAGE_BTN,toEditData)
export const updateImagePagination = (pagination) => action(ActionTypes.UPDATE_IMAGE_PAGINATION,pagination)

export const loadListImage = ( requiredFields = {}) => action(ActionTypes.LOAD_LIST_IMAGE, {apiname:'/image/list', requiredFields})
export const loadCreateImage = ( requiredFields = {}) => action(ActionTypes.LOAD_CREATE_IMAGE, {apiname:'/image/create', requiredFields})
export const loadEditImage = ( requiredFields = {}) => action(ActionTypes.LOAD_EDIT_IMAGE, {apiname:'/image/edit', requiredFields})
export const loadDelImage = ( requiredFields = {}) => action(ActionTypes.LOAD_DEL_IMAGE, {apiname:'/image/del', requiredFields})





export default {editImageBtn, updateImagePagination, loadListImage ,loadCreateImage ,loadEditImage,loadDelImage}
