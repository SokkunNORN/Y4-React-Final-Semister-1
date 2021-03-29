
import React, { useState } from 'react'
import Modal from 'react-bootstrap4-modal'
import { selectItem, modifyItem } from '../../../api/item'

var previousStatusDialog = false

function FormUpdate ({
    isOpen = false,
    id = null,
    onRefresh = () => {},
    onClose = () => {}
}) {
    const provinces = [
        'Phnom Penh',
        'Banteay Meanchey',
        'Battambang',
        'Kampong Cham',
        'Kampong Chhnang',
        'Kampong Speu',
        'Kampot',
        'Kandal',
        'Kep',
        'Koh Kong',
        'Kratie',
        'Mondulkiri',
        'Oddor Meanchey',
        'Pailin',
        'Prey Veng',
        'Pursat',
        'Rattanakiri',
        'Siem Reap',
        'Sihanouk ville',
        'Stung Treng',
        'Svay Rieng',
        'Takeo',
        'Kampong Thom',
        'Preah Vihear',
        'Tbong Khmum'
    ]

    const statuses = ['Sending', 'Received']

    const [name, setName] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [senderPhone, setSenderPhone] = useState('')
    const [receiverPhone, setReceiverPhone] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const [deliverPrice, setdeliverPrice] = useState('')
    const [itemStatus, setItemStatus] = useState('')

    const fetchItem = async id => {
        const item = await selectItem(id)

        setName(item.name)
        setFrom(item.from)
        setTo(item.to)
        setSenderPhone(item.senderPhone)
        setReceiverPhone(item.receiverPhone)
        setItemPrice(item.itemPrice)
        setdeliverPrice(item.deliverPrice)
        setItemStatus(item.status)
    }

    isOpen && previousStatusDialog != isOpen && fetchItem(id)
    
    previousStatusDialog = isOpen

    function onResetData () {
        onClose()

        setName('')
        setFrom('')
        setTo('')
        setSenderPhone('')
        setReceiverPhone('')
        setItemPrice('')
        setdeliverPrice('')
        setItemStatus('')
    }

    async function onUpdate () {
        const item = {
            'name': name,
            'from': from,
            'to': to,
            'senderPhone': senderPhone,
            'receiverPhone': receiverPhone,
            'itemPrice': itemPrice,
            'deliverPrice': deliverPrice,
            'status': itemStatus || '',
            'updatedAt': new Date()
        }

        await modifyItem(id, item)

        onRefresh()
        onResetData()
    }

    return (
        <div id="item-form-update">
            <Modal visible={ isOpen }>
                <div className="modal-body">
                    <h5 className="modal-title">Update Item</h5>
                    <br />

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" 
                            onChange={event => setName(event.target.value)} 
                            value={name}/>
                    </div>
                    <div className="form-group">
                        <select className="form-control" placeholder="From" 
                            onChange={event => setFrom(event.target.value)} 
                            value={from}>
                            <option>From...</option>
                            {
                                provinces.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control" placeholder="To" 
                            onChange={event => setTo(event.target.value)} 
                            value={to}>
                            <option>To...</option>
                            {
                                provinces.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Sender Phone" 
                            onChange={event => setSenderPhone(event.target.value)} 
                            value={senderPhone}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Receiver Phone" 
                            onChange={event => setReceiverPhone(event.target.value)} 
                            value={receiverPhone}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Item Price($)" 
                            onChange={event => setItemPrice(event.target.value)} 
                            value={itemPrice}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Deliver Price($)" 
                            onChange={event => setdeliverPrice(event.target.value)} 
                            value={deliverPrice}/>
                    </div>
                    <div className="form-group">
                        <select className="form-control" placeholder="To" 
                            onChange={event => setItemStatus(event.target.value)} 
                            value={itemStatus}>
                            <option>Status...</option>
                            {
                                statuses.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))
                            }
                        </select>
                    </div>

                    <br />
                    <button type="button" className="btn btn-outline-danger" onClick={() => onResetData()}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-primary float-right" onClick={() => onUpdate()}>
                        Update
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default FormUpdate