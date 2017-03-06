

import { put, call} from 'redux-saga/effects'
import {API_FILTER} from '../constants/ServerTypes'
import { api } from '../services'
import {message } from 'antd';
import { isEmpty,isFunction } from 'lodash';
import { navigate } from '../actions'

message.config({
    duration: 2
});

function rquireAuthApi(endpoint,Token){
    if(Token){
        return true;
    }else{
        return !~API_FILTER.indexOf(endpoint);
    }
}

function *fetchEntity(entity, apiFn, url, params:{},actions={succAct:{},failAct:{},succFn:{},failFn:{}}) {
    let {succAct, failAct, succFn, failFn} = actions;
    let Token = localStorage.getItem('jwtToken') || 0;

    if(!rquireAuthApi(url,Token)){
        return;
    }
    yield put( entity.request(url) )
    const {response, error} = yield call(apiFn, url, params)
    if(response){
        if(response.code == 0){
            yield put( entity.success(url, response) )
            if(!isEmpty(succAct))
                yield put(succAct)

            if(isFunction(succFn))
                succFn()

        }else if(response.code == -3){
                let loginAction = navigate('/login')
                message.warning(response.msg)
                yield put(loginAction)
        }else{
            yield put( entity.failure(url, response) )

            if(!isEmpty(failAct))
                yield put(failAct)

            if(isFunction(failFn))
                failFn(response.msg)
        }
    }else{
        yield put( entity.failure(url, error) )
        if(!isEmpty(failAct))
            yield put(failAct)

        if(isFunction(failFn))
            failFn(response.msg)
    }
}
export default function createFetch(func){
    return fetchEntity.bind(null, func, api.fetchApi)
}
