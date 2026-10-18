import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CURRENCIES } from "@/constants/currencies";

import { CurrencyPickerSelectGroup } from "./currency-picker-select-group";

export function CurrencyPicker({
  selectedCurrency,
  onCurrencyChange,
}: {
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
}) {
  const popularCurrencies = Object.entries(CURRENCIES).filter(
    ([_, currency]) => currency.isPopular,
  );
  const otherCurrencies = Object.entries(CURRENCIES).filter(
    ([_, currency]) => !currency.isPopular,
  );

  return (
    <Select value={selectedCurrency} onValueChange={onCurrencyChange}>
      <SelectTrigger className="w-24">
        <SelectValue />
      </SelectTrigger>

      <SelectContent
        className="max-h-116.5 w-96 overflow-hidden px-0 text-neutral-200"
        position="popper"
        sideOffset={10}
        align="end"
      >
        <CurrencyPickerSelectGroup title="popular" items={popularCurrencies} />

        <CurrencyPickerSelectGroup
          title="other currencies"
          items={otherCurrencies}
          className="mt-1"
        />
      </SelectContent>
    </Select>
  );
}
