var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { HashRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import Navigation from './Navigation';
import localRoutes from './routes';
import remoteRoutes from 'recipes/routes';
var routes = __spreadArray(__spreadArray([], localRoutes), remoteRoutes);
export var App = function () {
    return (React.createElement(HashRouter, null,
        React.createElement("div", null,
            React.createElement("h1", null, "Add Recipe App"),
            React.createElement(Navigation, null),
            React.createElement(React.Suspense, { fallback: React.createElement("div", null, "Loading...") },
                React.createElement(Switch, null, routes.map(function (route) { return (React.createElement(Route, { key: route.path, path: route.path, component: route.component, exact: route.exact })); }))))));
};
export default App;
//# sourceMappingURL=App.js.map