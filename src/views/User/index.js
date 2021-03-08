
import React, { useState, useEffect } from 'react'

import MainDashboard from '../../layouts/MainDashboard'
import DataTable from '../../components/table'
import { getUsers } from '../../api/user'

function IconsActionColumn () {
    return (
        <>
            <a href='#' className="btn btn-sm">
                <i className="material-icons text-primary">mode</i>
            </a>

            <a href='#' className="btn btn-sm">
                <i className="material-icons text-danger">delete</i>
            </a>
        </>
    )
}

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
    },
    {
        name: 'Action',
        center: true,
        cell: () => <IconsActionColumn />
    }
];

function User () {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, []);

    const fetchUsers = async () => {
        setIsLoading(true)
        const data = await getUsers(null)

        setUsers(data)
        setIsLoading(false)
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
                    isLoading={isLoading}
                    isSearch={ true }
                />
            </div>
        </MainDashboard>
    )
}

export default User