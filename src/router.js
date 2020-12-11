import Home from './views/Home/Index'
import Watch from './views/Watch/Index'
import Store from './views/Store/Index'
import Group from './views/Group/Index'
import Game from './views/Game/Index'

const routes = [
    {
      path: "/",
      exact: true,
      component: Home
    },
    {
      path: "/watch",
      component: Watch
    },
    {
      path: "/store",
      component: Store
    },
    {
      path: "/group",
      component: Group
    },
    {
      path: "/game",
      component: Game
    }
];

export default routes