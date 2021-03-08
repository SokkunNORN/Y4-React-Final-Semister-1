
import React, { useState, useEffect } from 'react'

import MainDashboard from '../../layouts/MainDashboard'
import DataTable from '../../components/table'
import { getUsers } from '../../api/user'

const columns = [
    {
      name: 'Full Name',
      selector: 'fullName',
      sortable: true,
    },
    {
      name: 'Gender',
      selector: 'gender',
      sortable: true,
    },
    {
      name: 'Age',
      selector: 'age',
      sortable: true,
      rigth: true
    },,
    {
      name: 'Province',
      selector: 'province',
      sortable: true,
    },,
    {
      name: 'Phone',
      selector: 'phone',
      sortable: true,
    }
];

function User () {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    }, []);

    const fetchUsers = async () => {
        const data = await getUsers()

        setUsers(data)
    }

    return (
        <MainDashboard>
            <div id="user">
                <div className="title">
                    User
                </div>
                <br />

                <DataTable
                    columns={ columns }
                    data={ users }
                    isSelect={ true }
                />
            </div>
        </MainDashboard>
    )
}

export default User