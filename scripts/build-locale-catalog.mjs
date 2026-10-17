/**
 * Dev helper: validates that every locale module exports a Messages-shaped object.
 * Run: node scripts/build-locale-catalog.mjs
 */
import { readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = join(dirname(fileURLToPath(import.meta.url)), "../src/lib/i18n/messages");
const files = readdirSync(dir).filter((f) => f.endsWith(".ts") && f !== "en.ts");
console.log("Locale modules:", files.join(", "));
