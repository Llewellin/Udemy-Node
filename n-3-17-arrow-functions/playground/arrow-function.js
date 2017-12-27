var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Andrew',
  //This will show global arguments and global this
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  //Better solution
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

// user.sayHi(1, 2, 3);
user.sayHiAlt('a','b','c');