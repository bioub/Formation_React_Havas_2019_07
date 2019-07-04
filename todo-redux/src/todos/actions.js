import { TODO_CHANGE, TODO_ADD, TODO_DELETE } from "./constants";

// redux-actions
// function createActionCreator(type) {
//   return function(payload) {
//     return {
//       type,
//       payload,
//     }
//   }
// }

// const todoChange = createActionCreator(TODO_CHANGE);

export function todoChange(payload) {
  return { type: TODO_CHANGE, payload };
}

export function todoAdd(payload) {
  return {
    type: TODO_ADD,
    payload
  };
}
export function todoDelete(payload) {
  return {
    type: TODO_DELETE,
    payload
  };
}
