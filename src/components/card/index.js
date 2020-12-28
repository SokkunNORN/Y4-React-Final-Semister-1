
import "./index.css";

import List from '../list'

function Card ({ title }) {
    return (
        <>
            <div className="card card-contain mb-4">
                <div className="card-body">
                    <button className="float-right btn btn-more"><i className="fa fa-ellipsis-h"></i></button>
                    <h5 className="card-title">{ title }</h5>

                    <List />
                </div>
            </div>
        </>
    )
}

export default Card
