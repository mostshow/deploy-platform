

import * as ActionTypes from '../../constants/proCategory'
import {success , request ,failure , composeReducers} from '../../utils/tools'

const initialState = {
    // isEdit:false
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.EDIT_PROCATEGORY_BTN:
        return {
            ...state,
            ...action
        }
        break;
    default:
      return state;
  }
}

const finnalReducer = composeReducers(
  reducer,
  request(ActionTypes.LIST_PROCATEGORY.REQUEST),
  failure(ActionTypes.LIST_PROCATEGORY.FAILURE),
  success(ActionTypes.LIST_PROCATEGORY.SUCCESS,'listProCategory'),
  request(ActionTypes.EDIT_PROCATEGORY.REQUEST),
  failure(ActionTypes.EDIT_PROCATEGORY.FAILURE),
  success(ActionTypes.EDIT_PROCATEGORY.SUCCESS,'editProCategory'),
  request(ActionTypes.DEL_PROCATEGORY.REQUEST),
  failure(ActionTypes.DEL_PROCATEGORY.FAILURE),
  success(ActionTypes.DEL_PROCATEGORY.SUCCESS,'delProCategory'),
  request(ActionTypes.CREATE_PROCATEGORY.REQUEST),
  failure(ActionTypes.CREATE_PROCATEGORY.FAILURE),
  success(ActionTypes.CREATE_PROCATEGORY.SUCCESS,'createProCategory'),
)

export default finnalReducer
