import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const enModule = await import(
  pathToFileURL(join(root, "src/lib/i18n/messages/en.ts")).href
);
const en = enModule.default;

function flattenMessages(obj, prefix = "") {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") {
      result[path] = value;
      continue;
    }
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const itemPath = `${path}.${index}`;
        if (typeof item === "string") result[itemPath] = item;
        else if (item && typeof item === "object") {
          Object.assign(result, flattenMessages(item, itemPath));
        }
      });
      continue;
    }
    if (value && typeof value === "object") {
      Object.assign(result, flattenMessages(value, path));
    }
  }
  return result;
}

const flat = flattenMessages(en);
const out = join(root, "src/lib/i18n/messages/string-tables/_en.template.json");
writeFileSync(out, JSON.stringify(flat, null, 2) + "\n");
console.log("Wrote", Object.keys(flat).length, "keys to", out);
