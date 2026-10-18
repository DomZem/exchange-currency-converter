import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RateHistory } from "./history/rate-history";

type Tab = "history" | "compare" | "favourites" | "log";

export function MobileRateTabs() {
  const [selectedTab, setSelectedTab] = useState<Tab>("history");

  return (
    <div className="space-y-4">
      <Select
        value={selectedTab}
        onValueChange={(value) => setSelectedTab(value as Tab)}
      >
        <SelectTrigger className="w-full md:hidden">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="history">history</SelectItem>
            <SelectItem value="compare">compare</SelectItem>
            <SelectItem value="favourites">favourites</SelectItem>
            <SelectItem value="log">log</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {selectedTab === "history" && <RateHistory />}
    </div>
  );
}
