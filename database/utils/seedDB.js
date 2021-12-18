const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		address: "68th st and Lexington, New York"
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address: "Cambridge, MA"
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      lastname: "Shmo",
			email: "j.shmo@yahoo.com",
			gpa: 3.8914444444
		});

	await dummy_student.setCampus(dummy_campus);

}

module.exports = seedDB;