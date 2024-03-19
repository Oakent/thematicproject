const mongoose = require("mongoose");
const User = require("./models/user");
const config = require("./config");

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

    // Create new user document
    const newUser = new User({
      Username, // Make sure these match the case and spelling of your schema definitions
      Email,
      Password,
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

async function testRemoveUser() {
  try {
    // Add a user
    const user = await addUser("test", "test@email.com", "password");
    console.log("User added:", user);

    // Remove the user
    const removedUser = await removeUser("test@email.com");
    console.log("User removed:", removedUser);
  } catch (err) {
    console.error(err);
  }
}

testRemoveUser();

// addUser("luke", "l@gmail.com", "password");
// removeUser("l@gmail");
