import { Knex } from "knex";
import { IGetAllRecipesQuery } from "./get-all-recipes-query.interface";
import { IInsertRecipeQuery } from "./insert-recipe.interface";

export class RecipeQuerier implements IGetAllRecipesQuery, IInsertRecipeQuery {
  constructor(private knex: Knex) {}

  async getAllRecipes(): Promise<any> {
    return (await this.knex.table("recipe").select()).map((recipe) => ({
      ...recipe,
      ingredients_json: JSON.parse(recipe.ingredients_json),
    }));
  }

  async insertRecipe(recipe: any): Promise<any> {
    return await this.knex.table("recipe").insert({
      name: recipe.name,
      description: recipe.description,
      image_url: recipe.image_url,
      ingredients_json: JSON.stringify(recipe.ingredients_json),
    });
  }
}
