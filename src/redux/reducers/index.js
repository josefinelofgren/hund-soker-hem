export default function reduce(state, action) {
  console.log("reducer", state);

  switch (action.type) {
    case "SET_MATCHING_FILTER":
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
}
