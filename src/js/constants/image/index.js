import {createRequestTypes} from '../../utils/tools'

export const LOAD_LIST_IMAGE = 'LOAD_LIST_IMAGE'
export const LOAD_EDIT_IMAGE = 'LOAD_EDIT_IMAGE'
export const LOAD_DEL_IMAGE = 'LOAD_DEL_IMAGE'
export const LOAD_CREATE_IMAGE = 'LOAD_CREATE_IMAGE'

export const LIST_IMAGE = createRequestTypes('LIST_IMAGE')
export const EDIT_IMAGE = createRequestTypes('EDIT_IMAGE')
export const DEL_IMAGE = createRequestTypes('DEL_IMAGE')
export const CREATE_IMAGE = createRequestTypes('CREATE_IMAGE')

export const EDIT_IMAGE_BTN = 'EDIT_IMAGE_BTN'
export const UPDATE_IMAGE_PAGINATION = 'UPDATE_IMAGE_PAGINATION'
