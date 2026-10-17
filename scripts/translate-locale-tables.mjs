/**
 * Generates full locale JSON tables from the English template.
 * Uses the public Google Translate gtx endpoint (dev/build helper only).
 *
 * Run: node scripts/translate-locale-tables.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const templatePath = join(
  root,
  "src/lib/i18n/messages/string-tables/_en.template.json",
);
const outDir = join(root, "src/lib/i18n/messages/string-tables");

const template = JSON.parse(readFileSync(templatePath, "utf8"));
const keys = Object.keys(template);

const localeTargets = {
  hi: "hi",
  kn: "kn",
  mr: "mr",
  te: "te",
  ta: "ta",
  bn: "bn",
  gu: "gu",
  ml: "ml",
  pa: "pa",
  or: "or",
  ur: "ur",
};

const SKIP_TRANSLATE = new Set([
  "site.name",
  "common.ayusyntax",
  "approach.pillars.0.id",
  "approach.pillars.1.id",
]);

const DELIM = "\n⟦⟦SEP⟧⟧\n";

async function translateBatch(texts, targetLang) {
  const payload = texts.join(DELIM);
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(payload)}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Translate failed ${res.status} for ${targetLang}`);
  }
  const data = await res.json();
  const translated = data[0].map((part) => part[0]).join("");
  const parts = translated.split(DELIM);
  if (parts.length !== texts.length) {
    throw new Error(
      `Split mismatch for ${targetLang}: expected ${texts.length}, got ${parts.length}`,
    );
  }
  return parts;
}

async function buildLocale(locale, targetLang) {
  const out = {};
  const batchSize = 12;
  const toTranslateKeys = [];
  const toTranslateValues = [];

  for (const key of keys) {
    const value = template[key];
    if (SKIP_TRANSLATE.has(key)) {
      out[key] = value;
      continue;
    }
    toTranslateKeys.push(key);
    toTranslateValues.push(value);
  }

  for (let i = 0; i < toTranslateValues.length; i += batchSize) {
    const sliceKeys = toTranslateKeys.slice(i, i + batchSize);
    const sliceValues = toTranslateValues.slice(i, i + batchSize);
    const translated = await translateBatch(sliceValues, targetLang);
    sliceKeys.forEach((key, index) => {
      out[key] = translated[index];
    });
    process.stdout.write(
      `\r${locale}: ${Math.min(i + batchSize, toTranslateValues.length)}/${toTranslateValues.length}`,
    );
    await new Promise((r) => setTimeout(r, 120));
  }
  process.stdout.write("\n");

  for (const key of keys) {
    if (!(key in out)) out[key] = template[key];
  }

  const path = join(outDir, `${locale}.json`);
  writeFileSync(path, JSON.stringify(out, null, 2) + "\n");
  console.log(`Wrote ${path}`);
}

for (const [locale, target] of Object.entries(localeTargets)) {
  await buildLocale(locale, target);
}

console.log("Done.");
