
import Modal from 'react-bootstrap4-modal'
import { removeItem } from '../../../api/item'

function FormDelete ({
    isOpen = true,
    item = {},
    onClose = () => {},
    onRefresh = () => {}
}) {

    async function onDelete() {
        await removeItem(item.id)
        onClose()
        onRefresh()
    }

    return (
        <div id="item-form-delete">
            <Modal visible={ isOpen }>
                <div className="modal-body">
                    <h5 className="modal-title">Conformation</h5>
                    <small>Are you sure you want to delete this item?</small>
                    <br />
                    <br />
                    
                    <div className='row'>
                        <div className='col'>Name</div>
                        <div className='col text-right'>{ item.name }</div>
                    </div>

                    <br />
                    <br />
                    <button type="button" className="btn btn-outline-danger" onClick={() => onClose()}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-primary float-right" onClick={() => onDelete()}>
                        Conformation
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default FormDelete