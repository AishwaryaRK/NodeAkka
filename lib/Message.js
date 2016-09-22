/**
 * Created by akaneri on 9/20/16.
 */

function Message(sender, receiver, message) {
    this.sender = sender;
    this.receiver = receiver;
    this.message = message;
}

module.exports = {
    Message: Message
};