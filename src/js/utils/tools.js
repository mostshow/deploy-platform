

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const createRequestTypes = (base)=>{
  const res = {};
  [REQUEST, SUCCESS, FAILURE].forEach((type) => res[type] = `${base}_${type}`)
  return res;
}

export const success = (actionType,name='list') => {
  return (state, action) => {
    switch (action.type) {
      case actionType:
        return {
          ...state,
          loading: false,
          [name]: action.response
        }
        break;
      default:
        return state
    }
  }
}
export const request = (actionType) => {
  return (state, action) => {
    switch (action.type) {
      case actionType:
        return {
          ...state,
          loading: true
        }
        break;
      default:
        return state
    }
  }
}
export const failure = (actionType) => {
  return (state, action) => {
    switch (action.type) {
      case actionType:
        return {
          ...state,
          loading:false,
          ...action.error
        }
        break;
      default:
        return state
    }
  }
}
export const composeReducers = (...reducers) => {
  return (state, action) => {
    if (reducers.length === 0) {
      return state
    }
    const last = reducers[reducers.length - 1]
    const rest = reducers.slice(0, -1)

    return rest.reduceRight((enhanced, reducer) => reducer(enhanced, action), last(state, action))
  }
}

export const action = (type, payload = {}) => {

  return {type, ...payload}

}
