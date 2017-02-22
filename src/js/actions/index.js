


import * as ActionTypes from '../constants/ActionTypes'
import {action} from '../utils/tools'

export * as project from './project'
export * as proCategory from './proCategory'
export * as publish from './publish'
export * as user from './user'
export * as roles from './roles'

export const resetErrorMessage = () => action(ActionTypes.RESET_ERROR_MESSAGE)
export const updateRouterState = (state) => action(ActionTypes.UPDATE_ROUTER_STATE, {state})
export const navigate = (pathname) => action(ActionTypes.NAVIGATE, {pathname})


export const messageSuccess = (msg) => action(ActionTypes.MESSAGE_SUCCESS,{msg})
export const messageError = (msg) => action(ActionTypes.MESSAGE_ERROR,{msg})
export const messageWarning = (msg) => action(ActionTypes.MESSAGE_WARNING,{msg})
export const messageInfo = (msg) => action(ActionTypes.MESSAGE_INFO,{msg})
export const messageLoading = (msg) => action(ActionTypes.MESSAGE_LOADING,msg)
