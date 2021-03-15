
import DataTable, { createTheme } from 'react-data-table-component'
import { isString } from 'lodash'
import './index.css'

function Table ({
    columns = [], 
    data = [], 
    isSelect = false, 
    isLoading = true, 
    isSearch = false, 
    isCreate = false,
    defaultSortField = '',
    actionButtons = [],
    createFunction = () => {},
    editFunction = () => {},
    deleteFunction = () => {},
    showDetailFunction = () => {}
}) {
    
    const paginationRowsPerPageOptions = [5, 10, 20, 50, 100]
    const isValid = actionButtons.every(isString) && actionButtons.every(e => ['edit', 'delete'].includes(e))

    columns.map(value => {
        if ('link' in value) {
            if (value.link == true) {
                value.cell = (row) => (
                    <a href='#' onClick={() => showDetailFunction(row)}>{ row[value.selector] }</a>
                )
            }
        }
    })

    if (!isValid) {
        console.error('"actionButtons" prop must be an array of string ["edit", "delete"]')
    } else {
        if (actionButtons.length > 0) {
            columns.map(value => {
                if (value.name == 'Action') {
                    value.cell = (row) => (
                        actionButtons.map((item, index) => {
                            if (item == 'edit') {
                                return(
                                    <button href='#' className="btn btn-sm" key={ index } onClick={() => editFunction(row)} >
                                        <i className="material-icons text-primary">mode</i>
                                    </button>
                                )
                            } else if (item == 'delete') {
                                return (
                                    <button href='#' className="btn btn-sm" key={ index } onClick={() => deleteFunction(row)} >
                                        <i className="material-icons text-danger">delete</i>
                                    </button>
                                )
                            }
                        })
                    )
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
                defaultSortAsc
                defaultSortField={defaultSortField}
                paginationRowsPerPageOptions={ paginationRowsPerPageOptions }
                selectableRowsHighlight
                progressPending={ isLoading }
            />
        </div>
    )
}

export default Table