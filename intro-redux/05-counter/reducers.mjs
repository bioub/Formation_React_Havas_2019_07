import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./constants";

// fonction qui reçoit le state précédent et l'action
// et qui retourne le prochain state (immuable)
export function countReducer(previousState = 0, action) {
  if (action.type === COUNTER_INCREMENT) {
    return previousState + action.payload;
  }
  if (action.type === COUNTER_DECREMENT) {
    return previousState - action.payload;
  }
  return previousState;
}