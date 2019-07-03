const { createStore, combineReducers } = require('redux');

// fonction qui reçoit le state précédent et l'action
// et qui retourne le prochain state (immuable)
function countReducer(previousState = 0, action) {
  if (action.type === 'INCREMENT') {
    return previousState + 1;
  }
  if (action.type === 'DECREMENT') {
    return previousState - 1;
  }
  return previousState;
}

const reducer = combineReducers({
  count: countReducer,
});

const store = createStore(reducer);

// ce callback va s'exécuter après chaque dispatch
store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({type: '@@INIT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});