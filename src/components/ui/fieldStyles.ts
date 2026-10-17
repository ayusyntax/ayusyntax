import { cn } from "@/lib/cn";

export const formLabelClass = "block text-sm font-medium text-text-primary";

export const formFieldClass = cn(
  "mt-1.5 w-full rounded-md border border-border-strong bg-bg-input px-3 py-2 text-sm text-text-primary",
  "placeholder:text-text-muted",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/45",
);
