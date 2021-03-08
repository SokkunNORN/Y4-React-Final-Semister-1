
import fire from '../config/fire'
import { handleErrorMassage } from '../mixins/handleMessage'
import { User } from '../class/user'

const docRef = fire.firestore().collection("user");

export async function getUsers(value) {
    var users = []

    await docRef
    .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const user = new User(
                doc.id,
                doc.data().age,
                doc.data().email,
                doc.data().fullName,
                doc.data().gender,
                doc.data().phone,
                doc.data().province,
                doc.data().username,
                doc.data().createdAt.toDate().toString(),
                doc.data().updatedAt.toDate().toString()
            )
            users.push(user)
        })
    })
    .catch((error) => {
        handleErrorMassage("Error getting documents: ", error)
    });

    return users
}