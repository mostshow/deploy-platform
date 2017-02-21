
import { take, put, call, fork, select,takeEvery ,takeLatest} from 'redux-saga/effects'
import { api, history } from '../services'
import * as ActionTypes from '../constants'
import watchNavigate from './navigate'
import { default as project  } from './project'
import { default as user  } from './user'
import { default as prostatus  } from './prostatus'
import { default as publish  } from './publish'
import { default as proCategory  } from './proCategory'
import { default as roles} from './roles'

export default function *root(getState) {
    yield [fork(watchNavigate),...project,...user,...proCategory,...roles]
}
