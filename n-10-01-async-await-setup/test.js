// const users = [{
//   id: 1,
//   name: 'Andrew',
//   schoolId: 101
// }, {
//   id: 2,
//   name: 'Jessica',
//   schoolId: 999
// }];

// const grades = [{
//   id: 1,
//   schoolId: 101,
//   grade: 86
// }, {
//   id: 2,
//   schoolId: 999,
//   grade: 100
// }, {
//   id: 3,
//   schoolId: 101,
//   grade: 80
// }];

// const getUser = (id) => {
//   return new Promise((resolve, reject) => {
//     const user = users.find((user) => user.id === id);

//     if (user) {
//       resolve(user);
//     } else {
//       reject(`Unable to find user with id of ${id}.`);
//     }
//   });
// };

// const getGrades = (schoolId) => {
//   return new Promise((resolve, reject) => {
//     resolve(grades.filter((grade) => grade.schoolId === schoolId));
//   });
// };

// // Andrew has a 83% in the class
// const getStatus = (userId) => {
//   let user;
//   return getUser(userId).then((tempUser) => {
//     //We want to use user value here. This is a bad walkaround
//     user = tempUser;
//     return getGrades(user.schoolId);
//   }).then((grades) => {
//     //We want to use user in this block
//     let average = 0;

//     if (grades.length > 0) {
//       average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
//     }

//     return `${user.name} has a ${average}% in the class.`;
//   });
// };

// getStatus(2).then((status) => {
//   console.log(status);
// }).catch((e) => {
//   console.log(e);
// });


// const a = 'sdfsdafsda';
// const b = '-54345553';

// console.log('a is a number? ', typeof a === 'number');
// console.log('b is a number? ', typeof b === 'number');

// const a1 = Number.parseInt(a);
// const b1 = Number.parseInt(b);

// console.log('a1 is a number? ', typeof a1 === 'number');
// console.log('b1 is a number? ', typeof b1 === 'number');

// if( a1 > 0){
// 	console.log('a1 > 0');
// }
// if( a1 < 0){
// 	console.log('a1 < 0');
// }

// if( b1 > 0){
// 	console.log('b1 > 0');
// }

// if( b1 < 0){
// 	console.log('b1 < 0');
// }

const a = [];

// const isEmpty = isEmpty(a);

console.log('a = [] ?', a.length === 1);