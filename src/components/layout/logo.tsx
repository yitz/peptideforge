/**
 * AetherPeptide Logo — Canonical production component
 *
 * Uses the official spa icon (Material Symbols "spa" filled) as inline SVG paths.
 * No external font dependencies for the icon — fully self-contained.
 *
 * Variants:
 *   - horizontal: Icon + "AetherPeptide" wordmark (default)
 *   - stacked: Icon centered above wordmark + tagline
 *   - icon: Spa icon only
 *   - monogram: Icon inside a rounded container
 *
 * Automatically adapts to dark mode via CSS classes.
 */

const SPA_ICON_PATH =
  "M480-80q-94-12-168-48t-125.5-94Q135-280 108-356.5T81-526q110 11 186 40t123.5 82Q438-351 459-271.5T480-80Zm0-337q-23-35-62.5-69T326-548q6-42 20-87t34-88.5q20-43.5 45.5-83.5t54.5-73q29 33 54.5 73t45.5 83.5q20 43.5 34 88.5t20 87q-52 27-91.5 61T480-417Zm80 321q-2-70-10.5-129.5T523-338q47-81 129.5-132T879-526q1 158-84.5 272.5T560-96Z";

function SpaIcon({
  className = "",
  size = 24,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 -960 960 960"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path d={SPA_ICON_PATH} fill="currentColor" />
    </svg>
  );
}

export function Logo({
  variant = "horizontal",
  className = "",
}: {
  variant?: "horizontal" | "stacked" | "icon" | "monogram";
  className?: string;
}) {
  if (variant === "icon") {
    return (
      <SpaIcon
        size={24}
        className={`text-primary dark:text-[#2DD4BF] ${className}`}
      />
    );
  }

  if (variant === "monogram") {
    return (
      <div
        className={`flex items-center justify-center rounded-[22%] bg-primary p-2 dark:bg-[#0F1520] ${className}`}
      >
        <SpaIcon
          size={24}
          className="text-white dark:text-[#2DD4BF]"
        />
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-1 ${className}`}>
        <SpaIcon
          size={32}
          className="text-primary dark:text-[#2DD4BF]"
        />
        <span className="font-headline text-xl font-bold tracking-tight text-primary dark:text-[#2DD4BF]">
          AetherPeptide
        </span>
        <span className="font-label text-[10px] tracking-[0.1em] text-muted-foreground">
          Peptide Therapy. Refined.
        </span>
      </div>
    );
  }

  // Default: horizontal
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <SpaIcon
        size={28}
        className="text-primary dark:text-[#2DD4BF]"
      />
      <span className="font-headline text-xl font-bold tracking-tight">
        <span className="text-primary dark:text-[#2DD4BF]">Aether</span>
        <span className="text-foreground dark:text-white">Peptide</span>
      </span>
    </div>
  );
}

export { SpaIcon };
