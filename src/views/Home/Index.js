
import Card from '../../components/card'
import './index.css'
import listTasks from '../../mock.json'

function Home () {
    return (
        <div id="home">
            <div className="row">
                {listTasks.data.map(function (item, i) {
                    return (
                        <div className="col col-sm-12 col-md-6 col-lg-4" key={i}>
                            <Card task={ item } />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
