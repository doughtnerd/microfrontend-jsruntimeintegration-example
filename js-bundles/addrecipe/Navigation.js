import { Link } from 'react-router-dom';
import React from 'react';
var style = { border: '1px solid #000', padding: 12 };
var Navigation = function () { return (React.createElement("div", { style: style },
    React.createElement(Link, { to: '/' }, "Home"),
    " - ",
    React.createElement(Link, { to: '/add-recipe' }, "Add Recipe"))); };
export default Navigation;
//# sourceMappingURL=Navigation.js.map