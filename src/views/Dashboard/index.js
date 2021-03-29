import React, { useState, useEffect } from 'react'

import MainDashboard from '../../layouts/MainDashboard'
import DataTable from '../../components/table'
import { getUsers } from '../../api/item'
import { showDetailDialog } from '../../components/showDetailDialog'
import FormCreate from './Form/FormCreate'
import FormUpdate from './Form/FormUpdate'
import FormDelete from './Form/FormDelete'

const columns = [
    { name: 'Name', selector: 'fullName', sortable: true, link: true},
    { name: 'Item Price', selector: 'age', sortable: true },
    { name: 'From', selector: 'gender', sortable: true, rigth: true },
    { name: 'To', selector: 'province', sortable: true, },
    { name: 'Sender Phone', selector: 'phone', sortable: true, },
    { name: 'Receiver Phone', selector: 'createdAt', sortable: true, },
    { name: 'Status', selector: 'username', sortable: true, },
    { name: 'Action' }
];

function showDetailUser (value) {
    const data = [
        { label: 'Name', text: value.fullName },
        { label: 'Item Price', text: value.age },
        { label: 'Deliver Price', text: value.age },
        { label: 'From', text: value.gender },
        { label: 'To', text: value.phone },
        { label: 'Sender Phone', text: value.email },
        { label: 'Reciever Phone', text: value.province },
        { label: 'Status', text: value.username },
        { label: 'Created At', text: value.createdAt }
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

    function onCloseUpdateDialog () {
        setIsShowDialogUpdate(false)
    }

    return (
        <MainDashboard>
            <div id="user">
                <div className="title">
                    Item Send Lists
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