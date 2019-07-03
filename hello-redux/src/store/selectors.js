// selecteur (fonction qui factorise la recherche dans le state)
// permet également de récupérer une donnée dérivée (tableau filtré, trié...)
export function selectCount(state, storeKey) {
  return state.counters[storeKey] || 0;
}
