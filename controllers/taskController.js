const { where } = require('sequelize');
const db = require('../model');

const bcrypt = require('bcrypt');
const salt = 10;

const demo = db.demos;

const addRecord = async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.Password, salt);
  //   console.log('>>>>>', hashPassword);

  let info = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Password: hashPassword,
  };
  const email = req.body.Email;

  const emailAllready = await db.demos.findOne({ where: { email: email } });

  if (emailAllready) {
    res.status(200).send({
      status: false,
      message: 'Email already exists',
    });
  } else {
    const record = await db.demos.create(info);
    res.status(200).send(record);
    console.log(record);
  }

  //   const email = req.body.Email;

  //   if (email == email) {
  //     res.status(200).send({
  //       status: false,
  //       message: 'Email already exist',
  //     });

  //   } else {
  //     const record = await db.demos.create(info);
  //     res.status(200).send(record);
  //     console.log(record);
  //   }
};

// ========================
const listAll = async (req, res) => {
  let list = await demo.findAll({});
  console.log('list', list);
  res.status(200).send(list);
};

// =========================
const signIn = async (req, res) => {
  const password = req.body.Password;
  const email = req.body.Email;

  const emailMatch = await demo.findOne({ where: { email: req.body.Email } });

  if (emailMatch) {
    const match = await bcrypt.compare(password, emailMatch.Password);

    if (match) {
      res.status(200).send({
        status: true,
        message: 'login',
      });
    } else {
      res.status(200).send({
        status: false,
        message: 'Wrong Credentials',
      });
    }
  } else {
    res.status(200).send({
      status: false,
      message: 'Email not match',
    });
  }
};
module.exports = {
  addRecord,
  listAll,
  signIn,
};
