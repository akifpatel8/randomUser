import { GetData } from "./actionType";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case GetData:
      return {
        data: payload,
      };
    default:
      return state;
  }
};
