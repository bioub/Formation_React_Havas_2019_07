import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./constants";

// action creators (factorise la création de l'action)
export function counterIncrement(step = 1, storeKey = null) {
  return {
    type: COUNTER_INCREMENT,
    payload: step,
    meta: {
      key: storeKey
    }
  };
}

export const counterDecrement = (step = 1, storeKey) => ({
  type: COUNTER_DECREMENT,
  payload: step,
  meta: {
    key: storeKey
  }
});

// convention d'action : FSA
// Flux Standard Action
