import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import App from './App.js'
import store from './redux/store.js'
import {Provider} from 'react-redux'

const app = (
  <Provider store={store}>
    <App />
  </ Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);
