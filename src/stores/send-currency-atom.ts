import { atom } from "jotai";

export const sendCurrencyAtom = atom({
  sendAmount: "",
  currency: "USD",
});
