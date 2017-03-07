import {createRequestTypes} from '../../utils/tools'

export const LOAD_LIST_PROJECT = 'LOAD_LIST_PROJECT'
export const LOAD_EDIT_PROJECT = 'LOAD_EDIT_PROJECT'
export const LOAD_DEL_PROJECT = 'LOAD_DEL_PROJECT'
export const LOAD_CREATE_PROJECT = 'LOAD_CREATE_PROJECT'
export const LOAD_ONLINE_PROJECT = 'LOAD_ONLINE_PROJECT'
export const LOAD_OFFLINE_PROJECT = 'LOAD_OFFLINE_PROJECT'
export const LOAD_REVERT_PROJECT = 'LOAD_REVERT_PROJECT'

export const LIST_PROJECT = createRequestTypes('LIST_PROJECT')
export const EDIT_PROJECT = createRequestTypes('EDIT_PROJECT')
export const DEL_PROJECT = createRequestTypes('DEL_PROJECT')
export const CREATE_PROJECT = createRequestTypes('CREATE_PROJECT')
export const ONLINE_PROJECT = createRequestTypes('ONLINE_PROJECT')
export const OFFLINE_PROJECT = createRequestTypes('OFFLINE_PROJECT')
export const REVERT_PROJECT = createRequestTypes('REVERT_PROJECT')


export const EDIT_PROJECT_BTN = 'EDIT_PROJECT_BTN'
export const OPERATE_PROJECT_BTN = 'OPERATE_PROJECT_BTN'
export const UPDATE_OPERATE_PROJECT = 'UPDATE_OPERATE_PROJECT'
export const UPDATE_PROJECT_PAGINATION = 'UPDATE_PROJECT_PAGINATION'
