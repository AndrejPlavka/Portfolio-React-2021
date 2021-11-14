import { operationType } from "./actions";

export const counter = (
  state = <{ value: number; error: null | "infinityError" | "negativeRoot" }>{
    value: 0,
    error: null,
  },
  action: { type: string; number: number }
) => {
  switch (action.type) {
    case operationType.INCREMENT:
      return { error: null, value: state.value + action.number };
    case operationType.DECREMENT:
      return { error: null, value: state.value - action.number };

    case operationType.POW:
      if (Math.pow(state.value, action.number) === Infinity)
        return { ...state, error: "infinityError" };
      else
        return {
          error: false,
          value: Math.round(Math.pow(state.value, action.number)),
        };
    case operationType.DIV:
      return { error: null, value: state.value / 2 };
    case operationType.SQRT:
      if (state.value > 0)
        return { error: null, value: Math.round(Math.sqrt(state.value)) };
      else return { ...state, error: "negativeRoot" };
    default:
      return state;
  }
};
