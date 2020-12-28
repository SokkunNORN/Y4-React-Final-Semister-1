
import './index.css'

function List ({ title }) {
    return (
        <div id="list">
            <ul className="list-group">
                <li className="list-group-item">
                    <button className="float-right btn btn-edit"><i className="fa fa-pencil"></i></button>
                    Cras justo odio
                </li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    )
}

export default List
