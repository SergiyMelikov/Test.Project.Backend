// Update with your config settings.

export default {
    development: {
        client: 'postgresql',
        connection: {
            database: 'TestProjectBackend',
            host: '127.0.0.1',
            password: 'qwerty',
            port: 5432,
            user: 'TestProjectBackend API',
        },

        migrations: {
            tableName: 'knex_migrations',
        },

        pool: {
            max: 10,
            min: 2,
        },
    },
};
