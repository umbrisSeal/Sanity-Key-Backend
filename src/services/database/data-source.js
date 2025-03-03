const { DataSource } = require('typeorm');
const entityUsuarios = require('./entities/usuarios');

const AppDataSource = new DataSource({
    type: 'postgres',
    host: `${process.env.DATABASE_HOST}`,
    port: 5432,
    username: `${process.env.DATABASE_USERNAME}`,
    password: `${process.env.DATABASE_PASSWORD}`,
    database: `${process.env.DATABASE_DATABASE}`,
    synchronize: false,
    entities: [entityUsuarios]
});

module.exports = AppDataSource;