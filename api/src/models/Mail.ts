import { DataTypes } from "sequelize";
import { db } from "@config/db";

const User = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  sender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  timestamp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  verification_link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  otp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  received_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  is_readed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});

module.exports = User;
