import React from 'react';
var AddRecipe = React.lazy(function () { return import('./AddRecipe'); });
var routes = [
    {
        path: '/add-recipe',
        component: AddRecipe,
        exact: true
    },
];
export default routes;
//# sourceMappingURL=routes.js.map