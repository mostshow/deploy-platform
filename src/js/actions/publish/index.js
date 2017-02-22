

import * as ActionTypes from '../../constants/publish'
import {action} from '../../utils/tools'

export const listPublish = {
    request: (apiurl) => action(ActionTypes.LIST_PUBLISH.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.LIST_PUBLISH.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.LIST_PUBLISH.FAILURE, {apiurl, error}),
}
export const createPublish = {
    request: (apiurl) => action(ActionTypes.CREATE_PUBLISH.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.CREATE_PUBLISH.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.CREATE_PUBLISH.FAILURE, {apiurl, error}),
}
export const delPublish = {
    request: (apiurl) => action(ActionTypes.DEL_PUBLISH.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.DEL_PUBLISH.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.DEL_PUBLISH.FAILURE, {apiurl, error}),
}
export const editPublish = {
    request: (apiurl) => action(ActionTypes.EDIT_PUBLISH.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.EDIT_PUBLISH.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.EDIT_PUBLISH.FAILURE, {apiurl, error}),
}
export const editPublishBtn = (toEditData={}) => action(ActionTypes.EDIT_PUBLISH_BTN,toEditData)

export const loadListPublish = ( requiredFields = {}) => action(ActionTypes.LOAD_LIST_PUBLISH, {apiname:'/publish/list', requiredFields})
export const loadCreatePublish = ( requiredFields = {}) => action(ActionTypes.LOAD_CREATE_PUBLISH, {apiname:'/publish/create', requiredFields})
export const loadEditPublish = ( requiredFields = {}) => action(ActionTypes.LOAD_EDIT_PUBLISH, {apiname:'/publish/edit', requiredFields})
export const loadDelPublish = ( requiredFields = {}) => action(ActionTypes.LOAD_DEL_PUBLISH, {apiname:'/publish/del', requiredFields})





export default {editPublishBtn, loadListPublish ,loadCreatePublish ,loadEditPublish,loadDelPublish}
