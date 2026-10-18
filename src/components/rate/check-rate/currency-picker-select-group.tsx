import Image from "next/image";

import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type CurrencyData = {
  name: string;
  iconSrc: string;
};

type CurrencyEntry = [string, CurrencyData];

type CurrencyPickerSelectGroupProps = {
  title: string;
  items: CurrencyEntry[];
  className?: string;
};

export function CurrencyPickerSelectGroup({
  title,
  items,
  className,
}: CurrencyPickerSelectGroupProps) {
  return (
    <SelectGroup className={cn("px-2", className)}>
      <div className="mb-1 flex items-center justify-between border-b p-2">
        <SelectLabel>{title}</SelectLabel>
        <SelectLabel>{items.length}</SelectLabel>
      </div>

      {items.map(([code, currency]) => (
        <SelectItem value={code} key={code}>
          <div className="flex items-center gap-3">
            <Image
              src={currency.iconSrc}
              width={20}
              height={20}
              alt={`${currency.name} Flag`}
            />
            <div className="text-preset-4 text-neutral-50">{code}</div>
            <div className="text-preset-5-regular">{currency.name}</div>
          </div>
        </SelectItem>
      ))}
    </SelectGroup>
  );
}
