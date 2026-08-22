import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath =
  "/Users/sherryhe/Documents/Codex/2026-06-21/you-are-helping-me-perform-a/outputs/crystaring_customer_development_system.xlsx";
const outputPath =
  "/Users/sherryhe/Documents/Crystaring 2/old_company_names.json";

const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const extractRows = (sheetName, headerRowIndex, companyHeaderNames) => {
  const sheet = workbook.worksheets.getItem(sheetName);
  const values = sheet.getUsedRange().values;
  const headers = values[headerRowIndex].map((v) => (typeof v === "string" ? v.trim() : ""));
  const companyIndexes = headers
    .map((header, index) => (companyHeaderNames.includes(header) ? index : -1))
    .filter((index) => index >= 0);

  if (!companyIndexes.length) return [];

  return values
    .slice(headerRowIndex + 1)
    .map((row) =>
      companyIndexes
        .map((index) => row[index])
        .find((value) => typeof value === "string" && value.trim())
    )
    .filter((value) => typeof value === "string" && value.trim())
    .map((value) => value.trim());
};

const names = new Set([
  ...extractRows("Key Customers", 3, ["company_name"]),
  ...extractRows("Active Projects", 3, ["customer_company"]),
  ...extractRows("New Leads", 3, ["company_name"]),
]);

await fs.writeFile(
  outputPath,
  JSON.stringify([...names].sort((a, b) => a.localeCompare(b)), null, 2)
);

console.log(JSON.stringify({ outputPath, count: names.size }, null, 2));
