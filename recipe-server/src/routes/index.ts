import { Router } from "express";
import { IGetAllRecipesQuery } from "../database/queries/recipe/get-all-recipes-query.interface";
import { createRecipeRoutes } from "./recipes";
import { IInsertRecipeQuery } from "../database/queries/recipe/insert-recipe.interface";

const router = Router();

export function createRoutes(
  recipeQuerier: IGetAllRecipesQuery & IInsertRecipeQuery
): Router {
  router.use("/recipes", createRecipeRoutes(recipeQuerier));

  return router;
}
