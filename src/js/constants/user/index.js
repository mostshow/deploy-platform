
import {createRequestTypes} from '../../utils/tools'

export const LOAD_LIST_USER = 'LOAD_LIST_USER'
export const LOAD_EDIT_USER = 'LOAD_EDIT_USER'
export const LOAD_DEL_USER = 'LOAD_DEL_USER'
export const LOAD_CREATE_USER = 'LOAD_CREATE_USER'
export const LOAD_LOGIN_USER = 'LOAD_LOGIN_USER'
export const LOAD_LOGOUT_USER = 'LOAD_LOGOUT_USER'

export const LIST_USER = createRequestTypes('LIST_USER')
export const EDIT_USER = createRequestTypes('EDIT_USER')
export const DEL_USER = createRequestTypes('DEL_USER')
export const CREATE_USER = createRequestTypes('CREATE_USER')
export const LOGIN_USER = createRequestTypes('LOGIN_USER')
export const LOGOUT_USER = createRequestTypes('LOGOUT_USER')

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const EDIT_USER_BTN = 'EDIT_USER_BTN'

