import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useFavouriteCurrencies } from "@/hooks/use-favourite-currencies";

import { RateList } from "../common/rate-list";
import {
  FavouriteCurrencyCard,
  FavouriteCurrencyCardContent,
  FavouriteCurrencyCardFooter,
  FavouriteCurrencyCardHeader,
  FavouriteCurrencyCardPercentage,
  FavouriteCurrencyCardTitle,
} from "./favourite-currency-card";

export function FavouriteCurrenciesList() {
  const { favouriteCurrencies, removeFavouriteCurrencyById } =
    useFavouriteCurrencies();

  return (
    <RateList>
      {favouriteCurrencies.map((favouriteCurrency) => (
        <li key={favouriteCurrency.id}>
          <FavouriteCurrencyCard>
            <FavouriteCurrencyCardHeader>
              <p>{favouriteCurrency.sendCurrency}</p>
              <ArrowRight className="text-neutral-200" size={14} />
              <p>{favouriteCurrency.receiveCurrency}</p>
            </FavouriteCurrencyCardHeader>

            <FavouriteCurrencyCardFooter>
              <FavouriteCurrencyCardContent>
                <FavouriteCurrencyCardTitle>
                  {favouriteCurrency.currencyRate.toFixed(4)}
                </FavouriteCurrencyCardTitle>

                <FavouriteCurrencyCardPercentage
                  percentage={favouriteCurrency.currencyPercentageChange}
                />
              </FavouriteCurrencyCardContent>

              <Button
                variant="outline"
                size="icon-sm"
                onClick={() =>
                  removeFavouriteCurrencyById(favouriteCurrency.id)
                }
              >
                <Star className="fill-primary" />
              </Button>
            </FavouriteCurrencyCardFooter>
          </FavouriteCurrencyCard>
        </li>
      ))}
    </RateList>
  );
}
