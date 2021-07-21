import React from 'react';

const AddRecipe = React.lazy(() => import('./AddRecipe'))

const routes = [
  {
    path: '/add-recipe',
    component: AddRecipe,
    exact: true,
  },
]

export default routes
