import { DataTypes } from "sequelize";
import { db } from "@config/db";
import { ACCOUNTS_TABLE, EMAILS_TABLE } from "./constants";
import { raw } from "express";

const Emails = db.define(EMAILS_TABLE, {
  id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  account_id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    references: {
      model: ACCOUNTS_TABLE,
      key: "id",
    },
  },
  sender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  recipient: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  raw: {
    type: DataTypes.TEXT,
    allowNull: false,
    get() {
      return raw(this.getDataValue("body"));
    },
  },
  received_at: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Emails;
