const express = require("express");
const router = express.Router();

const {
  getStudents,
  searchStudentByName,
  createStudent,
  searchStudentById,
  updateStudentById,
  deleteStudentById,
} = require("../models/students.js");

router.get("/", async function (req, res) {
  const result = await getStudents();
  res.json({ success: true, payload: result });
});

router.get("/name/:name", async function (req, res) {
  const result = await searchStudentByName(req.params.name);
  res.json({ success: true, payload: result });
});

router.get("/:id", async function (req, res) {
  const result = await searchStudentById(req.params.id);
  res.json({ success: true, payload: result });
});

router.post("/", async function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const result = await createStudent(firstName, lastName);
  res.json({ success: true, payload: result });
});

router.patch("/:id", async function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const result = await updateStudentById(req.params.id, firstName, lastName);
  res.json({ success: true, payload: result });
});

router.delete("/:id", async function (req, res) {
  const result = deleteStudentById(req.params.id);
  res.json({ success: true, payload: result });
});

module.exports = router;
