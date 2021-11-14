import { CounterTemplate } from "./CounterTemplate";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { counter } from "./counter";

// Styles:
import styled, { keyframes } from "styled-components";

const combinedReducers = combineReducers({
  counter: counter,
});
export let counterStore = createStore(combinedReducers);

// Template
export const CounterApp = () => {
  return (
    <Provider store={counterStore}>
      <CounterTemplate />
    </Provider>
  );
};
