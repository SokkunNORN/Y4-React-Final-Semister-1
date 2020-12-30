/* eslint-disable jsx-a11y/anchor-is-valid */

function ListDropdown ({ lists, isHasLastBorder = false }) {
    return (
        <div id="listDropdown" className="dropdown-menu">
            {lists.map(function (item, i) {
                console.log(lists)
                if (isHasLastBorder) {
                    if (lists.length - 1 === i) {
                        return (
                            <div  key={i}>
                                <div className="dropdown-divider"></div> 
                                <a className="dropdown-item" href="#">{ item }</a>
                            </div>
                        )
                    }
                    return <a className="dropdown-item" href="#" key={i}>{ item }</a>;
                }
                return <a className="dropdown-item" href="#" key={i}>{ item }</a>;
            })}
        </div>
    )
}

export default ListDropdown
