import { useAtomValue } from "jotai";
import { useLocalStorage } from "usehooks-ts";

import { generateId } from "@/lib/generate-id";
import { receiveCurrencyAtom } from "@/stores/receive-currency-atom";
import { sendCurrencyAtom } from "@/stores/send-currency-atom";

type FavouriteCurrency = {
  id: string;
  createdAt: string;
  sendCurrency: string;
  receiveCurrency: string;
  currencyRate: number;
  currencyPercentageChange: number;
};

export function useFavouriteCurrencies() {
  const [
    favouriteCurrencies,
    setFavouriteCurrencies,
    removeFavouriteCurrencies,
  ] = useLocalStorage<FavouriteCurrency[]>("favourite-currencies", []);

  const sendCurrency = useAtomValue(sendCurrencyAtom);
  const receiveCurrency = useAtomValue(receiveCurrencyAtom);

  function addFavouriteCurrency(currencyRate: number) {
    setFavouriteCurrencies((prev) => [
      ...prev,
      {
        id: generateId(),
        createdAt: new Date().toISOString(),
        sendCurrency: sendCurrency.currency,
        receiveCurrency: receiveCurrency.currency,
        currencyRate,
        currencyPercentageChange: 0,
      },
    ]);
  }

  function clearFavouriteCurrencies() {
    removeFavouriteCurrencies();
  }

  function removeFavouriteCurrencyById(id: string) {
    setFavouriteCurrencies((prev) =>
      prev.filter((favouriteCurrency) => favouriteCurrency.id !== id),
    );
  }

  return {
    favouriteCurrencies,
    addFavouriteCurrency,
    clearFavouriteCurrencies,
    removeFavouriteCurrencyById,
  };
}
