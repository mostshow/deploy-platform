import { combineReducers } from 'redux';
import * as ActionTypes from '../constants/ActionTypes'
import merge from 'lodash/merge'
// import { routerReducer as routing } from 'react-router-redux'
import user from './modules/user'
import project from './modules/project'
import proCategory from './modules/proCategory'
import publish from './modules/publish'
import roles from './modules/roles'

function entities(state = {}, action) {
    if (action.response && action.response.entities) {
        return merge({}, state, action.response.entities)
    }
    return state
}

function messageTip(state = {messageType:''}, action){
    const {type, text} = action
    if(type == ActionTypes.MESSAGE_SUCCESS)

        return {...state,msg:action.msg,messageType:'success'}

    if(type == ActionTypes.MESSAGE_INFO)

        return {...state,msg:action.msg,messageType:'info'}

    else if(type == ActionTypes.MESSAGE_LOADING)

        return {...state,msg:'',msg:action.msg,messageType:'loading'}

    else if(type == ActionTypes.MESSAGE_ERROR)

        return {...state,msg:action.msg,messageType:'error'}

    else if(type == ActionTypes.MESSAGE_WARNING)

        return {...state,msg:action.msg,messageType:'warning'}

    return state;
}

function router(state = { pathname: '/' }, action) {

    switch (action.type) {
        case ActionTypes.UPDATE_ROUTER_STATE:
            return action.state
        default:
            return state
    }
}

const rootReducer = combineReducers({
    entities,
    publish,
    user,
    project,
    proCategory,
    roles,
    messageTip,
    router
})
export default rootReducer;

