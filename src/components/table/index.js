
import DataTable, { createTheme } from 'react-data-table-component'
import memoize from 'memoize-one'
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
            <button className="btn btn-primary float-right">
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

function editUser (id) {
    console.log('Edit user with id: ', id)
}

function deleteUser (id) {
    console.log('Delete user with id: ', id)
}

function IconsActionColumn ({value}) {
    return (
        <>
            <button href='#' className="btn btn-sm" id={value.id} onClick={ editUser(value.id) }>
                <i className="material-icons text-primary">mode</i>
            </button>

            <button href='#' className="btn btn-sm" id={value.id} onClick={ deleteUser(value.id)} >
                <i className="material-icons text-danger">delete</i>
            </button>
        </>
    )
}

function Table ({
    columns, 
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