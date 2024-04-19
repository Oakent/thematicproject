// const jwt = require('jsonwebtoken');
// const User = require('../models/user');

// const authenticateUser = async (req, res, next) => {
//   try {
//     // Get the token from the Authorization header
//     const token = req.header('Authorization').replace('Bearer ', '');
    
//     // Verify the token and get the user's ID
//     const decoded = jwt.verify(token, 'your_jwt_secret');
//     const userId = decoded._id;

//     // Fetch the user from the database
//     const user = await User.findById(userId);

//     if (!user) {
//       throw new Error();
//     }

//     // Add the user to the req object
//     req.user = user;

//     next();
//   } catch (error) {
//     res.status(401).send({ error: 'Please authenticate.' });
//   }
// };

// module.exports = authenticateUser;