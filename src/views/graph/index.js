
import './index.css'
import Dashboard from '../../layouts/Dashboard'
import Tab from '../../components/Tab'

const tabs = [
    {
        text: 'Bar Chart',
        id: 'nav-bar-chart'
    },
    {
        text: 'Pie Chart',
        id: 'nav-pie-chart'
    }
]

function Graph () {
    return (
        <Dashboard>
            <div id="graph">
                <div className="card card-contain">
                    <div className="card-body">
                        <Tab tabs={ tabs }/>
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default Graph
