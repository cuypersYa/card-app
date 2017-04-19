export class User {
    email: string='';
    password: string='';
    loggedin: boolean = false;
    constructor(
         email: string,
         password: string,
         loggedin: boolean
    ){
        this.email=email;
        this.password=password;
        this.loggedin=loggedin;
        
    }
}
