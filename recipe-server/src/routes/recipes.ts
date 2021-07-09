import { Router } from "express";
import { IGetAllRecipesQuery } from "../database/queries/recipe/get-all-recipes-query.interface";
import { IInsertRecipeQuery } from "../database/queries/recipe/insert-recipe.interface";

const router = Router();

export function createRecipeRoutes(
  recipeQuerier: IGetAllRecipesQuery & IInsertRecipeQuery
): Router {
  router.get("/", async (req, res) => {
    const allRecipes = await recipeQuerier.getAllRecipes();
    return res.json(allRecipes);
  });

  router.post("/", async (req, res) => {
    const insertResult = await recipeQuerier.insertRecipe(req.body);
    return res.json(insertResult);
  });

  return router;
}
