const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  // Name and email: all strings, neither Null nor empty.
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },

  // Link to default student icon
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://inhub.thehenryford.org/images/default-source/icons/128x128/icon_alumni_icw_do_128x128.png?sfvrsn=a40f8e34_0"
  },

  // Decimal value on [0,4]. Rounds to 3 decimal places.
  gpa: {
    type: Sequelize.DECIMAL(4,3),
    validate: {max: 4, min: 0}
  }

});

module.exports = Student;