# NodeAkka 
This is the Actor concurrency model implementation framework for Node.js.
Work under progress.

Inspired from Pyakka, Akka, drama

    Copyright (C) 2016  Aishwarya Kaneri

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
##Usage

```javascript
var NodeAkka = require("NodeAkka");
var ActorSystem = NodeAkka("ActorSystem");
```
Create Actor

```javascript
var mathActor = ActorSystem.actorOf({
    "add": function (a, b, callback) {
        console.log(a + b);
        callback();
    },
    "subtract": function (a, b, callback) {
        console.log(a - b);
        callback();
    }
}, []);
```

Create Actor having references to other actors

```javascript
var accountantActor = ActorSystem.actorOf({
    "manageAccounts": function (callback) {
        console.log("Accountant actor");
        callback();
    }
}, [mathActor]);
```

Send Message to another actor

```javascript
ActorSystem.sendMessage(new Message(accountantActor, mathActor, {"function": "add", "args": [a, b]}));
```

##License
GNU GPL
