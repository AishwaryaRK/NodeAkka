/**
 * Created by akaneri on 9/21/16.
 */

var Mailbox = require("./Mailbox");

function ActorSystem() {
    this.actors = {}
}

ActorSystem.prototype.add = function (actor) {
    this.actors[actor.address] = {"actor": actor, "mailbox": new Mailbox()};
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

module.exports = {
    Actor: Actor
};