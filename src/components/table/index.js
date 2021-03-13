
import DataTable, { createTheme } from 'react-data-table-component'
import { isString } from 'lodash'
import './index.css'

function edit (id) {
    console.log('Edit with id: ', id)
}

function remove (id) {
    console.log('Delete with id: ', id)
}

function IconsActionColumn ({ value, buttons }) {
    return (
        <>
            {
                buttons.map((item, index) => {
                    if (item == 'edit') {
                        return(
                            <button href='#' className="btn btn-sm" key={ index } onClick={() => edit(value.id)} >
                                <i className="material-icons text-primary">mode</i>
                            </button>
                        )
                    } else if (item == 'delete') {
                        return (
                            <button href='#' className="btn btn-sm" key={ index } onClick={() => remove(value.id)} >
                                <i className="material-icons text-danger">delete</i>
                            </button>
                        )
                    }
                })
            }
        </>
    )
}

function Table ({
    columns = [], 
    data = [], 
    isSelect = false, 
    isLoading = true, 
    isSearch = false, 
    isCreate = false ,
    actionButtons = []
}) {
    
    const isValid = actionButtons.every(isString) && actionButtons.every(e => ['edit', 'delete'].includes(e))
    if (!isValid) {
        console.error('"actionButtons" prop must be an array of string ["edit", "delete"]')
    } else {
        if (actionButtons.length > 0) {
            columns.map(value => {
                if (value.name == 'Action') {
                    value.cell = (row) => (<IconsActionColumn value={ row } buttons={actionButtons} />)
                    value.center = true
                }
            })
        }
    }

    createTheme('solarized', {
        background: {
          default: 'none',
        }
    });

    const paginationRowsPerPageOptions = [5, 10, 20, 50, 100]

    return (
        <div id='data-table'>

            <div className='row'>
                {
                    isSearch ? (
                        <div className='col'>
                            <div className="input-group">
                                <input className="form-control py-2 shadow-none" type="search" placeholder="Search..." />
                                <span className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    ) : <></>  
                }
                {
                    isCreate ? (
                        <div className='col'>
                            <button className="btn btn-primary float-right" onClick={() => createFunction()}>
                                <i className="fa fa-plus mr-2"></i>
                                Create
                            </button>
                        </div>
                    ) : <></>
                }
            </div>

            <DataTable
                data={ data }
                columns={ columns }
                selectableRows={ isSelect }
                theme="solarized"
                noHeader
                pagination
                paginationRowsPerPageOptions={ paginationRowsPerPageOptions }
                selectableRowsHighlight
                progressPending={ isLoading }
            />
        </div>
    )
}

export default Table