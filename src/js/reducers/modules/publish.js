

import * as ActionTypes from '../../constants/project'
import {success , request ,failure , composeReducers} from '../../utils/tools'

const initialState = {

};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

const finnalReducer = composeReducers(
  reducer,
  request(ActionTypes.LIST_PROJECT.REQUEST),
  failure(ActionTypes.LIST_PROJECT.FAILURE),
  success(ActionTypes.LIST_PROJECT.SUCCESS,'listProject'),
  request(ActionTypes.EDIT_PROJECT.REQUEST),
  failure(ActionTypes.EDIT_PROJECT.FAILURE),
  success(ActionTypes.EDIT_PROJECT.SUCCESS,'editProject'),
  request(ActionTypes.DEL_PROJECT.REQUEST),
  failure(ActionTypes.DEL_PROJECT.FAILURE),
  success(ActionTypes.DEL_PROJECT.SUCCESS,'delProject'),
  request(ActionTypes.CREATE_PROJECT.REQUEST),
  failure(ActionTypes.CREATE_PROJECT.FAILURE),
  success(ActionTypes.CREATE_PROJECT.SUCCESS,'createProject'),
)

export default finnalReducer
