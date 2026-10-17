type JsonObject = Record<string, unknown>;

export function flattenMessages(
  obj: JsonObject,
  prefix = "",
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      result[path] = value;
      continue;
    }

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const itemPath = `${path}.${index}`;
        if (typeof item === "string") {
          result[itemPath] = item;
        } else if (item && typeof item === "object") {
          Object.assign(
            result,
            flattenMessages(item as JsonObject, itemPath),
          );
        }
      });
      continue;
    }

    if (value && typeof value === "object") {
      Object.assign(result, flattenMessages(value as JsonObject, path));
    }
  }

  return result;
}

function setAtPath(root: JsonObject, path: string, value: string) {
  const parts = path.split(".");
  let current: JsonObject | unknown[] = root;

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    const nextPart = parts[i + 1];
    const nextIsIndex = /^\d+$/.test(nextPart);

    if (Array.isArray(current)) {
      const index = Number(part);
      if (!current[index] || typeof current[index] !== "object") {
        current[index] = nextIsIndex ? [] : {};
      }
      current = current[index] as JsonObject | unknown[];
      continue;
    }

    const record = current as JsonObject;
    if (!(part in record) || record[part] === null) {
      record[part] = nextIsIndex ? [] : {};
    } else if (typeof record[part] !== "object") {
      record[part] = nextIsIndex ? [] : {};
    }
    current = record[part] as JsonObject | unknown[];
  }

  const last = parts[parts.length - 1];
  if (Array.isArray(current) && /^\d+$/.test(last)) {
    current[Number(last)] = value;
    return;
  }

  (current as JsonObject)[last] = value;
}

export function applyStringTable<T extends JsonObject>(
  base: T,
  table: Record<string, string>,
): T {
  const clone = structuredClone(base) as JsonObject;
  for (const [path, value] of Object.entries(table)) {
    setAtPath(clone, path, value);
  }
  return clone as T;
}
