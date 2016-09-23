/**
 * Created by akaneri on 9/20/16.
 */

function Actor(address, receive, knownActors) {
    this.address = address;
    this.receive = receive;
    this.knownActors = knownActors;
    this.isProcessingMessage = false;
}

Actor.prototype.processMessage = function (mailbox) {
    this.isProcessingMessage = true;
    var nextMessage = mailbox.get();
    nextMessage.message.args.push(function callback() {
        nextMessage = mailbox.get();
        if (nextMessage != undefined) {
            this.receive[nextMessage.message.function].apply(this, nextMessage.message.args);
        } else {
            this.isProcessingMessage = false;
            return;
        }
    });
    this.receive[nextMessage.message.function].apply(this, nextMessage.message.args);
};

module.exports = {
    Actor: Actor
};