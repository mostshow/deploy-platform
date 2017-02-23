

import * as ActionTypes from '../../constants/project'
import {success , request ,failure , composeReducers} from '../../utils/tools'

const initialState = {

};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.EDIT_PROJECT_BTN:
    case ActionTypes.OPERATE_PROJECT_BTN:
        return {
            ...state,
            ...action
        }
        break;
    case ActionTypes.UPDATE_OPERATE_PROJECT:
        let operateData = state.operateData;
        let publish_id = action.publish_id;
        let online = action.online;
        let publish = operateData.publish.filter(function(item){
            return item != publish_id
        })
        if(online){
            publish.push(publish_id)
        }
        operateData.publish = publish;
        return {
            ...state,
            operateData
        }
        break;
    default:
      return state;
  }
}

const finnalReducer = composeReducers(
  reducer,
  request(ActionTypes.OFFLINE_PROJECT.REQUEST),
  failure(ActionTypes.OFFLINE_PROJECT.FAILURE),
  success(ActionTypes.OFFLINE_PROJECT.SUCCESS,'offlineProject'),
  request(ActionTypes.ONLINE_PROJECT.REQUEST),
  failure(ActionTypes.ONLINE_PROJECT.FAILURE),
  success(ActionTypes.ONLINE_PROJECT.SUCCESS,'onlineProject'),
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
