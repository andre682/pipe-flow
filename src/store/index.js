// @ts-nocheck
import { createStore } from 'redux'
import bundlesReducer from '../reducers/index'

export default () => {
  const store = createStore(
    bundlesReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
