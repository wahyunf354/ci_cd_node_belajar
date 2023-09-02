const supertest = require("supertest");
const app = require("./app.js");
const request = supertest(app);

it("aksess endpoint / return Hello", async () => {
  const res = await request.get("/");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Hello");
});

it("akses endpoint /user return User", async () => {
  const res = await request.get("/users");
  expect(res.status).toBe(200);
  expect(res.text).toBe("User");
});

it("akses endpoint /cicd return Belajar CI", async () => {
  const res = await request.get("/cicd");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Belajar CI");
});
