
import { Route } from "react-router-dom";

import { MENU_BUILDER } from './navigation/builders/menu.builders';

import Login from './views/auth'
import Dashboard from './layouts/Dashboard'
import Home from './views/home'
import Watch from './views/watch'
import Store from './views/store'
import Group from './views/group'
import Game from './views/game'
import Four0Four from './views/four0four'

export const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    routes: [
      {
        path: MENU_BUILDER[0].path,
        exact: true,
        component: Home
      },
      {
        path: MENU_BUILDER[1].path,
        component: Watch
      },
      {
        path: MENU_BUILDER[2].path,
        component: Store
      },
      {
        path: MENU_BUILDER[3].path,
        component: Group
      },
      {
        path: MENU_BUILDER[4].path,
        component: Game
      }
    ]
  },
  {
    path:  MENU_BUILDER[5].path,
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