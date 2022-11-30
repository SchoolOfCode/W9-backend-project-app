// import supertest
import { response } from "express";
import request from "supertest";
import router from "./students.js";
// import pool
import { pool } from "../db/index.js";
// end pool after all tests to exit jest after tests finish
afterAll(() => {
  pool.end();
});

// import express
import app from "../app.js";
/* GET /students
GET /students?username=some_username
GET /students/:id
POST /students
DELETE /students/:id */

//Ticket 2.1
//GET /students, Get all Users, ensure all students are displayed
test("GET /students, Ensure all students are displayed", async () => {
  const response = await request(app).get("/students/");
  expect(response.status).toStrictEqual(200);
  console.log(request.body);
  //data is not in JSON so dont need to use .set
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.any(Array),
  });
});

//ensure specific user is selected by their name, if name is mispelled or does not exist in the database
//then name should not appear
test("GET /students?username=some_username, Ensure user of a specific name is selected", async () => {
  // assign response to request GET request
  const response = await request(app).get("/students?username=Tendai");
  // check response status code
  expect(response.status).toStrictEqual(200);

  console.log(request.body);

  // check the outer most level of the response object (shape)
  expect(response.body).toStrictEqual({
    success: true,
    payload: [
      {
        id: 10,
        username: "Tendai",
      },
    ],
  });
});

//GET /students/:id similar concept to above^
test("GET /students/:id, Ensure user of a specific id is selected", async () => {
  const response = await request(app).get("/students/10");
  expect(response.status).toStrictEqual(200);

  /*  console.log(request.body.payload); */

  let userObject = response.body.payload;
  expect(userObject).toStrictEqual({
    id: 10,
    username: "Tendai",
  });
});

//POST /students, ensure contents of body can be posted
//GET /students/:id similar concept to above^
test("POST /students, Ensure NEW user is added to database", async () => {
  //data is not in JSON so dont need to use .set
  const response = await request(app)
    .post("/students")
    .send({ username: "Chance" });
  expect(response.status).toStrictEqual(201);

  expect(response.body).toStrictEqual({
    success: true,
    payload: { id: expect.any(Number), username: "Chance" },
  });
});

//DELETE /students/:id
test("DELETE /students, Ensure user is deleted from the database", async () => {
  //data is not in JSON so dont need to use .set
  const response = await request(app).delete("/students/100");
  expect(response.status).toStrictEqual(200);

  expect(response.body).toStrictEqual({
    success: true,
    payload: { id: 100, username: "Maria" },
  });
});
