import {createRequestTypes} from '../../utils/tools'

export const LOAD_LIST_ROLES = 'LOAD_LIST_ROLES'
export const LOAD_EDIT_ROLES = 'LOAD_EDIT_ROLES'
export const LOAD_DEL_ROLES = 'LOAD_DEL_ROLES'
export const LOAD_CREATE_ROLES = 'LOAD_CREATE_ROLES'

export const LIST_ROLES = createRequestTypes('LIST_ROLES')
export const EDIT_ROLES = createRequestTypes('EDIT_ROLES')
export const DEL_ROLES = createRequestTypes('DEL_ROLES')
export const CREATE_ROLES = createRequestTypes('CREATE_ROLES')

export const EDIT_ROLES_BTN = 'EDIT_ROLES_BTN'
