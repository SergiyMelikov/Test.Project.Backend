export const up = async (knex) => {
    await knex.raw('create extension if not exists "uuid-ossp"');

    await knex.schema.createTable('products', (table) => {
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('name').notNullable();
        table.integer('price').notNullable();
        table.text('description');
        table.string('thumbnail');
        table.specificType('assets', 'text[]');
        table.json('specifications');
        table.timestamps(true, true);
        table.primary('id');
    });

    await knex.schema.createTable('users', (table) => {
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
        table.string('firstname');
        table.string('lastname');
        table.string('email').notNullable().unique();
        table.string('avatar');
    });

    await knex.schema.createTable('auth', (table) => {
        table.uuid('id').primary().references('id').inTable('users');
        table.string('mask');
    });

    await knex.schema.createTable('orders', (table) => {
        table.increments('id').primary();
        table.uuid('userid').references('id').inTable('users');
        table.json('items').notNullable();
        table.integer('total').notNullable();
    });
};

export const down = async (knex) => {
    await knex.raw('drop extension if exists "uuid-ossp"');
    await knex.schema.dropTable('orders');
    await knex.schema.dropTable('auth');
    await knex.schema.dropTable('users');
    await knex.schema.dropTable('products');
};
