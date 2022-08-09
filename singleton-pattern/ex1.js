/* Singleton pattern: Singleton is a design pattern that ensures that a class 
has only one immutable instance. 
Said simply, the singleton pattern consists of an object that can't be copied or modified. */

// Object Literal implementation

const config = {
    start: function () {
        console.log("App Started!");
    },
    update: function () {
        console.log("App Updated!");
    },
};

config["port"] = 8000;

console.log(config);

Object.freeze(config);

// Update after the freeze will not work as we want it to have only one instance of the implementation
// that's why we have freezed it
config["port"] = 3000;
config["version"] = function () {
    console.log("1.2.3");
};

console.log(config);

// Class Implementation

class Config {
    constructor(port) {
        this.port = port;
    }

    start() {
        console.log("App started!");
    }

    update() {
        console.log("App Updated!");
    }
}

const appConfig = new Config(8000);
appConfig.env = "prod";
console.log(appConfig);

Object.freeze(appConfig);
appConfig.start();
appConfig.update();

appConfig.version = "1.2.1";
console.log(appConfig);
