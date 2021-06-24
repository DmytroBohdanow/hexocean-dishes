import React,{ Component } from "react";
import { connect } from 'react-redux'

class App extends Component {

    render() {
       console.log(this.props)
      return (
      <div className="App">
        <h1 className="header">Dishes</h1>
        <div className="header-info">
          <p>Requruitment exercise for HexOcean</p>
          <p>Please, fill the form below to make an order</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter:state.counter
  }
}

export default connect(mapStateToProps)(App);
