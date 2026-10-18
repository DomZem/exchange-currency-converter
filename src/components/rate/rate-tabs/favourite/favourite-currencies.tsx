import { useFavouriteCurrencies } from "@/hooks/use-favourite-currencies";

import {
  EmptyStateCard,
  EmptyStateCardSubtitle,
  EmptyStateCardTitle,
} from "../common/empty-state-card";
import { FavouriteCurrenciesList } from "./favourite-currencies-list";

export function FavouriteCurrencies() {
  const { favouriteCurrencies } = useFavouriteCurrencies();

  if (favouriteCurrencies.length === 0) {
    return (
      <EmptyStateCard>
        <EmptyStateCardTitle>No pinned pairs yet</EmptyStateCardTitle>
        <EmptyStateCardSubtitle>
          Pin a pair to track its rate here. Tap the star icon on any conversion
          or comparison row.
        </EmptyStateCardSubtitle>
      </EmptyStateCard>
    );
  }

  return (
    <div className="space-y-4 rounded-[1rem] border border-neutral-600 bg-neutral-700 p-4 md:space-y-5 md:p-5">
      <div className="flex items-center justify-between uppercase">
        <p className="text-preset-3-medium text-neutral-200">pinned pairs</p>
        <p className="text-preset-5-regular text-neutral-50">
          {favouriteCurrencies.length} favourites
        </p>
      </div>

      <FavouriteCurrenciesList />
    </div>
  );
}
