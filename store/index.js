import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import quoteBank from './quoteBankReducer.js'

const reducers = combineReducers({quoteBank})
const store = () => {
  return createStore(reducers, composeWithDevTools())
}

export default store();