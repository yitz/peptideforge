"use client";

import { useCallback } from "react";
import { track } from "@/lib/analytics";

export function TrackedPlanCTA({
  planName,
  price,
  children,
}: {
  planName: string;
  price: number;
  children: React.ReactNode;
}) {
  const handleClick = useCallback(() => {
    track.planSelect(planName, price);
    track.ctaClick("pricing", `Get Started — ${planName}`, "/start");
  }, [planName, price]);

  return (
    <span onClick={handleClick} className="contents">
      {children}
    </span>
  );
}
