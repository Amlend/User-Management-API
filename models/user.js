const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         age:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

// CRUD operations

// Create a new user
const createUser = async (userData) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all users
const getUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get a user by ID
const getUserById = async (userId) => {
  try {
    return await User.findById(userId);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update a user by ID
const updateUser = async (userId, userData) => {
  try {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete a user by ID
const deleteUser = async (userId) => {
  try {
    return await User.findByIdAndDelete(userId);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  User,
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
