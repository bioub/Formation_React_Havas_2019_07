import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./constants";

// action creators (factorise la création de l'action)
export function counterIncrement(step = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: step
  };
}

export const counterDecrement = (step = 1) => ({
  type: COUNTER_DECREMENT,
  payload: step
});

// convention d'action : FSA
// Flux Standard Action
