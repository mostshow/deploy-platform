
import * as _api from './api'
import { browserHistory ,hashHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

export const api = _api
export const history = hashHistory
//browserHistory;
export const createHistory = (store)=>syncHistoryWithStore(hashHistory,store);
