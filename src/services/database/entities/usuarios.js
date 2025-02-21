const { EntitySchema } = require('typeorm');

const entityUsuarios = new EntitySchema({
    name: 'Usuarios',
    tableName: 'usuarios',
    columns: {
        usuario_id: {
            primary: true,
            type: 'varchar',
            unique: true,
            nullable: false
        },
        username: {
            type: 'varchar',
            nullable: true
        },
        email: {
            type: 'varchar',
            unique: true,
            nullable: false
        },
        password_hash: {
            type: 'varchar',
            nullable: false
        },
        bio: {
            type: 'varchar',
            nullable: true
        },
        avatar: {
            type: 'varchar',
            nullable: true
        },
        verificado: {
            type: 'boolean',
            nullable: false
        },
        codigo_activacion: {
            type: 'varchar',
            nullable: false
        },
        codigo_lifetime: {
            type: 'date',
            nullable: false
        }
    }
});

module.exports = entityUsuarios;