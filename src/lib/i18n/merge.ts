import type { Messages } from "@/lib/i18n/types";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends readonly (infer U)[]
    ? readonly DeepPartial<U>[]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

function mergeValue(base: unknown, override: unknown): unknown {
  if (override === undefined) return base;
  if (Array.isArray(base) && Array.isArray(override)) {
    return override.map((item, index) => {
      const baseItem = base[index];
      if (
        baseItem &&
        typeof baseItem === "object" &&
        item &&
        typeof item === "object"
      ) {
        return mergeValue(baseItem, item);
      }
      return item ?? baseItem;
    });
  }
  if (
    base &&
    override &&
    typeof base === "object" &&
    typeof override === "object" &&
    !Array.isArray(base)
  ) {
    return mergeRecords(
      base as Record<string, unknown>,
      override as Record<string, unknown>,
    );
  }
  return override;
}

function mergeRecords(
  base: Record<string, unknown>,
  override: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...base };
  for (const key of Object.keys(override)) {
    result[key] = mergeValue(base[key], override[key]);
  }
  return result;
}

export function buildLocale(overrides: DeepPartial<Messages>, base: Messages): Messages {
  return mergeRecords(
    base as unknown as Record<string, unknown>,
    overrides as unknown as Record<string, unknown>,
  ) as Messages;
}
