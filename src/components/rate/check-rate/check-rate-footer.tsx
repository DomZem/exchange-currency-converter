import { Star } from "lucide-react";

import type { CurrencyRate } from "@/api/currency-rate/types/currency-rate";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useConversions } from "@/hooks/use-conversions";
import { useFavouriteCurrencies } from "@/hooks/use-favourite-currencies";

export function CheckRateFooter({
  currencyRate,
  isLoading = false,
}: {
  currencyRate: CurrencyRate | null;
  isLoading?: boolean;
}) {
  const { addFavouriteCurrency } = useFavouriteCurrencies();
  const { logConversion } = useConversions();

  function handleAddFavouriteCurrency() {
    if (!currencyRate) {
      return;
    }

    addFavouriteCurrency(currencyRate.rate);
  }

  return (
    <div className="border-border flex flex-col items-center gap-4 rounded-b-xl border border-t-0 bg-neutral-700 p-4 md:flex-row md:justify-between md:px-5">
      {isLoading ? (
        <Skeleton className="h-4 w-36" />
      ) : currencyRate ? (
        <span className="text-preset-6 md:text-preset-5-regular uppercase">
          {currencyRate
            ? `1 ${currencyRate.base} = ${currencyRate.rate.toFixed(4)} ${currencyRate.quote}`
            : "Loading..."}
        </span>
      ) : null}

      <div className="inline-flex items-center gap-2 md:gap-3">
        <Button disabled={!currencyRate} onClick={handleAddFavouriteCurrency}>
          <Star className="fill-primary stroke-primary" />
          favorited
        </Button>

        <Button variant="outline" onClick={logConversion}>
          log conversion
        </Button>
      </div>
    </div>
  );
}
