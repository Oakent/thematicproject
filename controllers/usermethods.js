const mongoose = require("mongoose");
const User = require("./models/user");
const config = require("./config");
const bcrypt = require("bcrypt");
const saltRounds = 10; // The cost factor for hashing


const mongoURI = config.mongoURI;
console.log("mongoURI", mongoURI);

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

async function addUser(Username, Email, Password) {
  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ Email }); // Ensure field names are lowercase if your model defines them that way
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(Password, saltRounds);

    // Create new user document
    const newUser = new User({
      Username, // Make sure these match the case and spelling of your schema definitions
      Email,
      Password: hashedPassword, // store hashed password
    });

    // Save user to the database
    const savedUser = await newUser.save();
    console.log("User added:", savedUser);
    return savedUser;
  } catch (err) {
    console.error(err);
    throw err;
  }
}


async function removeUser(Email) {
  try {
    // Check if a user with the given email exists
    const existingUser = await User.findOne({ Email });
    if (!existingUser) {
      throw new Error('User with this email does not exist');
    }

    // Remove the user from the database
    const removedUser = await User.findOneAndDelete({ Email });
    console.log("User removed:", removedUser);
    return removedUser;
  } catch (err) {
    console.error(err);
    throw err;
  }
}


async function loginUser(Email, Password) {
  try {
    // Find the user with the given email
    const user = await User.findOne({ Email });
    if (!user) {
      throw new Error('User with this email does not exist');
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(Password, user.Password);
    if (!passwordMatch) {
      throw new Error('Incorrect password');
    }

    console.log("User logged in:", user);
    return user;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = {
  addUser,
  removeUser,
  loginUser,
};