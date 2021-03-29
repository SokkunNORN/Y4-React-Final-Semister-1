
import Modal from 'react-bootstrap4-modal'
import { removeUser } from '../../../api/user'

function FormDelete ({
    isOpen = true,
    user = {},
    onClose = () => {},
    onRefresh = () => {}
}) {

    async function onDelete() {
        await removeUser(user.id)
        onClose()
        onRefresh()
    }

    return (
        <div id="user-form-delete">
            <Modal visible={ isOpen }>
                <div className="modal-body">
                    <h5 className="modal-title">Conformation</h5>
                    <small>Are you sure you want to delete this account?</small>
                    <br />
                    <br />
                    
                    <div className='row'>
                        <div className='col'>Full Name</div>
                        <div className='col text-right'>{ user.fullName }</div>
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