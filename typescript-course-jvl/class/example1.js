var User = /** @class */ (function () {
    function User(firstname, secondname, age) {
        this.firstName = firstname;
        this.secondName = secondname;
        this.age = age;
    }
    User.prototype.greetUser = function () {
        return "Hello ,Welcome ".concat(this.firstName, " ").concat(this.secondName, " ");
    };
    User.prototype.getUserAge = function () {
        return "Age = ".concat(this.age);
    };
    return User;
}());
var user1 = new User("Kalpana", "Devi", 73);
console.log(user1.greetUser());
console.log(user1.getUserAge());
