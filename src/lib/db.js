import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "dua_main.sqlite");
console.log("Database path:", dbPath);
const db = new Database(dbPath);

export default db;
