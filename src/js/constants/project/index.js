import {createRequestTypes} from '../../utils/tools'

export const LOAD_LIST_PROJECT = 'LOAD_LIST_PROJECT'
export const LOAD_EDIT_PROJECT = 'LOAD_EDIT_PROJECT'
export const LOAD_DEL_PROJECT = 'LOAD_DEL_PROJECT'
export const LOAD_CREATE_PROJECT = 'LOAD_CREATE_PROJECT'

export const LIST_PROJECT = createRequestTypes('LIST_PROJECT')
export const EDIT_PROJECT = createRequestTypes('EDIT_PROJECT')
export const DEL_PROJECT = createRequestTypes('DEL_PROJECT')
export const CREATE_PROJECT = createRequestTypes('CREATE_PROJECT')


export const EDIT_PROJECT_BTN = 'EDIT_PROJECT_BTN'
