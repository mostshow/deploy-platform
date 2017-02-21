

import * as ActionTypes from '../../constants/roles'
import {success , request ,failure , composeReducers} from '../../utils/tools'

const initialState = {
    // isEdit:false
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.EDIT_ROLES_BTN:
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
  request(ActionTypes.LIST_ROLES.REQUEST),
  failure(ActionTypes.LIST_ROLES.FAILURE),
  success(ActionTypes.LIST_ROLES.SUCCESS,'listRoles'),
  request(ActionTypes.EDIT_ROLES.REQUEST),
  failure(ActionTypes.EDIT_ROLES.FAILURE),
  success(ActionTypes.EDIT_ROLES.SUCCESS,'editRoles'),
  request(ActionTypes.DEL_ROLES.REQUEST),
  failure(ActionTypes.DEL_ROLES.FAILURE),
  success(ActionTypes.DEL_ROLES.SUCCESS,'delRoles'),
  request(ActionTypes.CREATE_ROLES.REQUEST),
  failure(ActionTypes.CREATE_ROLES.FAILURE),
  success(ActionTypes.CREATE_ROLES.SUCCESS,'createRoles'),
)

export default finnalReducer
