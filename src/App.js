import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { buyCoins, getExchangeRate, sellCoins, reducer } from './store';

class App extends Component {
  componentDidMount() {
    setInterval(this.props.update, 1000);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The ONLY SITE ON THE INTERNET TO BUY YOUR DOUBLOONS</h2>
        </div>
      <p>Total Doubloons: {this.props.doubloons}</p>
      <p>Total Arrrrcoins: {this.props.Arrrrcoins}</p>
      <button disabled={this.props.canBuy === false} onClick={() => this.props.up()}>Buy</button>
      <button disabled={this.props.canSell === false} onClick={() => this.props.down()}>Sell</button>
      </div>
    );

  }

}

function mapStatetoProps(state) {
  return {
    doubloons: state.doubloons,
    Arrrrcoins: state.Arrrrcoins,
    randomize_exchange: state.randomize_exchange,
    canBuy: state.canBuy,
    canSell: state.canSell,

  };
};

function mapActionsToProps(dispatch) {
  return {
    up: function () {
      dispatch(buyCoins);
    },

    down: function () {
      dispatch(sellCoins);
    },

    update: function () {
      dispatch(getExchangeRate);
    },
  };
}

export default connect(mapStatetoProps, mapActionsToProps)(App);
