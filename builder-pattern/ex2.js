class User{
    constructor(name) { // name is necesaary for a user that why it is in User class
        this.name = name
    }
}

class Address {
    constructor(zipCode, location) {
        this.zipCode = zipCode;
        this.location = location
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name);
    }

    setAge(age) {
        this.user.age = age
        return this
    }   

    setPhone(phone) {
        this.user.phone = phone
        return this
    };

    setAddress(zipCode, location) {
        this.user.address = new Address(zipCode, location)
        return this
    }

    build() {
        return this.user
    }
}

const builder = new UserBuilder('Puneet')

console.log(builder);
console.log(builder.setAge(30)); // builder object
console.log(builder.setAge(30).build()); // user object

// below is just testing that it is throwing error or not
console.log(new UserBuilder().setAge());