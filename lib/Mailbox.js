/**
 * Created by akaneri on 9/21/16.
 */

function Mailbox() {
    this.mailbox = [];
}

Mailbox.prototype.add = function (message) {
    this.mailbox.push(message);
};

Mailbox.prototype.get = function () {
    return this.mailbox.shift();
};

Mailbox.prototype.isEmpty = function () {
    return this.mailbox.length == 0;
};

module.exports = {
    Mailbox: Mailbox
};