import {createRequestTypes} from '../../utils/tools'

export const LOAD_LIST_PUBLISH = 'LOAD_LIST_PUBLISH'
export const LOAD_EDIT_PUBLISH = 'LOAD_EDIT_PUBLISH'
export const LOAD_DEL_PUBLISH = 'LOAD_DEL_PUBLISH'
export const LOAD_CREATE_PUBLISH = 'LOAD_CREATE_PUBLISH'

export const LIST_PUBLISH = createRequestTypes('LIST_PUBLISH')
export const EDIT_PUBLISH = createRequestTypes('EDIT_PUBLISH')
export const DEL_PUBLISH = createRequestTypes('DEL_PUBLISH')
export const CREATE_PUBLISH = createRequestTypes('CREATE_PUBLISH')

export const EDIT_PUBLISH_BTN = 'EDIT_PUBLISH_BTN'
