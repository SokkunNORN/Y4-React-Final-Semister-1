
import React, { useState, useEffect } from 'react'

import MainDashboard from '../../layouts/MainDashboard'
import DataTable from '../../components/table'
import { getUsers } from '../../api/user'

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

const columns = [
    { name: 'Full Name', selector: 'fullName', sortable: true, },
    { name: 'Gender', selector: 'gender', sortable: true, },
    { name: 'Age', selector: 'age', sortable: true, rigth: true },
    { name: 'Province', selector: 'province', sortable: true, },
    { name: 'Phone', selector: 'phone', sortable: true, },
    {
        name: 'Action',
        center: true,
        cell: (row) => <IconsActionColumn value={ row } />,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
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
                    isLoading={isLoading}
                    isSelect
                    isSearch
                    isBtnCreate
                    actionButtons={['edit']}
                />
            </div>
        </MainDashboard>
    )
}

export default User