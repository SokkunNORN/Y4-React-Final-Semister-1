// @ts-nocheck
/* eslint-disable array-callback-return */

function Tab ({ tabs = [] }) {
    return (
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                {tabs.map(function (item, index) {
                    return (
                        <a className={index === 0 ? "nav-item nav-link active" : "nav-item nav-link"} 
                            id={ item.id + "-tab" } data-toggle="tab" 
                            href={ "#"+ item.id } 
                            role="tab" 
                            aria-controls={ item.id } 
                            aria-selected="true">
                            { item.text }
                        </a>
                    )
                })}
            </div>
        </nav>
    )
}

export default Tab