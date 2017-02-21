import {createRequestTypes} from '../../utils/tools'

export const LOAD_LIST_PROSTATUS = 'LOAD_LIST_PROSTATUS'
export const LOAD_EDIT_PROSTATUS = 'LOAD_EDIT_PROSTATUS'
export const LOAD_DEL_PROSTATUS = 'LOAD_DEL_PROSTATUS'
export const LOAD_CREATE_PROSTATUS = 'LOAD_CREATE_PROSTATUS'

export const LIST_PROSTATUS = createRequestTypes('LIST_PROSTATUS')
export const EDIT_PROSTATUS = createRequestTypes('EDIT_PROSTATUS')
export const DEL_PROSTATUS = createRequestTypes('DEL_PROSTATUS')
export const CREATE_PROSTATUS = createRequestTypes('CREATE_PROSTATUS')
