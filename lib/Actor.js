/**
 * Created by akaneri on 9/20/16.
 */

function Actor(address, receive, knownActors) {
    this.address = address;
    this.receive = receive;
    this.knownActors = knownActors;
}

module.exports = {
    Actor: Actor
};