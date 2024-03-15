const User = require('./models/user');

async function addUser(name, email, password) {
  try {
    // check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // create new user document
    const newUser = new User({ name, email, password });

    // save user to the database
    const savedUser = await newUser.save();

    return savedUser;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = { addUser };