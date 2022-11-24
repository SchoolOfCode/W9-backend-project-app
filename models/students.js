const { query } = require("../database/index.js");

async function getStudents() {
  const result = await query(`SELECT * FROM studentdata;`);
  return result.rows;
}

async function searchStudentByName(searchTerm) {
  const result = await query(
    `SELECT * FROM studentdata WHERE firstName = '${searchTerm}'`
  );
  return result.rows;
}

async function createStudent(firstName, lastName) {
  const newStudent = await query(
    `INSERT INTO studentdata(firstName,lastName) VALUES ('${firstName}','${lastName}');`
  );
  return newBootcamper;
}

async function searchStudentById(id) {
  const result = await query(`SELECT * FROM studentdata WHERE studentID = $1`, [
    id,
  ]);
  return result.rows[0];
}

async function updateStudentById(id, firstName, lastName) {
  const selectedStudent = await query(
    `UPDATE studentdata SET firstName='${firstName}', lastName='${lastName}' WHERE studentID = ${id}`
  );
  return selectedStudent;
}

async function deleteStudentById(id) {
  const deletedStudent = await query(`DELETE FROM studentdata WHERE id=$1`, [
    id,
  ]);
  console.log(deletedStudent);
  return deletedStudent;
}

module.exports = {
  getStudents,
  searchStudentByName,
  createStudent,
  searchStudentById,
  updateStudentById,
  deleteStudentById,
};
