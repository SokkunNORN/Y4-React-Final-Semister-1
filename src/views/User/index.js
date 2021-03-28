
import React, { useState, useEffect } from 'react'

import MainDashboard from '../../layouts/MainDashboard'
import DataTable from '../../components/table'
import { getUsers } from '../../api/user'
import { showDetailDialog } from '../../components/showDetailDialog'
import FormCreate from './Form/FormCreate'
import FormUpdate from './Form/FormUpdate'
import FormDelete from './Form/FormDelete'

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

function User () {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isShowDialogCreate, setIsShowDialogCreate] = useState(false)
    const [isShowDialogUpdate, setIsShowDialogUpdate] = useState(false)
    const [isShowDialogDelete, setIsShowDialogDelete] = useState(false)

    useEffect(() => {
        fetchUsers()
    }, []);

    const fetchUsers = async () => {
        setIsLoading(true)
        const data = await getUsers(null)

        setUsers(data)
        setIsLoading(false)
    }

    function openDialogEditUser (user) {
        setUser(user)
        setIsShowDialogUpdate(true)
    }

    function openDialogDeleteUser(user) {
        setUser(user)
        setIsShowDialogDelete(true)
    }

    return (
        <MainDashboard>
            <div id="user">
                <div className="title">
                    User
                </div>
                <br />

                <FormCreate 
                    isOpen={ isShowDialogCreate }
                    onClose={ () => setIsShowDialogCreate(false) }
                    onRefresh={ () => fetchUsers() }
                />

                <FormUpdate
                    isOpen={ isShowDialogUpdate }
                    id={ user.id }
                    onRefresh={ () => fetchUsers() }
                    onClose={ () => setIsShowDialogUpdate(false) }
                />

                <FormDelete 
                    isOpen={ isShowDialogDelete }
                    user={ user }
                    onRefresh={ () => fetchUsers() }
                    onClose={ () => setIsShowDialogDelete(false) }
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
                    createFunction={() => setIsShowDialogCreate(true)}
                    editFunction={value => openDialogEditUser(value)}
                    deleteFunction={value => openDialogDeleteUser(value)}
                    showDetailFunction={value => showDetailUser(value)}
                />
            </div>
        </MainDashboard>
    )
}

export default User