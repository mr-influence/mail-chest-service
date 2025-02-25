import { DataTypes } from "sequelize";
import { db } from "@config/db";
import { ACCOUNTS_TABLE } from "./constants";

const Accounts = db.define(ACCOUNTS_TABLE, {
  id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Accounts;
