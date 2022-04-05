export function setMatchingFilter(matchingFilter) {
  console.log("matching filter", matchingFilter);

  return {
    type: "SET_MATCHING_FILTER",
    filter: matchingFilter,
  };
}
