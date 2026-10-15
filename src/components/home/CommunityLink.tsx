import type { ReactNode } from "react";

// Preserve each reference layout while making unavailable destinations explicit.
export default function CommunityLink({
  href,
  children,
  className = "",
  label,
}: {
  href: string | null;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  if (href)
    return (
      <a href={href} className={className} aria-label={label}>
        {children}
      </a>
    );
  return (
    <span
      className={`inline-block cursor-default ${className}`}
      role="link"
      aria-disabled="true"
      aria-label={`${label ?? (typeof children === "string" ? children : "Link")} — coming soon`}
      title="Placeholder — link coming soon"
    >
      {children}
    </span>
  );
}
