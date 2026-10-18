"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";

import { DesktopRateTabs } from "./desktop-rate-tabs";
import { MobileRateTabs } from "./mobile-rate-tabs";

export function RateTabs() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileRateTabs />;
  }

  return <DesktopRateTabs />;
}
