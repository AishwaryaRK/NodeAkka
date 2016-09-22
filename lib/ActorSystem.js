/**
 * Created by akaneri on 9/21/16.
 */

var Mailbox = require("./Mailbox");
var Actor = require("./Actor");

function ActorSystem() {
    this.actors = {}
}

ActorSystem.prototype.actorOf = function ( receive, knownActors) {
    var address = generateActorAddress();
    this.actors[address] = {"actor": new Actor(address, receive, knownActors), "mailbox": new Mailbox()};
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

function generateActorAddress() {
    return Math.floor(Math.random() * Date.now() * 10000).toString(36);
}

module.exports = {
    Actor: Actor
};