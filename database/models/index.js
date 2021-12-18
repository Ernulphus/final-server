// register models, set up associations between tables, and generate barrel file for the models;

const Student   = require('./Student');
const Campus    = require('./Campus');

// Students can be associated with at most one campus
Student.belongsTo(Campus);
// Campuses can be associated with many students
Campus.hasMany(Student);

module.exports = {
  Student,
  Campus
};