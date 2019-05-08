const asyncTypes = [
    'REQUEST',
    'SUCCESS',
    'FAILED',
    'CLEAR'
  ]
  
  const actionTypes = [
    'AUTH_USER',
    'FETCH_USER',
    'LOGOUT'
    // TODO -> Add action type
  ]
  
  const createAsyncTypes = typeString =>
    asyncTypes.reduce((type, key) => {
      type[key] = `${typeString}_${key}`
      return type
    }, {})
  
  const createActions = typeString =>
    asyncTypes.reduce((type, key) => {
      type[key] = (payload = {}, callback) => ({ type: `${typeString}_${key}`, payload, callback })
      return type
    }, {})
  
  export const actions = {}
  export const types = {}
  
  actionTypes.forEach(type => {
    actions[type] = {
      ...createActions(type)
    }
    types[type] = {
      ...createAsyncTypes(type)
    }
  })