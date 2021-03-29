import fire from '../config/fire'
import { handleErrorMassage } from '../mixins/handleMessage'
import { Role } from '../class/role'

const docRef = fire.firestore().collection("/user-role")

export async function getRole() {
    var roles = []

    await docRef
    .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const role = new Role(
                doc.id,
                doc.data().role,
                doc.data().description
            )
            roles.push(role)
        })
    })
    .catch((error) => {
        handleErrorMassage("Error getting documents: ", error)
    });

    return roles
}

export async function selectRole(id) {
    var role = {}

    await docRef.doc(id)
    .get().then((doc) => {
        role = new Role(
            doc.id,
            doc.data().role,
            doc.data().description
        )
    })
    .catch((error) => {
        handleErrorMassage("Error getting documents: ", error)
    });

    return role
}