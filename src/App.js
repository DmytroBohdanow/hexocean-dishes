import React, { Component } from "react";
import classes from './App.module.css'
import OrderForm from './components/orderForm'
import { OrderResponses } from "./components/orderResponses";
import { OrderError } from "./components/orderError";
import { connect } from 'react-redux'
import { fetchRequest } from './components/actions/fetchRequest'

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <h1 className={classes.header}>Dishes</h1>
        <div className={classes['header-info']}>
          <p>Requruitment exercise for HexOcean</p>
          <p>Please, fill the form below to make an order</p>
        </div>
        <OrderForm onSubmit={values => this.props.onRequest(values)} />
        {this.props.error.length > 0 ? <OrderError error={this.props.error} /> : null}
        <OrderResponses responses={this.props.response} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    response: state.root.response,
    error: state.root.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onRequest: request => dispatch(fetchRequest(request)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
