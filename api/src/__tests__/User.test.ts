import request from 'supertest'
import { app } from "../app"

import createConnection from '../database'

describe("Users", () => {
  beforeAll(async() => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  it("Showld be able blablabla", async() => {
      const response = await request(app).post("/users").send({
      email: "user@email.com",
      name: "User Example",
    })
    expect(response.status).toBe(201)
  }) 
})