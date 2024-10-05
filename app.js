class BaseClass {
    constructor(name) {
        this.name = name;
    }
    changeName(newName) {
        this.name = newName;
    }
}

class Man extends BaseClass {}
class  Women extends BaseClass {}


const man1 = new Man('Ehmed');
const women2 = new Women('Gülnarə');

man1.changeName('Əhməd');
women2.changeName('Sema');

console.log(women2.name); 
console.log(man1.name); 
