// Spy is inside expect
// Use for test function that is come from another function
const expect = require('expect');
const rewire = require('rewire');

//Use rewire instend of require app
var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  //First one you want to replace, the second argument - replace with
  //So the second argument stand for the one we define  as var
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });

  it('should call saveUser with user object', () => {
    var email = 'andrew@example.com';
    var password = '123abc';

    app.handleSignup(email, password);
    //Now saveUser db is a spy in the app, not in the db
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
