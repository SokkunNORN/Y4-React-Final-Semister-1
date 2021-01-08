
/* eslint-disable array-callback-return */

import './index.css'
import Dashboard from '../../layouts/Dashboard'
import Tab from '../../components/Tab'
import TabContent from '../../components/Tab/TabContent';

const tabs = [
    {
        text: 'Bar Chart',
        id: 'nav-bar-chart',
        class: 'tab-pane active'
    },
    {
        text: 'Pie Chart',
        id: 'nav-pie-chart',
        class: 'tab-pane fade'
    }
]

const BarChart = () => {
    return (
        <>
            This is Bar Chart
        </>
    )
}

function PieChart () {
    return (
        <>
            This is Pie Chart
        </>
    )
}

function Graph () {
    return (
        <Dashboard>
            <div id="graph">
                <div className="card card-contain">
                    <Tab tabs={ tabs }/>

                    <div className="card-body">
                        <div className="tab-content" id="nav-tabContent">
                            <TabContent
                                class={ tabs[0].class }
                                id={ tabs[0].id } >
                                <BarChart />
                            </TabContent>
                            
                            <TabContent
                                class={ tabs[1].class }
                                id={ tabs[1].id } >
                                <PieChart />
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default Graph
