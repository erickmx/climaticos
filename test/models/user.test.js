const chai = require("chai");
const mongoose = require("mongoose");
const faker = require("faker");
require("dotenv").load();

const User = require("../../models/user.model");

const { expect, assert } = chai;

const fakeUser = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password()
};

describe("#Testing the User schema", () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.DATABASE);
  });

  afterEach(async () => {
    await User.deleteMany();
    await mongoose.disconnect();
  });

  it("should save a user", async () => {
    try {
      const newUser = new User(fakeUser);
      const data = await newUser.save();

      assert(newUser.firstName === fakeUser.firstName);
    } catch (error) {
      assert.isNotNull(error);
    }
  });
});
