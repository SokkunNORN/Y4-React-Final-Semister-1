
import { RouteWithSubRoutes } from '../router'
import { Switch } from "react-router-dom";

import Header from './Header'

function Dashboard ({ routes }) {
    return (
        <>
            <Header />

            <div className="container p-4">
                <Switch>
                    { routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} { ...route } />
                    )) }    
                </Switch>
            </div>
        </>
    )
}

export default Dashboard;
