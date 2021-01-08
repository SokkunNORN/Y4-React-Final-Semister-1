
/* eslint-disable array-callback-return */

function Tab ({ tabs = [] }) {
    return (
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                {tabs.map(function (item, index) {
                    return (
                        <a className={index === 0 ? "nav-item nav-link active" : "nav-item nav-link"} 
                            key={ index }
                            data-toggle="tab" 
                            href={ "#"+ item.id }>
                            { item.text }
                        </a>
                    )
                })}
            </div>
        </nav>
    )
}

export default Tab