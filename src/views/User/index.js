
import React, { useState, useEffect } from 'react'

import MainDashboard from '../../layouts/MainDashboard'
import DataTable from '../../components/table'
import { getUsers } from '../../api/user'
import { showDetailDialog } from '../../components/showDetailDialog'

const columns = [
    { name: 'Full Name', selector: 'fullName', sortable: true, link: true},
    { name: 'Gender', selector: 'gender', sortable: true },
    { name: 'Age', selector: 'age', sortable: true, rigth: true },
    { name: 'Province', selector: 'province', sortable: true, },
    { name: 'Phone', selector: 'phone', sortable: true, },
    { name: 'Action' }
];

function showDetailUser (value) {
    const data = [
        { label: 'Full Name', text: value.fullName },
        { label: 'Age', text: value.age },
        { label: 'Gender', text: value.gender },
        { label: 'Phone', text: value.phone },
        { label: 'Email', text: value.email },
        { label: 'Province', text: value.province },
        { label: 'Username', text: value.username },
        { label: 'Created At', text: value.createdAt },
        { label: 'Updated At', text: value.updatedAt }
    ]
    showDetailDialog('User Detail', data)
}

function createUser () {
    console.log('Create user function is working...')
}

function editUser (id) {
    console.log('Edit with id: ', id)
}

function deleteUser (id) {
    console.log('Delete with id: ', id)
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
                    columns={columns}
                    data={users}
                    isLoading={isLoading}
                    isSelect
                    isSearch
                    isCreate
                    actionButtons={['edit', 'delete']}
                    createFunction={() => createUser()}
                    editFunction={value => editUser(value)}
                    deleteFunction={value => deleteUser(value)}
                    showDetailFunction={value => showDetailUser(value)}
                />
            </div>
        </MainDashboard>
    )
}

export default User