// GET https://jsonplaceholder.typicode.com/todos
import axios from "axios";

// export function fetchTodos() {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/todos")
//     .then(res => res.data.slice(0, 10));
// }

export async function fetchTodos() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res.data.slice(0, 10);
}
