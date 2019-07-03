const { createStore } = require('redux');

function reducer(previousState = 0, action) {
  if (action.type === 'INCREMENT') {
    return previousState + 1;
  }
  if (action.type === 'DECREMENT') {
    return previousState - 1;
  }
  return previousState;
}

const store = createStore(reducer);
// store.dispatch({type: '@@INIT'});
console.log(store.getState()); // 0

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
console.log(store.getState()); // 1 (0+1+1-1)