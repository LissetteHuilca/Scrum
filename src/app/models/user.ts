export class User {
    constructor(_id = '', name = '', lastname = '', email = '', username = '', password = ''){
        this._id = _id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    _id: string;
    name:string;
    lastname: string;
    email: string;
    username: string;
    password: string;
}
