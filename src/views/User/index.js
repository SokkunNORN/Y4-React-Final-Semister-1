
import React, { useState, useEffect } from 'react'

import MainDashboard from '../../layouts/MainDashboard'
import DataTable from '../../components/table'
import { getUsers } from '../../api/user'

const columns = [
    { name: 'Full Name', selector: 'fullName', sortable: true, },
    { name: 'Gender', selector: 'gender', sortable: true, },
    { name: 'Age', selector: 'age', sortable: true, rigth: true },
    { name: 'Province', selector: 'province', sortable: true, },
    { name: 'Phone', selector: 'phone', sortable: true, },
    { name: 'Action' }
];

function createUser () {
    console.log('Create user function is working...')
}

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
                    isCreate
                    actionButtons={['edit', 'delete']}
                />
            </div>
        </MainDashboard>
    )
}

export default User