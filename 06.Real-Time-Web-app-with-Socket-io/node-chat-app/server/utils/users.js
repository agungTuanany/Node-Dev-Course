// e.g

// [{
    // id: '/#psdajo32133ff',
    // name: 'Jono',
    // romm: "The Office Fans"
// }]

// addUser(id, name, romm)
// removeUser(id)
// getuser(id) -> method
// getUserList(room) -> -method

// e.g fro class

class Person {
    constructor (name, age) {
        // console.log(name, age);
        this.name = name;
        this.age =age;
    }
    // Method can be any function they could take arguments or they don't take argument to define
    getUserDescription () {
        // return 'Jono is 25 year(s) old';
        return `${this.name} is ${this.age} years(s) old`;
    }
}
//basic idea to initialize a class
var me = new Person('Jono', 25);
console.log('this.name', me.name);
console.log('this.age', me.age);

var me2 = new Person('Ucha', 27);
var description = me2.getUserDescription();
// return value
console.log(description);