module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
	//If test take more than 2 seconds mocha will assume it fail, so here i seconds
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

module.exports.square = (x) => x * x;

module.exports.asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback(x * x);
  }, 1000);
};

module.exports.setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
