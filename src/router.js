
import { Route } from "react-router-dom";

import { MENU_BUILDER } from './navigation/builders/menu.builders';

import Login from './views/auth'
import Home from './views/Home'
import Graph from './views/graph'
import Four0Four from './views/four0four'

export const routes = [
  {
    path: MENU_BUILDER[0].path,
    component: Home,
    exact: true
  },
  {
    path: MENU_BUILDER[1].path,
    component: Graph
  },
  {
    path: MENU_BUILDER[2].path,
    component: Login
  },
  {
    path: "*",
    component: Four0Four
  }
];

export function RouteWithSubRoutes (route) {
  return (
    <Route
      path={ route.path }
      render={props => (
        <route.component {...props} routes={ route.routes } />
      )}
    />
  );
}