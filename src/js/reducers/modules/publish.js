

import * as ActionTypes from '../../constants/publish'
import {success , request ,failure , composeReducers} from '../../utils/tools'

const initialState = {
    // isEdit:false
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.EDIT_PUBLISH_BTN:
        return {
            ...state,
            ...action
        }
    default:
      return state;
  }
}

const finnalReducer = composeReducers(
  reducer,
  request(ActionTypes.LIST_PUBLISH.REQUEST),
  failure(ActionTypes.LIST_PUBLISH.FAILURE),
  success(ActionTypes.LIST_PUBLISH.SUCCESS,'listPublish'),
  request(ActionTypes.EDIT_PUBLISH.REQUEST),
  failure(ActionTypes.EDIT_PUBLISH.FAILURE),
  success(ActionTypes.EDIT_PUBLISH.SUCCESS,'editPublish'),
  request(ActionTypes.DEL_PUBLISH.REQUEST),
  failure(ActionTypes.DEL_PUBLISH.FAILURE),
  success(ActionTypes.DEL_PUBLISH.SUCCESS,'delPublish'),
  request(ActionTypes.CREATE_PUBLISH.REQUEST),
  failure(ActionTypes.CREATE_PUBLISH.FAILURE),
  success(ActionTypes.CREATE_PUBLISH.SUCCESS,'createPublish'),
)

export default finnalReducer
