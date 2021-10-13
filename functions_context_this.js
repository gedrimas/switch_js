// calss replaced with function
function NamedOneFunction(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = `${this.firstName} ${this.lastName}`;

  return {
    firstName: this.firstName,
    lastName: this.lastName,

    set fullName(fullName) {
      const fullNameAsArray = fullName.split(" ");
      if (fullNameAsArray.length === 2) {
        const [firstName, lastName] = fullNameAsArray;
        this.firstName = firstName;
        this.lastName = lastName;
      }
    },

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const t = new NamedOneFunction("aaa", "bbb");
console.log("firstName", t.firstName);
console.log("lastName", t.lastName);
console.log("fullName", t.fullName);
t.fullName = "ooo ooo";
console.log("t", t.fullName);
console.log("firstName", t.firstName);
console.log("lastName", t.lastName);
console.log("fullName", t.fullName);
t.firstName = "zzz";
t.lastName = "xxx";
console.log("firstName", t.firstName);
console.log("lastName", t.lastName);
console.log("fullName", t.fullName);
