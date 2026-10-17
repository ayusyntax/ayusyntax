import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tablesDir = join(root, "src/lib/i18n/messages/string-tables");

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

const enFlat = flattenMessages(en);
const enKeys = Object.keys(enFlat).sort();

const files = readdirSync(tablesDir).filter(
  (f) => f.endsWith(".json") && !f.startsWith("_"),
);
let failed = false;

for (const file of files) {
  const locale = file.replace(".json", "");
  const table = JSON.parse(readFileSync(join(tablesDir, file), "utf8"));
  const missing = enKeys.filter((key) => !(key in table));
  const extra = Object.keys(table).filter((key) => !(key in enFlat));

  if (missing.length) {
    failed = true;
    console.error(`[${locale}] missing ${missing.length} keys (first 5):`, missing.slice(0, 5));
  }
  if (extra.length) {
    console.warn(`[${locale}] ${extra.length} unknown keys (ignored at runtime)`);
  }
}

if (failed) {
  process.exit(1);
}

console.log(`OK: ${files.length} locale tables cover all ${enKeys.length} message keys.`);
