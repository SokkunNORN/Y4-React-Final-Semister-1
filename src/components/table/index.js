
import DataTable, { createTheme } from 'react-data-table-component'
import './index.css'

function Search () {
    return (
        <div className="input-group">
            <input className="form-control py-2 shadow-none" type="search" placeholder="Search..." id="example-search-input" />
            <span className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                    <i className="fa fa-search"></i>
                </button>
            </span>
        </div>
    )
}

function Table ({columns, data = [], isSelect = false, isLoading = true, isSearch = false }) {
    
    createTheme('solarized', {
        background: {
          default: 'none',
        }
    });

    const paginationRowsPerPageOptions = [5, 10, 20, 50, 100]

    return (
        <div id='data-table'>
            {
                isSearch ? <Search /> : ''
            }
            
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