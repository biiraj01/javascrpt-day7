class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Name :", this.name);
        console.log("Email :", this.email);
    }
}

let biraj = new User("Biraj","biraj2003pujari@gmail.com");