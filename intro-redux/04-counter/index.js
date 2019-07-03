const { createStore, combineReducers } = require("redux");

// constants (factorise la clé type, pour éviter les coquilles)
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// fonction qui reçoit le state précédent et l'action
// et qui retourne le prochain state (immuable)
function countReducer(previousState = 0, action) {
  if (action.type === INCREMENT) {
    return previousState + action.step;
  }
  if (action.type === DECREMENT) {
    return previousState - 1;
  }
  return previousState;
}

const reducer = combineReducers({
  count: countReducer
});

const store = createStore(reducer);

// selecteur (fonction qui factorise la recherche dans le state)
// permet également de récupérer une donnée dérivée (tableau filtré, trié...)
function selectCount(state) {
  return state.count;
}

// ce callback va s'exécuter après chaque dispatch
store.subscribe(() => {
  console.log(selectCount(store.getState()));
});

// action creators (factorise la création de l'action)
function increment(step = 1) {
  return {
    type: INCREMENT,
    step
  };
}

const decrement = (step = 1) => ({
  type: DECREMENT,
  step
});

// store.dispatch({type: '@@INIT'});
store.dispatch(increment(10));
store.dispatch(increment());
store.dispatch(decrement());
