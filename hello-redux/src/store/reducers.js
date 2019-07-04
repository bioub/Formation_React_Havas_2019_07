import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./constants";

// fonction qui reçoit le state précédent et l'action
// et qui retourne le prochain state (immuable)
// export function countReducer(previousState = 0, action) {
//   switch (action.type) {
//     case COUNTER_INCREMENT:
//       return previousState + action.payload;
//     case COUNTER_DECREMENT:
//       return previousState - action.payload;
//     default:
//       return previousState;
//   }
// }

// export function countersReducers(previousState = {}, action) {
//   switch (action.type) {
//     case COUNTER_INCREMENT:
//     case COUNTER_DECREMENT:
//       return {
//         ...previousState,
//         [action.meta.key]: countReducer(previousState[action.meta.key], action)
//       };
//     default:
//       return previousState;
//   }
// }

export function countersReducers(previousState = {}, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...previousState,
        [action.meta.key]: (previousState[action.meta.key] || 0) + action.payload
      };
    case COUNTER_DECREMENT:
      return {
        ...previousState,
        [action.meta.key]: (previousState[action.meta.key] || 0) - action.payload
      };
    default:
      return previousState;
  }
}
/*
Forme globale du state
{
  count: 10
}

=>

{
  counters: {
    abc: 10,
    xyz: 20,
  }
}
*/

/*
Forme d'une action
{
  type: 'COUNTER_DECREMENT',
  payload: 10,
  meta: {
    key: 'abc'
  }
}
*/
