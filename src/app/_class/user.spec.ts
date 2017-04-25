import {User} from './user';

describe('User class', () => {
  it('should create an User', () => {
    let values= {
              name:'Yannick Cuypers',
              address: {
                  street:'street',
                  number:'29',
                  zipcode: '2000',
                  city:'city'
              },
              bio:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ',
              points:780
          }
  
    const newUser=new User("test@test.be","pass",values,true);
    expect(newUser.email).toEqual("test@test.be");
    expect(newUser.password).toEqual("pass");
    expect(newUser.values.address).toEqual({
                  street:'street',
                  number:'29',
                  zipcode: '2000',
                  city:'city'
              })
    expect(newUser.loggedin).toEqual(true);
  });
});
