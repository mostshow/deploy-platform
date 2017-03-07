
import * as ActionTypes from '../../constants/user'
import {success , request ,failure , composeReducers} from '../../utils/tools'
import { setCurrentUser } from '../../actions/user'
import isEmpty from 'lodash/isEmpty';
import { message} from 'antd'

const initialState = {
    login:{
        isAuthenticated: false,
        loginUser:{}
    }
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.LOGIN_USER.REQUEST:
        return {
            login:{
                isAuthenticated: !isEmpty(action.user),
                loginUser:action.user,
                loginIsLoading:true
            }
        }
        break;
    case ActionTypes.LOGIN_USER.SUCCESS:
        return {
            login:{
                isAuthenticated: !isEmpty(action.user),
                loginUser:action.user,
                loginIsLoading:false
            }
        }
        break;
    case ActionTypes.LOGIN_USER.FAILURE:
    case ActionTypes.LOGOUT_USER.SUCCESS:
    case ActionTypes.LOGOUT_USER.FAILURE:
        return {
            login:{
                isAuthenticated: false,
                loginUser:{}
            }
        }
        break;
    case ActionTypes.SET_CURRENT_USER:
        return {
            login:{
                isAuthenticated: !isEmpty(action.user),
                loginUser:action.user,
                loginIsLoading:false
            }
        }
        break;
    case ActionTypes.EDIT_USER_BTN:
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
    request(ActionTypes.LIST_USER.REQUEST),
    failure(ActionTypes.LIST_USER.FAILURE),
    success(ActionTypes.LIST_USER.SUCCESS,'listUser'),
    request(ActionTypes.EDIT_USER.REQUEST),
    failure(ActionTypes.EDIT_USER.FAILURE),
    success(ActionTypes.EDIT_USER.SUCCESS,'editUser'),
    request(ActionTypes.DEL_USER.REQUEST),
    failure(ActionTypes.DEL_USER.FAILURE),
    success(ActionTypes.DEL_USER.SUCCESS,'delUser'),
    request(ActionTypes.CREATE_USER.REQUEST),
    failure(ActionTypes.CREATE_USER.FAILURE),
    success(ActionTypes.CREATE_USER.SUCCESS,'createUser')
)

export default finnalReducer
