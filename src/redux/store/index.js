import reduce from "../reducers";
import { createStore } from "redux";

let filter = {
  kids: undefined,
  kidsSpecification: undefined,
  dogs: undefined,
  cats: undefined,
  activityLevel: undefined,
};

if (localStorage.getItem("matchingFilter") === null) {
  localStorage.setItem("matchingFilter", JSON.stringify(filter));
}

const initialState = {
  filter: JSON.parse(localStorage.getItem("matchingFilter")),
};
export const store = createStore(reduce, initialState);
