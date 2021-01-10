
function ListDropdown ({ lists, isHasLastBorder = false, onHandle, indexBoards = [] }) {
    return (
        <div id="listDropdown" className="dropdown-menu">
            {lists.map(function (item, i) {
                if (isHasLastBorder) {
                    if (lists.length - 1 === i) {
                        return (
                            <div  key={i}>
                                <div className="dropdown-divider"></div> 
                                <button className="dropdown-item" onClick={() => onHandle(item, indexBoards)}>{ item }</button>
                            </div>
                        )
                    }
                    return <button className="dropdown-item" key={i} onClick={() => onHandle(item, indexBoards)}>{ item }</button>;
                }
                return <button className="dropdown-item" key={i} onClick={() => onHandle(item, indexBoards)}>{ item }</button>;
            })}
        </div>
    )
}

export default ListDropdown
