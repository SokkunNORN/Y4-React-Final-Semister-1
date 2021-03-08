
import MainDashboard from '../../layouts/MainDashboard'
import DataTable from '../../components/table'

const data = [
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 2, title: 'Conan the Barbarian', year: '1982' },
    { id: 3, title: 'Conan the Barbarian', year: '1982' }
]
const columns = [
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Year',
      selector: 'year',
      sortable: true,
      right: true,
    },
];

function User () {
    return (
        <MainDashboard>
            <div id="user">
                <div className="title">
                    User
                </div>
                <br />

                <DataTable
                    columns={ columns }
                    data={ data }
                    isSelect={ true }
                />
            </div>
        </MainDashboard>
    )
}

export default User