
import fire from '../config/fire'
import { handleErrorMassage } from '../mixins/handleMessage'
import { Item } from '../class/item'
import { dateFormatterLocalTime } from '../mixins/dateTime'

const docRef = fire.firestore().collection("/item-send-list");

export async function getItems(value) {
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

export async function selectItem(id) {
    let item = {}

    await docRef.doc(id)
    .get().then(doc => {
        item = new Item(
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
    })
    .catch((error) => {
        handleErrorMassage("Error getting documents: ", error)
    });
    return item
}

export async function writeItem(item) {
    await docRef.add(item)
    .then(() => {
        return true
    })
    .catch((error) => {
        handleErrorMassage("Error writing document: ", error)
        return false
    });
}

export async function removeItem(id) {
    await docRef.doc(id).delete().then(() => {
        return true
    }).catch((error) => {
        handleErrorMassage("Error removing document: ", error)
        return false
    });
}

export async function modifyItem(id, item) {
    await docRef.doc(id).update(item)
    .then(() => {
        return true
    })
    .catch((error) => {
        handleErrorMassage("Error updating document: ", error)
        return false
    });
}