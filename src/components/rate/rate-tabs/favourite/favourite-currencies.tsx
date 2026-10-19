import { useFavouriteCurrencies } from "@/hooks/use-favourite-currencies";

import {
  EmptyStateCard,
  EmptyStateCardSubtitle,
  EmptyStateCardTitle,
} from "../common/empty-state-card";
import {
  RateSectionCard,
  RateSectionCardSubtitle,
  RateSectionCardTitle,
} from "../common/rate-section-card";
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
    <RateSectionCard>
      <div className="flex items-center justify-between">
        <RateSectionCardTitle>pinned pairs</RateSectionCardTitle>
        <RateSectionCardSubtitle>
          {favouriteCurrencies.length} favourites
        </RateSectionCardSubtitle>
      </div>

      <FavouriteCurrenciesList />
    </RateSectionCard>
  );
}
