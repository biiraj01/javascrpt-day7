let DATA = "WEBSITE DATA";

class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data: " , DATA);
    }
}

class Admin extends User {
    constructor(name , email){
        super(name,email)

    }
    editData(name, email){
      DATA = "New Data";
    }
}

let biraj = new User("Biraj","biraj2003pujari@gmail.com");

let obj = new Admin("Umika", "umika@gmail.com");