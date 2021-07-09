import { Router } from "express";
import { IGetAllRecipesQuery } from "../database/queries/recipe/get-all-recipes-query.interface";

const router = Router();

export function createRecipeRoutes(recipeQuerier: IGetAllRecipesQuery): Router {

  router.get('/', async (req, res) => {
    const allRecipes = await recipeQuerier.getAllRecipes()
    return res.json(allRecipes)
  })

  return router;
}
