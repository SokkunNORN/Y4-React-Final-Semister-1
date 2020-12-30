
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
                    <button className="btn btn-add-board mr-4">
                        <i className="fa fa-plus-square mr-2"></i>
                        Add another list
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
