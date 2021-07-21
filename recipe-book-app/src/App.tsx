import { HashRouter, Route, Switch } from "react-router-dom"
import React from 'react'
import Navigation from 'addrecipe/Navigation'
import localRoutes from './routes'
import remoteRoutes from 'addrecipe/routes'

const routes = [...localRoutes, ...remoteRoutes];

export const App = (): JSX.Element => {

    return (
        <HashRouter>
            <div>
                <h1>Recipe Book App</h1>
                <Navigation />
                <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {routes.map((route) => (
                        <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                        />
                    ))}
                </Switch>
                </React.Suspense>
            </div>
        </HashRouter>
    )
}

export default App
