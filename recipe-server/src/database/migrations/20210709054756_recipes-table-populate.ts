import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.table('recipe').insert({
        name: 'Lasagna',
        description: 'A super basic lasagna recipe',
        image_url: 'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550-500x500.jpg',
        ingredients_json: JSON.stringify(['ground beef', 'tomato', 'onion', 'pasta', 'cloves', 'cheese'])
    })

    await knex.table('recipe').insert({
        name: 'Tacos',
        description: 'A super basic taco recipe',
        image_url: 'https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg',
        ingredients_json: JSON.stringify(['ground beef', 'onion', 'corn torilla', 'cheese', 'taco seasoning', 'guacamole'])
    })
}


export async function down(knex: Knex): Promise<void> {
}

