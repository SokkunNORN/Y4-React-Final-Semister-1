
import { Switch } from "react-router-dom";

import { routes, RouteWithSubRoutes } from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <Switch>
        { routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        )) }
      </Switch>
    </div>
  );
}

export default App;