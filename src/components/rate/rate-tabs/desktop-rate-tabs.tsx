import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useConversions } from "@/hooks/use-conversions";
import { useFavouriteCurrencies } from "@/hooks/use-favourite-currencies";

import { RateHistory } from "./history/rate-history";

export function DesktopRateTabs() {
  const { conversions } = useConversions();
  const { favouriteCurrencies } = useFavouriteCurrencies();

  return (
    <Tabs className="hidden space-y-5 md:block" defaultValue="history">
      <TabsList className="w-full justify-start" variant="line">
        <TabsTrigger className="flex-0" value="history">
          history
        </TabsTrigger>

        <TabsTrigger className="flex-0" value="compare">
          compare
        </TabsTrigger>

        <TabsTrigger className="flex-0" value="favourites">
          favourites
          <span className="text-preset-6 inline-flex size-5 items-center justify-center rounded-full bg-lime-800 text-lime-500">
            {favouriteCurrencies.length}
          </span>
        </TabsTrigger>

        <TabsTrigger className="flex-0" value="log">
          log{" "}
          <span className="text-preset-6 inline-flex size-5 items-center justify-center rounded-full bg-lime-800 text-lime-500">
            {conversions.length}
          </span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="history">
        <RateHistory />
      </TabsContent>

      <TabsContent value="compare"></TabsContent>

      <TabsContent value="favourites"></TabsContent>

      <TabsContent value="log"></TabsContent>
    </Tabs>
  );
}
