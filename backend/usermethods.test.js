const { addUser } = require('./usermethods'); // Import the addUser function
const User = require('./user'); // Import the User model
describe('addUser', () => {
        it('should add a new user to the database', async () => {
            const dummyUser = {
                Username: 'abcd',
                Password: '12345678',
                Email: 'email@email.com',
            };
    
            const savedUser = await addUser(dummyUser.Username, dummyUser.Email, dummyUser.Password);
    
            expect(savedUser).toHaveProperty('_id');
            expect(savedUser.Username).toBe(dummyUser.Username);
            expect(savedUser.Email).toBe(dummyUser.Email);
            expect(savedUser.Password).not.toBe(dummyUser.Password); // Password should be hashed
    
            const userInDB = await User.findOne({ Email: dummyUser.Email });
            expect(userInDB).toBeTruthy();
        });
    
        // ... other test cases
    });   
