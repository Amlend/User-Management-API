const request = require("supertest");
const app = require("../app");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../models/user");

describe("User API Endpoints", () => {
  let userId;

  it("should create a new user", async () => {
    const userData = { name: "Test User", email: "test@example.com", age: 25 };
    const response = await request(app).post("/add").send(userData);

    expect(response.statusCode).toBe(201);
    userId = response.body._id;
  });

  it("should get all users", async () => {
    const response = await request(app).get("/get");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should get a user by ID", async () => {
    const response = await request(app).get(`/get/${userId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body._id).toBe(userId);
  });

  it("should update a user by ID", async () => {
    const updatedUserData = { name: "Updated User" };
    const response = await request(app)
      .put(`/update/${userId}`)
      .send(updatedUserData);

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe("Updated User");
  });

  it("should delete a user by ID", async () => {
    const response = await request(app).delete(`/delete/${userId}`);
    expect(response.statusCode).toBe(200);
  });
});
