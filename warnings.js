const { Sequelize, Op, Model, DataTypes } = require("sequelize");
module.exports = (warningsdb) => {
  const Warnings = warningsdb.define('warns', {
    userid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reason: {
      type: DataTypes.TEXT,
      defaultValue: "None",
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modid: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Warnings;
}