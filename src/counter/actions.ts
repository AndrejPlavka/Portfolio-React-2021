export const operationType = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  DIV: "DIV",
  POW: "POW",
  SQRT: "SQRT",
  RESET: "RESET",
};

export const mathOperation = {
  increment: (operationValue: number) => ({
    type: "INCREMENT", // example of not using action constant operationType
    number: operationValue,
  }),
  decrement: (operationValue: number) => ({
    type: operationType.DECREMENT,
    number: operationValue,
  }),
  pow: (operationValue: number) => ({
    type: operationType.POW,
    number: operationValue,
  }),

  div: (operationValue: number) => ({
    type: operationType.DIV,
    number: operationValue,
  }),
  sqrt: () => ({
    type: operationType.SQRT,
  }),
  reset: () => ({
    type: operationType.RESET,
  }),
};
