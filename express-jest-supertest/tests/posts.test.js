const request = require("supertest");
const app = require("../app");

describe("Post module test cases:", () => {
  beforeEach(() => {
    //console.log("Before each test case");
  });

  afterEach(() => {
    //console.log("After each test case");
  });

  const postId = Math.floor(Math.random() * 1000 + 10000);

  test("Creating a post article", async () => {
    await request(app)
      .post("/posts")
      .send({
        id: postId,
        title: "Some sample Post" + Math.random(),
        description: "Some sample descriptio" + Math.random(),
        user_id: 1200,
      })
      .expect(201);
  });

  test("Updating a post article", async () => {
    await request(app)
      .put("/posts")
      .send({
        id: postId,
        title: "Some sample Post - updated" + Math.random(),
        description: "Some sample descriptio  - updated" + Math.random(),
        user_id: 1200,
      })
      .expect(201);
  });

  test("Deleting a post article", async () => {
    await request(app)
      .delete("/posts")
      .send({
        id: postId,
      })
      .expect(200);
  });
});
