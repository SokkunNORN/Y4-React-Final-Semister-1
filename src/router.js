
import { Route } from "react-router-dom";

import { MENU_BUILDER } from './navigation/builders/menu.builders';

import Login from './views/auth'
import Four0Four from './views/four0four'
import Dashboard from './views/Dashboard'

export const routes = [
  {
    path: MENU_BUILDER[0].path,
    component: Dashboard
  },
  {
    path: MENU_BUILDER[MENU_BUILDER.length - 1].path,
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