const { DataTypes } = require('sequelize');
// const { sequelize } = require('.');

module.exports = (sequelize) => {
  const demo = sequelize.define('demo', {
    FirstName: {
      type: DataTypes.STRING,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
    },
  });

  return demo;
};
