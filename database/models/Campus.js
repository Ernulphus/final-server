const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

    // Do not allow Null, validate that the string is non-empty
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {notEmpty: true}
    },

    // Link to default icon for campuses
    imageURL: {
      type: Sequelize.STRING,
      defaultValue: "https://icon-library.com/images/graduation-hat-icon/graduation-hat-icon-4.jpg"
    },

    // Address, also not Null or empty
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {notEmpty: true}
    },

    // Description, TEXT is unlimited size
    description: {
      type: Sequelize.TEXT
    }

});

module.exports = Campus;