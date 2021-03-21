
import React, { useState, useEffect } from 'react'

import MainDashboard from '../../layouts/MainDashboard'
import DataTable from '../../components/table'
import { getUsers, writeUser, updateUser } from '../../api/user'
import { showDetailDialog } from '../../components/showDetailDialog'
import FormCreate from './Form/FormCreate'
import FormUpdate from './Form/FormUpdate'

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

function deleteUser (id) {
    console.log('Delete with id: ', id)
}

function User () {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isShowDialog, setIsShowDialog] = useState(false)
    const [isShowUpdateDialog, setIsShowUpdateDialog] = useState(false)
    const [dataForUpdate, setDataForUpdate] = useState([])

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

    function openDialogUpdateUser (data) {
        setIsShowUpdateDialog(true)
        setDataForUpdate(data)
    }

    async function createUser(user) {
        await writeUser(user)

        fetchUsers()
    }

    async function editUser (user) {
        await updateUser(user)

        fetchUsers()
    }

    function onCloseDialog () {
        setIsShowDialog(false)
    }

    function onCloseUpdateDialog () {
        setIsShowUpdateDialog(false)
    }

    return (
        <MainDashboard>
            <div id="user">
                <div className="title">
                    User
                </div>
                <br />

                <FormCreate 
                    isOpen={ isShowDialog }
                    onClose={ onCloseDialog }
                    onSubmit={(value) => createUser(value) }
                />

                <FormUpdate
                    value = { dataForUpdate }
                    isOpen={ isShowUpdateDialog }
                    onClose={ onCloseUpdateDialog }
                    onSubmit={(value) => editUser(value) }
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
                    editFunction={value => openDialogUpdateUser(value)}
                    deleteFunction={value => deleteUser(value)}
                    showDetailFunction={value => showDetailUser(value)}
                />
            </div>
        </MainDashboard>
    )
}

export default User