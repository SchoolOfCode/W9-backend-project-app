import express from "express";

const studentsRouter = express.Router();

import {
  getStudents,
  searchStudentByName,
  createStudent,
  searchStudentById,
  updateStudentById,
  deleteStudentById,
} from "../models/students.js";

studentsRouter.get("/", async function (req, res) {
  const result = await getStudents();
  res.json({ success: true, payload: result });
});

studentsRouter.get("/name/:name", async function (req, res) {
  const result = await searchStudentByName(req.params.name);
  res.json({ success: true, payload: result });
});

studentsRouter.get("/:id", async function (req, res) {
  const result = await searchStudentById(req.params.id);
  res.json({ success: true, payload: result });
});

studentsRouter.post("/", async function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const result = await createStudent(firstName, lastName);
  res.json({ success: true, payload: result });
});

studentsRouter.patch("/:id", async function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const result = await updateStudentById(req.params.id, firstName, lastName);
  res.json({ success: true, payload: result });
});

studentsRouter.delete("/:id", async function (req, res) {
  const deletedUser = deleteStudentById(req.params.id);
  res.json({ success: true, payload: deletedUser });
});

export { studentsRouter };
