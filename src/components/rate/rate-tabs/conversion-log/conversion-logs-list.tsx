import { ArrowRight, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useConversions } from "@/hooks/use-conversions";
import { formatLoggedAt } from "@/lib/conversion-log";

import { RateList } from "../common/rate-list";
import {
  ConversionLogCard,
  ConversionLogCardAmounts,
  ConversionLogCardCurrencyPair,
  ConversionLogCardFooter,
  ConversionLogCardHeader,
  ConversionLogCardReceiveAmount,
  ConversionLogCardSendAmount,
  ConversionLogCardTimestamp,
} from "./conversion-log-card";

export function ConversionLogsList() {
  const { conversions, removeConversionById } = useConversions();

  return (
    <RateList>
      {conversions.map((conversion) => (
        <li key={conversion.id}>
          <ConversionLogCard>
            <ConversionLogCardHeader>
              <ConversionLogCardTimestamp>
                {formatLoggedAt(conversion.loggedAt)}
              </ConversionLogCardTimestamp>

              <ConversionLogCardCurrencyPair>
                <p>{conversion.sendCurrency}</p>
                <ArrowRight className="text-neutral-200" size={14} />
                <p>{conversion.receiveCurrency}</p>
              </ConversionLogCardCurrencyPair>
            </ConversionLogCardHeader>

            <ConversionLogCardFooter>
              <ConversionLogCardAmounts>
                <ConversionLogCardSendAmount>
                  {conversion.sendAmount}
                </ConversionLogCardSendAmount>
                <ConversionLogCardReceiveAmount>
                  {conversion.receiveAmount}
                </ConversionLogCardReceiveAmount>
              </ConversionLogCardAmounts>

              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => removeConversionById(conversion.id)}
              >
                <Trash />
              </Button>
            </ConversionLogCardFooter>
          </ConversionLogCard>
        </li>
      ))}
    </RateList>
  );
}
