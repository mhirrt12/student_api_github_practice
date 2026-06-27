require('dotenv').config();

console.log('Server Port:', process.env.PORT);
console.log('Database:', process.env.DB_HOST);
console.log('User:', process.env.DB_USER);
console.log('Password:', process.env.DB_PASSWORD);
console.log('APIkey:', process.env.API_KEY);