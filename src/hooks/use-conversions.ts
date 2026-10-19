import { useAtomValue } from "jotai";
import { useLocalStorage } from "usehooks-ts";

import { generateId } from "@/lib/generate-id";
import { receiveCurrencyAtom } from "@/stores/receive-currency-atom";
import { sendCurrencyAtom } from "@/stores/send-currency-atom";

type Conversion = {
  id: string;
  loggedAt: string;
  sendCurrency: string;
  sendAmount: string;
  receiveCurrency: string;
  receiveAmount: string;
};

export function useConversions() {
  const [conversions, setConversions, removeConversions] = useLocalStorage<
    Conversion[]
  >("logged-conversions", []);

  const sendCurrency = useAtomValue(sendCurrencyAtom);
  const receiveCurrency = useAtomValue(receiveCurrencyAtom);

  function logConversion() {
    setConversions((prev) => [
      ...prev,
      {
        id: generateId(),
        loggedAt: new Date().toISOString(),
        sendAmount: sendCurrency.sendAmount,
        sendCurrency: sendCurrency.currency,
        receiveAmount: receiveCurrency.receiveAmount,
        receiveCurrency: receiveCurrency.currency,
      },
    ]);
  }

  function clearConversions() {
    removeConversions();
  }

  function removeConversionById(id: string) {
    setConversions((prev) => prev.filter((conversion) => conversion.id !== id));
  }

  return {
    conversions,
    logConversion,
    clearConversions,
    removeConversionById,
  };
}
