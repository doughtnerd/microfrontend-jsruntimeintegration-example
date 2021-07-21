import React from 'react';

const RecipeBook = React.lazy(() => import('./Recipes'))

const routes = [
  {
    path: '/',
    component: RecipeBook,
    exact: true,
  },
]

export default routes
