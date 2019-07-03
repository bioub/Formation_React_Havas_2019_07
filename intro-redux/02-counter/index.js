const { createStore } = require('redux');

// fonction qui reçoit le state précédent et l'action
// et qui retourne le prochain state (immuable)
function reducer(previousState = {count: 0}, action) {
  if (action.type === 'INCREMENT') {
    return {...previousState, count: previousState.count + 1};
  }
  if (action.type === 'DECREMENT') {
    return {...previousState, count: previousState.count - 1};
  }
  return previousState;
}

const store = createStore(reducer);

// ce callback va s'exécuter après chaque dispatch
store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({type: '@@INIT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});