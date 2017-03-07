

import * as ActionTypes from '../../constants/imgCategory'
import {success , request ,failure , composeReducers} from '../../utils/tools'

const initialState = {
    // isEdit:false
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.EDIT_IMGCATEGORY_BTN:
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
  request(ActionTypes.LIST_IMGCATEGORY.REQUEST),
  failure(ActionTypes.LIST_IMGCATEGORY.FAILURE),
  success(ActionTypes.LIST_IMGCATEGORY.SUCCESS,'listImgCategory'),
  request(ActionTypes.EDIT_IMGCATEGORY.REQUEST),
  failure(ActionTypes.EDIT_IMGCATEGORY.FAILURE),
  success(ActionTypes.EDIT_IMGCATEGORY.SUCCESS,'editImgCategory'),
  request(ActionTypes.DEL_IMGCATEGORY.REQUEST),
  failure(ActionTypes.DEL_IMGCATEGORY.FAILURE),
  success(ActionTypes.DEL_IMGCATEGORY.SUCCESS,'delImgCategory'),
  request(ActionTypes.CREATE_IMGCATEGORY.REQUEST),
  failure(ActionTypes.CREATE_IMGCATEGORY.FAILURE),
  success(ActionTypes.CREATE_IMGCATEGORY.SUCCESS,'createImgCategory'),
)

export default finnalReducer
