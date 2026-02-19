import fs from "fs/promises";
import csv from "async-csv";

export async function readData() {
    const csvString = await fs.readFile("./db/terrorData.csv", "utf-8");
    const rows = await csv.parse(csvString, { columns: true });
    return rows.slice(0, 50);
  }

