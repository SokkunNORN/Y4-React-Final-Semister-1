
import Card from '../../components/card'
import './index.css'

function Home () {
    return (
        <div id="home">
            <div className="row">
                <div className="col col-sm-12 col-md-6 col-lg-4">
                    <Card title="Card 1" />
                </div>

                <div className="col col-sm-12 col-md-6 col-lg-4">
                    <Card title="Card 2" />
                </div>

                <div className="col col-sm-12 col-md-6 col-lg-4">
                    <Card title="Card 3" />
                </div>
            </div>
        </div>
    )
}

export default Home
