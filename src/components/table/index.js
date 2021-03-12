
import DataTable, { createTheme } from 'react-data-table-component'
import { isString } from 'lodash'
import './index.css'

function Search () {
    return (
        <div className='col'>
            <div className="input-group">
                <input className="form-control py-2 shadow-none" type="search" placeholder="Search..." id="example-search-input" />
                <span className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
            </div>
        </div>
    )
}

function ButtonCreate () {
    return (
        <div className='col'>
            <button className="btn btn-primary float-right" onClick={() => create()}>
                <i className="fa fa-plus mr-2"></i>
                Create
            </button>
        </div>
    )
}

function SearchCreate ({isSearch, isBtnCreate}) {
    if (isSearch || isBtnCreate) {
        return (
            <div className='row'>
                { isSearch ? <Search /> : '' }
                { isBtnCreate ? <ButtonCreate /> : '' }
            </div>
        )
    }
    return <></>
}

function edit (id) {
    console.log('Edit with id: ', id)
}

function remove (id) {
    console.log('Delete with id: ', id)
}

function create () {
    console.log('Create function is working...')
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
    isBtnCreate = false ,
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
            <SearchCreate 
                isSearch={ isSearch } 
                isBtnCreate={ isBtnCreate } 
            />

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