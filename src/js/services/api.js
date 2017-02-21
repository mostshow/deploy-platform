import { schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'whatwg-fetch'
import setAuthorizationToken from '../utils/setAuthorizationToken'
//require('es6-promise').polyfill();
//require('isomorphic-fetch');

import {API_ROOT,API_FILTER} from '../constants/ServerTypes'


function callApi(endpoint, payload) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT +endpoint : endpoint
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
  //myHeaders.append('Allow-Control-Allow-Credentials','true')
  // myHeaders = setAuthorizationToken(myHeaders,Token);
  const request = new Request(fullUrl, {
      method: 'POST',
      headers: myHeaders,
      credentials: 'include' ,
      body: toQueryString( payload )
  });
  return fetch(request)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
        if (!response.ok) {
            return Promise.reject(json)
        }
        return json;
    })
    .then(
        (response) => ({response}),
        (error) => ({error: error.message || 'Something bad happened'})
    )

}
function toQueryString(obj) {
    return obj ? Object.keys(obj).sort().map(function (key) {
        var val = obj[key];
        if (Array.isArray(val)) {
            return val.sort().map(function (val2) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
            }).join('&');
        }
        return encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }).join('&') : '';
}
export const fetchApi = (apiName,params) => callApi(`/api${apiName}`,params)






