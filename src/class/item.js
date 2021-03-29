export class Item {
    constructor (id, itemPrice, deliverPrice, from, to, senderPhone, receiverPhone, status, createdAt, updatedAt, name) {
        this.id = id;
        this.itemPrice = itemPrice;
        this.deliverPrice = deliverPrice;
        this.from = from;
        this.to = to;
        this.senderPhone = senderPhone;
        this.receiverPhone = receiverPhone;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.name = name;
    }
}