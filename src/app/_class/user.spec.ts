import {User} from './user';

describe('User class', () => {
  it('should create an User', () => {
    const newUser=new User("test@test.be","pass",true);
    expect(newUser.email).toEqual("test@test.be");
    expect(newUser.password).toEqual("pass");
    expect(newUser.loggedin).toEqual(true);
  });
});
