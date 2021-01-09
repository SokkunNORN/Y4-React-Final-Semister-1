
function TabContent (props) {
    return (
        <div 
            className={ props.class }
            id={ props.id } >
            { props.children }
        </div>
    )
}

export default TabContent