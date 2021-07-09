import { Knex } from "knex";
import { IGetAllRecipesQuery } from "./get-all-recipes-query.interface";


export class RecipeQuerier implements IGetAllRecipesQuery {

    constructor(private knex: Knex) {}
    
    async getAllRecipes(): Promise<any> {
        return (await this.knex.table('recipe').select()).map(recipe => ({...recipe, ingredients_json: JSON.parse(recipe.ingredients_json)}))
    }

}