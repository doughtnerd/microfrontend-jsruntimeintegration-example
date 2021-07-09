import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTableIfNotExists('recipe', (table) => {
        table.increments('id');
        table.string('name');
        table.string('description');
        table.string('image_url');
        table.json('ingredients_json');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('recipe')
}

