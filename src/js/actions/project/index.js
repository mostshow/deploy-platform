

import * as ActionTypes from '../../constants/project'
import {action} from '../../utils/tools'

export const listProject = {
    request: (apiurl) => action(ActionTypes.LIST_PROJECT.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.LIST_PROJECT.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.LIST_PROJECT.FAILURE, {apiurl, error}),
}
export const createProject = {
    request: (apiurl) => action(ActionTypes.CREATE_PROJECT.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.CREATE_PROJECT.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.CREATE_PROJECT.FAILURE, {apiurl, error}),
}
export const delProject = {
    request: (apiurl) => action(ActionTypes.DEL_PROJECT.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.DEL_PROJECT.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.DEL_PROJECT.FAILURE, {apiurl, error}),
}
export const editProject = {
    request: (apiurl) => action(ActionTypes.EDIT_PROJECT.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.EDIT_PROJECT.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.EDIT_PROJECT.FAILURE, {apiurl, error}),
}

export const onlineProject = {
    request: (apiurl) => action(ActionTypes.ONLINE_PROJECT.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.ONLINE_PROJECT.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.OOONLINEEE_PROJECT.FAILURE, {apiurl, error}),
}

export const offlineProject = {
    request: (apiurl) => action(ActionTypes.OFFLINE_PROJECT.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.OFFLINE_PROJECT.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.OFFLINE_PROJECT.FAILURE, {apiurl, error}),
}

export const editProjectBtn = (toEditData={}) => action(ActionTypes.EDIT_PROJECT_BTN,toEditData)
export const operateProjectBtn = (operateData={}) => action(ActionTypes.OPERATE_PROJECT_BTN,operateData)

export const loadListProject = ( requiredFields = []) => action(ActionTypes.LOAD_LIST_PROJECT, {apiname:'/project/list', requiredFields})
export const loadCreateProject = ( requiredFields = []) => action(ActionTypes.LOAD_CREATE_PROJECT, {apiname:'/project/create', requiredFields})
export const loadEditProject = ( requiredFields = []) => action(ActionTypes.LOAD_EDIT_PROJECT, {apiname:'/project/edit', requiredFields})
export const loadDelProject = ( requiredFields = []) => action(ActionTypes.LOAD_DEL_PROJECT, {apiname:'/project/del', requiredFields})
export const loadOnlineProject = ( requiredFields = []) => action(ActionTypes.LOAD_ONLINE_PROJECT, {apiname:'/project/online', requiredFields})
export const loadOfflineProject = ( requiredFields = []) => action(ActionTypes.LOAD_OFFLINE_PROJECT, {apiname:'/project/offline', requiredFields})





export default {loadListProject ,loadCreateProject, loadOfflineProject, loadOnlineProject, loadEditProject,loadDelProject, editProjectBtn, operateProjectBtn}
