

import * as ActionTypes from '../../constants/ActionTypes'
import { history } from '../../services'
import { take} from 'redux-saga/effects'

export default function* watchNavigate() {
    while(true) {
        const {pathname} = yield take(ActionTypes.NAVIGATE)
        yield history.push(pathname)
    }
}
