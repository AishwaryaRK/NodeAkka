/**
 * Created by akaneri on 9/21/16.
 */

var Mailbox = require("./Mailbox");

function ActorSystem() {
    this.actors = {}
}

ActorSystem.prototype.actorOf = function (actorType, actorsList) {
    var address = generateActorAddress();
    this.actors[address] = {"actor": new actorType(address,actorsList), "mailbox": new Mailbox()};
};

ActorSystem.prototype.remove = function (actor) {
    delete this.actors[actor.address];
};

ActorSystem.prototype.getActor = function (address) {
    return this.actors[address].actor;
};

ActorSystem.prototype.has = function (actor) {
    return this.actors[actor.address] != undefined;
};

ActorSystem.prototype.getActorMailbox = function (address) {
    return this.actors[actor.address].mailbox;
};

ActorSystem.prototype.sendMessage = function (message) {
    this.actors[message.receiverAddress].mailbox.add(message);
    // todo on message event, emit event - event loop
};

module.exports = {
    Actor: Actor
};