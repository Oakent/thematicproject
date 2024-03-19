const User = require("./models/user");
const mongoose = require("mongoose");
const config = require("./config");

const mongoURI = config.mongoURI;
console.log("mongoURI", mongoURI);

// Connect to MongoDB
mongoose.connect(mongoURI);
const db = mongoose.connection;

async function addUser(name, email, password) {
  try {
    // check if user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // create new user document
    const newUser = new User({
      Username: name,
      Email: email,
      Password: password,
    });

    // save user to the database
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function removeUser(email) {
  try {
    // check if user with the given email exists
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw new Error('User with this email does not exist');
    }

    // remove the user from the database
    const removedUser = await User.findOneAndRemove({ email });
    return removedUser;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

addUser("luke", "luke@email", "password")
  .then((user) => console.log("User added:", user))
  .catch((err) => console.error(err));

addUser("tasha", "tasha@email", "password")
  .then((user) => console.log("User added:", user))
  .catch((err) => console.error(err));

removeUser("luke@email")
  .then((removedUser) => console.log('User removed:', removedUser))
  .catch((err) => console.error(err));

module.exports = { addUser, removeUser };