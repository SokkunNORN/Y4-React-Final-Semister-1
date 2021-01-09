
/* eslint-disable array-callback-return */

import './index.css'
import Dashboard from '../../layouts/Dashboard'
import Tab from '../../components/Tab'
import TabContent from '../../components/Tab/TabContent'
import CanvasJSReact from '../../canvas/canvasjs.react'
import lists from '../../mock.json'

const listBoards = lists.data
const boardCategory = lists.data.length
const pieChartData = []
let totalTask = 0

for (let i = 0; i <= boardCategory - 1; i++){
    var taskInCategory = lists.data[i].tasks.length
    totalTask = taskInCategory + totalTask
}

for(let i = 0; i <= boardCategory - 1; i++){
    pieChartData.push({
        label: lists.data[i].boardTitle,
        y: (lists.data[i].tasks.length * (100/totalTask)).toFixed(2)
    })
}

console.log(totalTask);
var CanvasJSChart = CanvasJSReact.CanvasJSChart

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

var dataPoints = []

listBoards.map(item => {
    dataPoints.push({
        label: item.boardTitle,
        y: item.tasks.length
    })
})

const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title:{
        text: "TASK ON BOARD"
    },
    axisY: {
        includeZero: true
    },
    data: [{
        type: "column",
        dataPoints: dataPoints
    }]
}
const pieChart = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",
    title:{
        text: "Task Percentages"
    },
    data: [{
        type: "pie",
        indexLabel: "{label}: {y}%",		
        startAngle: -90,
        dataPoints: pieChartData
    }]
}

const BarChart = () => {
    return (
        <>
            <CanvasJSChart options = {options} />
        </>
    )
}

function PieChart () {
    return (
        <>
            <CanvasJSChart options = {pieChart} />
        </>
    )
}

function Graph () {
    return (
        <Dashboard>
            <div id="graph">
                <div className="card card-contain">
                    <Tab tabs={ tabs }/>
                            
                    <div className="card-body" style={{textAlign: 'center'}}>
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
