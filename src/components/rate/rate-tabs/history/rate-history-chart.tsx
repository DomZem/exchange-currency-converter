import dayjs from "dayjs";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import type { CurrencyRate } from "@/api/currency-rate/types/currency-rate";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import type { RateHistoryStats } from "@/types/rate-history";

import { RateHistoryCurrent } from "./rate-history-current";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-primary)",
  },
} satisfies ChartConfig;

export function RateHistoryChart({
  historyRates,
  stats,
  receiveCurrency,
  sendCurrency,
}: {
  historyRates: CurrencyRate[];
  stats: RateHistoryStats | null;
  sendCurrency: string;
  receiveCurrency: string;
}) {
  return (
    <div className="space-y-5 rounded-[1rem] border border-neutral-600 bg-neutral-700 px-3 py-4 md:p-5">
      <div className="flex items-center justify-between">
        <p className="text-preset-3-medium text-neutral-50">
          {sendCurrency}/{receiveCurrency}
        </p>

        <RateHistoryCurrent />
      </div>

      <ChartContainer config={chartConfig} className="h-74.5 w-full">
        <AreaChart
          accessibilityLayer
          data={historyRates}
          // margin={{ top: 12, right: 0, left: -24, bottom: 0 }}
        >
          <defs>
            <linearGradient id="rateGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="var(--color-primary)"
                stopOpacity={0.45}
              />
              <stop
                offset="60%"
                stopColor="var(--color-primary)"
                stopOpacity={0.08}
              />
              <stop
                offset="100%"
                stopColor="var(--color-primary)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          {/* DONE */}
          <CartesianGrid
            vertical={false}
            strokeDasharray="2 4"
            stroke="var(--color-neutral-500)"
          />

          {/* DONE */}
          <YAxis
            dataKey="rate"
            domain={["dataMin", "dataMax"]}
            ticks={stats?.ticks}
            tickLine={false}
            axisLine={false}
            tickMargin={16}
            tickFormatter={(val) => Number(val).toFixed(4)}
          />

          {/* DONE */}
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={16}
            minTickGap={40}
            tickFormatter={(value) => dayjs(value).format("MMM DD")}
          />

          <Area
            dataKey="rate"
            type="linear"
            stroke="var(--color-primary)"
            strokeWidth={2}
            fill="url(#rateGradient)"
            dot={false}
            activeDot={{
              r: 4,
              fill: "var(--color-primary)",
              stroke: "#161616",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
