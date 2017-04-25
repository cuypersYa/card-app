export class User {
    email: string='';
    password: string='';
    loggedin: boolean = false;
    values= {
        name:'',
        address: {
            street:'',
            number:'',
            zipcode: '',
            city:''
        },
        bio:'',
        points:0
    };
  
    constructor(
         email: string,
         password: string,
         values: any,
         loggedin: boolean
         
    ){
        this.email=email;
        this.password=password;
        this.loggedin=loggedin;
        this.values = values;
        
    }
}
