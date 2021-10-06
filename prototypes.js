function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.introduce = function () {
  return "My	name	is	" + this.name + "	and	I	am	" + this.age;
};

function myNew(Construct, name, age) {
    return new Construct(name, age)
}



const t = myNew(Person, 'John', 30)
console.log(t);
const t1 = new Person('John', 30)
console.log(t1);