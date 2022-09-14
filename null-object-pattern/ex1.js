class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    hasAccess() {
        return this.name === 'Puneet'
    }
}

// To avoid multiple if checks in all the code its better to use Null object if particular object is returned as NULL
class NullUser {
    constructor() {
        this.name = 'Guest User'
    }

    hasAccess() {
        return false
    }
}

const users = [new User(1, "Puneet"), new User(2, "Rahul")]

function getUser(id) {
    const user = users.find(user => user.id === id)

    if (!user) {
        return new NullUser()
    } 
    return user
}

function printUser(id) {
    const user = getUser(id)

    // Multiple if conditions will be there because getUser fucntion can return null
    console.log(user.name) // this will be undefined if we do not use Null object pattern or we need to explicity set som random name like guest user

    if (user.hasAccess()) {
        console.log("You can access the page");
    } else {
        console.log("You do not have access to view the page");
    }
}

printUser(1)
printUser(2)
printUser(3)