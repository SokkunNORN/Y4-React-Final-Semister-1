
import React, { useState, useEffect } from 'react'

import MainDashboard from '../../layouts/MainDashboard'
import DataTable from '../../components/table'
import { getUsers, writeUser } from '../../api/user'
import { showDetailDialog } from '../../components/showDetailDialog'
import UserForm from './Form/Form'

const columns = [
    { name: 'Full Name', selector: 'fullName', sortable: true, link: true},
    { name: 'Gender', selector: 'gender', sortable: true },
    { name: 'Age', selector: 'age', sortable: true, rigth: true },
    { name: 'Province', selector: 'province', sortable: true, },
    { name: 'Phone', selector: 'phone', sortable: true, },
    { name: 'Created At', selector: 'createdAt', sortable: true, },
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


function editUser (id) {
    console.log('Edit with id: ', id)
}

function deleteUser (id) {
    console.log('Delete with id: ', id)
}

function User () {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isShowDialog, setIsShowDialog] = useState(false)

    useEffect(() => {
        fetchUsers()
    }, []);

    const fetchUsers = async () => {
        setIsLoading(true)
        const data = await getUsers(null)

        setUsers(data)
        setIsLoading(false)
    }

    function openDialogCreatUser () {
        setIsShowDialog(true)
    }

    async function createUser(user) {
        await writeUser(user)

        fetchUsers()
    }

    function onCloseDialog () {
        setIsShowDialog(false)
    }

    return (
        <MainDashboard>
            <div id="user">
                <div className="title">
                    User
                </div>
                <br />

                <UserForm 
                    isOpen={ isShowDialog }
                    onClose={ onCloseDialog }
                    onSubmit={(value) => createUser(value) }
                />

                <DataTable
                    columns={columns}
                    data={users}
                    isLoading={isLoading}
                    isSelect
                    isSearch
                    isCreate
                    defaultSortField='createdAt'
                    actionButtons={['edit', 'delete']}
                    createFunction={() => openDialogCreatUser()}
                    editFunction={value => editUser(value)}
                    deleteFunction={value => deleteUser(value)}
                    showDetailFunction={value => showDetailUser(value)}
                />
            </div>
        </MainDashboard>
    )
}

export default User