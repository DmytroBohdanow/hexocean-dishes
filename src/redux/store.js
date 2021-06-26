import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const reducer = combineReducers({
    root: rootReducer,
    form: formReducer,
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const store = createStore(reducer, composedEnhancer)

export default store
