import redux from "redux";
import { countReducer } from "./reducers";
import { selectCount } from "./selectors";
import { counterIncrement, counterDecrement } from "./actions";

const reducer = redux.combineReducers({
  count: countReducer
});

const store = redux.createStore(reducer);

/// ----- CI DESSOUS DANS LES COMPOSANTS --------

// ce callback va s'exécuter après chaque dispatch
// dans un componentDidLoad
store.subscribe(() => {
  console.log(selectCount(store.getState()));
});

// store.dispatch({type: '@@INIT'});
// sur des event utilisateurs par exemple (click)
store.dispatch(counterIncrement(10));
store.dispatch(counterIncrement());
store.dispatch(counterDecrement());
