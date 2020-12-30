
import "./index.css";

import List from '../list'
import ListDropdown from '../listDropdown'

function Card ({ task }) {
    return (
        <>
            <div className="card card-contain mb-4">
                <div className="card-body">
                    <button className="float-right btn btn-more" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-ellipsis-h"></i>
                    </button>
                    <ListDropdown lists={ ["Add Task", "Edit Title", "Remove"] } isHasLastBorder={ true }/>

                    <h6 className="card-title">{ task.boardTitle }</h6>

                    <List tasks={ task.tasks }/>
                </div>
            </div>
        </>
    )
}

export default Card
