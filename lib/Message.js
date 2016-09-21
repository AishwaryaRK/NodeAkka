/**
 * Created by akaneri on 9/20/16.
 */

function Message(sender, receiver, message) {
    this.senderAddress = sender.address;
    this.receiverAddress = receiver.address;
    this.message = message;
}

module.exports = {
    Message: Message
};