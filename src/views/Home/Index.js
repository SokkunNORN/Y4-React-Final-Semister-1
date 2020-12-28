
import Card from '../../components/card'
import './index.css'
import listTasks from '../../mock.json'

function Home () {
    return (
        <div id="home">
            <div className="d-flex flex-row">
                {listTasks.data.map(function (item, i) {
                    return (
                        <div className="column" key={i}>
                            <Card task={ item } />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
