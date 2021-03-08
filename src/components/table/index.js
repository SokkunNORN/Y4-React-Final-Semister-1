
import DataTable, { createTheme } from 'react-data-table-component'

function Table ({data, columns, isSelect = false}) {
    
    createTheme('solarized', {
        background: {
          default: 'none',
        }
    });

    const paginationRowsPerPageOptions = [5, 10, 20, 50, 100]

    return (
        <DataTable
            data={ data }
            columns={ columns }
            selectableRows={ isSelect }
            theme="solarized"
            noHeader
            pagination
            paginationRowsPerPageOptions={ paginationRowsPerPageOptions }
            selectableRowsHighlight
        />
    )
}

export default Table