const sequelize = require('../config/database'); // Sesuaikan dengan path ke file konfigurasi Sequelize Anda
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

async function testConnectionAndModel() {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');

    // Synchronize model ke database (opsional)
    await sequelize.sync();

    // Contoh operasi dengan model User
    const newUser = await User.create({ name: 'John Doe', email: 'john.doe@example.com', password: 'password123' });
    console.log('New user created:', newUser.toJSON());
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnectionAndModel();
