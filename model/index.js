const dbConfig = require('../config/dbConfig');
const { DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.log('Error' + err);
  });

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.demos = require('./taskModel')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log('connected success');
});

module.exports = db;
