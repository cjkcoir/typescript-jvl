class User {
  firstName: string;
  secondName: string;
  age: number;

  constructor(firstname: string, secondname: string, age: number) {
    this.firstName = firstname;
    this.secondName = secondname;
    this.age = age;
  }

  greetUser() {
    return `Hello ,Welcome ${this.firstName} ${this.secondName} `;
  }

  getUserAge() {
    return `Age = ${this.age}`;
  }
}

let user1 = new User("Kalpana", "Devi", 73);

console.log(user1.greetUser());
console.log(user1.getUserAge());
console.log("Author:Chellakarthikeyan");

