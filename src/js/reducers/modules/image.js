

import * as ActionTypes from '../../constants/image'
import {success , request ,failure , composeReducers} from '../../utils/tools'

const initialState = {
    pagination:{
        pageSize:10,
        page:1,
        category:0
    }
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.EDIT_IMAGE_BTN:
        return {
            ...state,
            ...action
        }
    case ActionTypes.UPDATE_IMAGE_PAGINATION:
        return {
            ...action
        }
    default:
      return state;
  }
}

const finnalReducer = composeReducers(
  reducer,
  request(ActionTypes.LIST_IMAGE.REQUEST),
  failure(ActionTypes.LIST_IMAGE.FAILURE),
  success(ActionTypes.LIST_IMAGE.SUCCESS,'listImage'),
  request(ActionTypes.EDIT_IMAGE.REQUEST),
  failure(ActionTypes.EDIT_IMAGE.FAILURE),
  success(ActionTypes.EDIT_IMAGE.SUCCESS,'editImage'),
  request(ActionTypes.DEL_IMAGE.REQUEST),
  failure(ActionTypes.DEL_IMAGE.FAILURE),
  success(ActionTypes.DEL_IMAGE.SUCCESS,'delImage'),
  request(ActionTypes.CREATE_IMAGE.REQUEST),
  failure(ActionTypes.CREATE_IMAGE.FAILURE),
  success(ActionTypes.CREATE_IMAGE.SUCCESS,'createImage'),
)

export default finnalReducer
