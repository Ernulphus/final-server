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
  }

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  }

  // Link to default student icon
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://it.tufts.edu/sites/default/files/inline-images/student-icon_1_2.png"
  }

  // Decimal value on [0,4]. Rounds to 3 decimal places.
  gpa: {
    type: Sequelize.FLOAT(4,3),
    validate: {max: 4, min: 0}
  }

});

module.exports = Student;