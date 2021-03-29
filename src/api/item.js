
import fire from '../config/fire'
import { handleErrorMassage } from '../mixins/handleMessage'
import { Item } from '../class/item'
import { dateFormatterLocalTime } from '../mixins/dateTime'

const docRef = fire.firestore().collection("/item-send-list");

export async function getUsers(value) {
    var items = []

    await docRef
    .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const item = new Item(
                doc.id,
                doc.data().itemPrice,
                doc.data().deliverPrice,
                doc.data().from,
                doc.data().to,
                doc.data().senderPhone,
                doc.data().receiverPhone,
                doc.data().status,
                dateFormatterLocalTime(doc.data().createdAt),
                dateFormatterLocalTime(doc.data().updatedAt),
                doc.data().name
            )
            items.push(item)
        })
    })
    .catch((error) => {
        handleErrorMassage("Error getting documents: ", error)
    });

    return items
}

export async function selectUser(id) {
    let user = {}

    await docRef.doc(id)
    .get().then(doc => {
        user = new Item(
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
    })
    .catch((error) => {
        handleErrorMassage("Error getting documents: ", error)
    });
    return user
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

export async function removeUser(id) {
    await docRef.doc(id).delete().then(() => {
        return true
    }).catch((error) => {
        handleErrorMassage("Error removing document: ", error)
        return false
    });
}

export async function modifyUser(id, user) {
    await docRef.doc(id).update(user)
    .then(() => {
        return true
    })
    .catch((error) => {
        handleErrorMassage("Error updating document: ", error)
        return false
    });
}