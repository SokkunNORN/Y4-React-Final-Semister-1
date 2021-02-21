
import Sidebar from './sidebar/Sidebar'
import './MainDashboard.css'

function MainDashboard ( props ) {
    return (
        <>
            <div className="wrapper d-flex">
                <Sidebar />

                <div className="contain">
                    <div className="container-fluid mt-3">
                        <div className="container-fluid pt-4 main shadow-sm ">
                            <div className="container-fluid">
                                { props.children }
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </>
    )
}

export default MainDashboard;
