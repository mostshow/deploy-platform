

import * as ActionTypes from '../../constants/roles'
import {action} from '../../utils/tools'

export const listRoles = {
    request: (apiurl) => action(ActionTypes.LIST_ROLES.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.LIST_ROLES.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.LIST_ROLES.FAILURE, {apiurl, error}),
}
export const createRoles = {
    request: (apiurl) => action(ActionTypes.CREATE_ROLES.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.CREATE_ROLES.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.CREATE_ROLES.FAILURE, {apiurl, error}),
}
export const delRoles = {
    request: (apiurl) => action(ActionTypes.DEL_ROLES.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.DEL_ROLES.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.DEL_ROLES.FAILURE, {apiurl, error}),
}
export const editRoles = {
    request: (apiurl) => action(ActionTypes.EDIT_ROLES.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.EDIT_ROLES.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.EDIT_ROLES.FAILURE, {apiurl, error}),
}
export const editRolesBtn = (toEditData={}) => action(ActionTypes.EDIT_ROLES_BTN,toEditData)

export const loadListRoles = ( requiredFields = {}) => action(ActionTypes.LOAD_LIST_ROLES, {apiname:'/roles/list', requiredFields})
export const loadCreateRoles = ( requiredFields = {}) => action(ActionTypes.LOAD_CREATE_ROLES, {apiname:'/roles/create', requiredFields})
export const loadEditRoles = ( requiredFields = {}) => action(ActionTypes.LOAD_EDIT_ROLES, {apiname:'/roles/edit', requiredFields})
export const loadDelRoles = ( requiredFields = {}) => action(ActionTypes.LOAD_DEL_ROLES, {apiname:'/roles/del', requiredFields})





export default {editRolesBtn, loadListRoles ,loadCreateRoles ,loadEditRoles,loadDelRoles}
