
import routes from '../router'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from './Header'

function RouteWithSubRoutes (route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

function Dashboard () {
    return (
        <>
            <Router>
                <Header />

                <div className="container p-4">
                    <Switch>
                        { routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        )) }    
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default Dashboard;
