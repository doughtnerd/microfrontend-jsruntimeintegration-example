import {Router} from 'express'
import { IGetAllRecipesQuery } from '../database/queries/recipe/get-all-recipes-query.interface'
import {createRecipeRoutes} from './recipes'

const router = Router()

export function createRoutes(recipeQuerier: IGetAllRecipesQuery): Router {

    router.use('/recipes', createRecipeRoutes(recipeQuerier))

    return router

}