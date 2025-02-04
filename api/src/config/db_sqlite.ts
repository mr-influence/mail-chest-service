import { Sequelize } from "sequelize";
import env from "./environment";

// Initialize SQLite database (stored locally in the container)
export const db = new Sequelize({
  dialect: "sqlite",
  storage: env.DATABASE_HOST,
});

module.exports = db;
