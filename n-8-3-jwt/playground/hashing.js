const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

//create hash and return token
var token = jwt.sign(data, '123abc');
console.log(token);

//make sure data was not manipulated
var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };
// var token = {
//   data,
//   somesecret is a algorithm only on server. To make sure it generate unique hash
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
//// Hacker doesn't know secret algorithm. They can change data but they don't know
//// secret algorithm
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
