import React from 'react'

import {useFetch} from './hooks/useFetch.hook'

export const Recipes = (): JSX.Element => {

    const response = useFetch('http://localhost:3005/api/recipes')

    if(response) {
        return (
            response.map((recipe: any) =>
            <div key={recipe.id}>
                <img src={recipe.image_url} />
                <div>{recipe.name}</div>
                <div>{recipe.description}</div>
                <div>
                    <ul>
                        {recipe.ingredients_json.map((ingredient: any) => <li key={ingredient}>{ingredient}</li>)}
                    </ul>
                </div>
            </div>)
        )
    }

    return <>...Loading Recipe Book</>
}

export default Recipes
