import dayjs from "dayjs";

export function formatLoggedAt(dateString: string): string {
  const now = dayjs();
  const date = dayjs(dateString);

  const diffInMinutes = now.diff(date, "minute");
  const diffInHours = now.diff(date, "hour");

  // Under an hour -> show minutes (e.g., 20M, or 0M if just logged)
  if (diffInMinutes < 60) {
    return `${Math.max(0, diffInMinutes)}M`;
  }

  // Under 24 hours -> show hours (e.g., 1H, 2H)
  if (diffInHours < 24) {
    return `${diffInHours}H`;
  }

  // Older than 24 hours -> show date (e.g., 13 May)
  return date.format("D MMM");
}
