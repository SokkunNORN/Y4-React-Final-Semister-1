
import fire from '../config/fire'
import { handleErrorMassage } from '../mixins/handleMessage'
import { User } from '../class/user'
import { dateFormatterLocalTime } from '../mixins/dateTime'

const docRef = fire.firestore().collection("/user");

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
                dateFormatterLocalTime(doc.data().createdAt),
                dateFormatterLocalTime(doc.data().updatedAt)
            )
            users.push(user)
        })
    })
    .catch((error) => {
        handleErrorMassage("Error getting documents: ", error)
    });

    return users
}

export async function writeUser(user) {
    await docRef.add(user)
    .then(() => {
        return true
    })
    .catch((error) => {
        handleErrorMassage("Error writing document: ", error)
        return false
    });
}