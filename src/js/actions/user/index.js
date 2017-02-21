import * as ActionTypes from '../../constants/user'
import {action} from '../../utils/tools'
import jwtDecode from 'jwt-decode'

export const loginUser = {
    request: (apiurl) => action(ActionTypes.LOGIN_USER.REQUEST, {apiurl}),
    success: (apiurl, response) => {
        const token = response.result.token;
        localStorage.setItem('jwtToken', token);
        const user= jwtDecode(token);
        return action(ActionTypes.LOGIN_USER.SUCCESS, {apiurl, user})
    },
    failure: (apiurl, error) => action(ActionTypes.LOGIN_USER.FAILURE, {apiurl, error}),
}
export const logoutUser = {
    request: (apiurl) => action(ActionTypes.LOGOUT_USER.REQUEST, {apiurl}),
    success: (apiurl, response) => {
        localStorage.removeItem('jwtToken');
        return action(ActionTypes.LOGOUT_USER.SUCCESS, {apiurl})
    },
    failure: (apiurl, error) => action(ActionTypes.LOGOUT_USER.FAILURE, {apiurl, error}),
}

export const setCurrentUser = (user)  => {
  return {
    type: ActionTypes.SET_CURRENT_USER,
    user
  };
}

export const listUser = {
    request: (apiurl) => action(ActionTypes.LIST_USER.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.LIST_USER.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.LIST_USER.FAILURE, {apiurl, error}),
}
export const editUser = {
    request: (apiurl) => action(ActionTypes.EDIT_USER.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.EDIT_USER.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.EDIT_USER.FAILURE, {apiurl, error}),
}
export const delUser = {
    request: (apiurl) => action(ActionTypes.DEL_USER.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.DEL_USER.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.DEL_USER.FAILURE, {apiurl, error}),
}
export const createUser = {
    request: (apiurl) => action(ActionTypes.CREATE_USER.REQUEST, {apiurl}),
    success: (apiurl, response) => action(ActionTypes.CREATE_USER.SUCCESS, {apiurl, response}),
    failure: (apiurl, error) => action(ActionTypes.CREATE_USER.FAILURE, {apiurl, error}),
}



export const loadListUser = ( requiredFields = []) => action(ActionTypes.LOAD_LIST_USER, {apiname:'/user/list', requiredFields})
export const loadCreateUser = ( requiredFields = []) => action(ActionTypes.LOAD_CREATE_USER, {apiname:'/user/create', requiredFields})
export const loadEditUser = ( requiredFields = []) => action(ActionTypes.LOAD_EDIT_USER, {apiname:'/user/edit', requiredFields})
export const loadDelUser = ( requiredFields = []) => action(ActionTypes.LOAD_DEL_USER, {apiname:'/user/del', requiredFields})
export const loadLoginUser = (requiredFields = {}) => action(ActionTypes.LOAD_LOGIN_USER, {apiname:'/user/login', requiredFields})
export const loadLogoutUser = (requiredFields = {}) =>action(ActionTypes.LOAD_LOGOUT_USER, {apiname:'/user/logout', requiredFields})


export default {loadListUser,loadCreateUser,loadEditUser,loadDelUser,loadLoginUser,loadLogoutUser}
