import { createStore } from 'redux';
export const buyCoins = {
  type: 'INCREMENT',
};

export const sellCoins = {
  type: 'DECREMENT',
};

export const getExchangeRate = {
  type: 'GETEXCHANGERATE',
};

export function exchangeRate() {
  let random = Math.floor(Math.random() * (9) + 1);
  return random;
}

export function reducer(state, action) {
  console.log(state, action);

  if (action.type === 'INCREMENT') {
    const remainingCoins = state.Arrrrcoins - state.randomize_exchange;

    return {
      doubloons: state.doubloons + 1,
      Arrrrcoins: remainingCoins,
      randomize_exchange: state.randomize_exchange,
      canBuy: state.doubloons > state.randomize_exchange &&  remainingCoins > 1,
      canSell: remainingCoins > 1 && state.doubloons > state.randomize_exchange,
    };
  }

  if (action.type === 'DECREMENT') {
    const remainingDoubloons = state.doubloons - state.randomize_exchange;

    return {
      Arrrrcoins: state.Arrrrcoins + 1,
      doubloons: remainingDoubloons,
      randomize_exchange: state.randomize_exchange,
      canBuy: state.Arrrrcoins > state.randomize_exchange && remainingDoubloons > 1,
      canSell: remainingDoubloons > 1 && state.doubloons > state.randomize_exchange,
    };
  }

  if (action.type === 'GETEXCHANGERATE') {
    const doubloonsLeft = state.doubloons - state.randomize_exchange;
    return {
      Arrrrcoins: state.Arrrrcoins,
      doubloons: state.doubloons,
      randomize_exchange: exchangeRate(),
      canBuy: state.doubloons > state.randomize_exchange &&  state.Arrrrcoins > 1,
      canSell: doubloonsLeft > 1 && state.doubloons > state.randomize_exchange,
    };

  }

  return state;
}

export const store = createStore(reducer, {
  doubloons: 20,
  Arrrrcoins: 15,
  randomize_exchange: Math.floor(Math.random() * (9) + 1),
  canBuy: true,
  canSell: true,
});
