import request from "supertest";
import app from "../src/index";

describe("GET /user", () => {
  it("should return 200 OK", () => {
    return request(app).get("/user")
      .expect(200);
  });
});

describe("test post controller", () => {




})