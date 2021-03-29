import { useState } from 'react'
import Modal from 'react-bootstrap4-modal'
import { writeUser } from '../../../api/user'
import { getRole, selectRole } from '../../../api/role'

var previousStatusDialog = false

function FormCreate ({
    isOpen = true,
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

    const [userRoles, setUserRoles] = useState([])
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [gender, setGender] = useState('Male')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [province, setProvince] = useState(provinces[0])
    const [role, setRole] = useState('')

    const fetchRole = async () => {
        const roles = await getRole()
        setRole(roles[0].id)
        setUserRoles(roles)
    }

    isOpen && previousStatusDialog != isOpen && fetchRole()
    previousStatusDialog = isOpen

    function onResetData () {
        onClose()

        setFullName('')
        setUsername('')
        setGender('')
        setAge('')
        setPhone('')
        setEmail('')
        setProvince('')
        setRole({})
    }

    async function onCreate () {
        const userRole = await selectRole(role)
        const user = {
            'age': age,
            'email': email,
            'fullName': fullName,
            'gender': gender,
            'phone': phone,
            'province': province,
            'username': username,
            'createdAt': new Date(),
            'updatedAt': new Date(),
            'role': {
                id: userRole.id,
                role: userRole.role,
                description: userRole.description
            }
        }

        await writeUser(user)
        onRefresh()
        onResetData()
    }

    return (
        <div id="user-form-create">
            <Modal visible={ isOpen }>
                <div className="modal-body">
                    <h5 className="modal-title">Create User</h5>
                    <br />

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Full Name" 
                            onChange={event => setFullName(event.target.value)} 
                            value={fullName}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" 
                            onChange={event => setUsername(event.target.value)} 
                            value={username}/>
                    </div>
                    <div className="form-group">
                        <select className="form-control" placeholder="Gender" 
                            onChange={event => setGender(event.target.value)} 
                            value={gender}>
                            <option value='Male'>Male</option>
                            <option value='Famale'>Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Age" 
                            onChange={event => setAge(event.target.value)} 
                            value={age}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone"
                            onChange={event => setPhone(event.target.value)} 
                            value={phone}/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" 
                            onChange={event => setEmail(event.target.value)} 
                            value={email}/>
                    </div>
                    <div className="form-group">
                        <select className="form-control" placeholder="Province" 
                            onChange={event => setProvince(event.target.value)} 
                            value={province}>
                            {
                                provinces.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <select className="form-control" placeholder="Role" 
                            onChange={event => setRole(event.target.value)} 
                            value={role}>
                            {
                                userRoles.map((item, index) => (
                                    <option value={item.id} key={index}>{item.role}</option>
                                ))
                            }
                        </select>
                    </div>

                    <br />
                    <button type="button" className="btn btn-outline-danger" onClick={() => onResetData()}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-primary float-right" onClick={() => onCreate()}>
                        Create
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default FormCreate