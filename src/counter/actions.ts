export const operationType = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  DIV: "DIV",
  POW: "POW",
  SQRT: "SQRT",
};

export const mathOperation = {
  increment: (operationValue: number) => ({
    type: operationType.INCREMENT,
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
};
