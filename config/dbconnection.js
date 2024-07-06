const Sequelize = require("sequelize");

const connection = new Sequelize(process.env.DB_URL,{
    dialect: "postgres",
    logging: false,
    dialectOptions: {
        ssl: {
            required: true,
            rejectUnauthorized: false,
        },
    },
});

connection.options.logging = false;

module.exports = connection;