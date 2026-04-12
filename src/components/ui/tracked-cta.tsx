"use client";

import { useCallback } from "react";
import { track } from "@/lib/analytics";

/**
 * Wraps any CTA button/link to fire analytics on click.
 * Stays a client component so server-component parents don't need "use client".
 *
 * Usage:
 *   <TrackedCTA section="hero" label="Find Your Protocol" destination="/quiz">
 *     <Button render={<Link href="/quiz" />}>Find Your Protocol</Button>
 *   </TrackedCTA>
 */
export function TrackedCTA({
  section,
  label,
  destination,
  journey,
  children,
}: {
  section: string;
  label: string;
  destination: string;
  /** If true, also fires start_journey + InitiateCheckout event */
  journey?: boolean;
  children: React.ReactNode;
}) {
  const handleClick = useCallback(() => {
    track.ctaClick(section, label, destination);
    if (journey) {
      track.startJourney(section);
    }
  }, [section, label, destination, journey]);

  return (
    <span onClick={handleClick} className="contents">
      {children}
    </span>
  );
}
