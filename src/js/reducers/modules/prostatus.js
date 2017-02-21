

import * as ActionTypes from '../../constants/prostatus'
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
  request(ActionTypes.LIST_PROSTATUS.REQUEST),
  failure(ActionTypes.LIST_PROSTATUS.FAILURE),
  success(ActionTypes.LIST_PROSTATUS.SUCCESS,'listProstatus'),
  request(ActionTypes.EDIT_PROSTATUS.REQUEST),
  failure(ActionTypes.EDIT_PROSTATUS.FAILURE),
  success(ActionTypes.EDIT_PROSTATUS.SUCCESS,'editProstatus'),
  request(ActionTypes.DEL_PROSTATUS.REQUEST),
  failure(ActionTypes.DEL_PROSTATUS.FAILURE),
  success(ActionTypes.DEL_PROSTATUS.SUCCESS,'delProstatus'),
  request(ActionTypes.CREATE_PROSTATUS.REQUEST),
  failure(ActionTypes.CREATE_PROSTATUS.FAILURE),
  success(ActionTypes.CREATE_PROSTATUS.SUCCESS,'createProstatus'),
)

export default finnalReducer
