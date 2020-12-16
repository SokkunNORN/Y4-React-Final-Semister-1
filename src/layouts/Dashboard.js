
import { RouteWithSubRoutes } from '../router'
import { Switch } from "react-router-dom";

import Header from './sidebar/Sidebar'
import './Dashboard.css'

function Dashboard ({ routes }) {
    return (
        <>
            <div className="wrapper d-flex">
                <Header />

                <div className="contain">
                    <div className="container-fluid mt-4 pl-4 pr-4">
                        <Switch>
                            { routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} { ...route } />
                            )) }    
                        </Switch>
                    </div>
                </div>
            </div>     
        </>
    )
}

export default Dashboard;
