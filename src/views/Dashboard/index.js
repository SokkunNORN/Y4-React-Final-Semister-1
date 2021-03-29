import React, { useState, useEffect } from 'react'

import MainDashboard from '../../layouts/MainDashboard'
import DataTable from '../../components/table'
import { getItems } from '../../api/item'
import { showDetailDialog } from '../../components/showDetailDialog'
import FormCreate from './Form/FormCreate'
import FormUpdate from './Form/FormUpdate'
import FormDelete from './Form/FormDelete'

const columns = [
    { name: 'Name', selector: 'name', sortable: true, link: true},
    { name: 'Deliver Price($)', selector: 'deliverPrice', sortable: true },
    { name: 'From', selector: 'from', sortable: true, rigth: true },
    { name: 'Sender Phone', selector: 'senderPhone', sortable: true, },
    { name: 'To', selector: 'to', sortable: true, },
    { name: 'Receiver Phone', selector: 'receiverPhone', sortable: true, },
    { name: 'Status', selector: 'status', sortable: true, },
    { name: 'Created At', selector: 'createdAt', sortable: true, },
    { name: 'Action' }
];

function showDetailItem (value) {
    const data = [
        { label: 'Name', text: value.name },
        { label: 'Item Price', text: value.itemPrice },
        { label: 'Deliver Price', text: value.deliverPrice },
        { label: 'From', text: value.from },
        { label: 'Sender Phone', text: value.senderPhone },
        { label: 'To', text: value.to },
        { label: 'Reciever Phone', text: value.receiverPhone },
        { label: 'Status', text: value.status },
        { label: 'Created At', text: value.createdAt },
        { label: 'Updated At', text: value.updatedAt }
    ]
    showDetailDialog('Item Detail', data)
}

function Item () {

    const [items, setItems] = useState([])
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isShowDialogCreate, setIsShowDialogCreate] = useState(false)
    const [isShowDialogUpdate, setIsShowDialogUpdate] = useState(false)
    const [isShowDialogDelete, setIsShowDialogDelete] = useState(false)

    useEffect(() => {
        fetchItems()
    }, []);

    const fetchItems = async () => {
        setIsLoading(true)
        const data = await getItems(null)

        setItems(data)
        setIsLoading(false)
    }

    function openDialogEditItem (item) {
        setItem(item)
        setIsShowDialogUpdate(true)
    }

    function openDialogDeleteItem(item) {
        setItem(item)
        setIsShowDialogDelete(true)
    }

    return (
        <MainDashboard>
            <div id="item">
                <div className="title">
                    Item Send Lists
                </div>
                <br />

                <FormCreate 
                    isOpen={ isShowDialogCreate }
                    onClose={ () => setIsShowDialogCreate(false) }
                    onRefresh={ () => fetchItems() }
                />

                <FormUpdate
                    isOpen={ isShowDialogUpdate }
                    id={ item.id }
                    onRefresh={ () => fetchItems() }
                    onClose={ () => setIsShowDialogUpdate(false) }
                />

                <FormDelete 
                    isOpen={ isShowDialogDelete }
                    item={ item }
                    onRefresh={ () => fetchItems() }
                    onClose={ () => setIsShowDialogDelete(false) }
                />

                <DataTable
                    columns={columns}
                    data={items}
                    isLoading={isLoading}
                    isSelect
                    isSearch
                    isCreate
                    defaultSortField='createdAt'
                    actionButtons={['edit', 'delete']}
                    createFunction={() => setIsShowDialogCreate(true)}
                    editFunction={value => openDialogEditItem(value)}
                    deleteFunction={value => openDialogDeleteItem(value)}
                    showDetailFunction={value => showDetailItem(value)}
                />
            </div>
        </MainDashboard>
    )
}

export default Item