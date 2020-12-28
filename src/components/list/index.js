
import './index.css'
import ListDropdown from '../listDropdown'

function List ({ tasks }) {
    return (
        <div id="list">
            <ul className="list-group">
                {tasks.map(function (item, i) {
                    return (
                        <li className="list-group-item" key={i}>
                            <button className="float-right btn btn-edit"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-pencil"></i>
                            </button>
                            <ListDropdown lists={ ["Edit", "Move To", "Remove"] } isHasLastBorder={ true }/>
                            { item.title }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List
