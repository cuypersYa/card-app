import {User} from './user';

describe('User class', () => {
  it('should create an User', () => {
    let values= {
              name:'Yannick Cuypers',
              address: {
                  street:'Bund',
                  number:'29',
                  zipcode: '2180',
                  city:'Ekeren'
              },
              bio:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ',
              points:780
          }
  
    const newUser=new User("test@test.be","pass",values,true);
    expect(newUser.email).toEqual("test@test.be");
    expect(newUser.password).toEqual("pass");
    expect(newUser.values.address).toEqual({
                  street:'Bund',
                  number:'29',
                  zipcode: '2180',
                  city:'Ekeren'
              })
    expect(newUser.loggedin).toEqual(true);
  });
});
