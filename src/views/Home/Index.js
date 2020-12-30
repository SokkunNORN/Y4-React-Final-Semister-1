
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
                <div className="column">
                    <div className="card card-contain-add mb-4 text-center">
                        <div className="card-body">
                            <button className="btn">
                                <h5>Add another list <i className="fa fa-plus"></i></h5>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
