// question-1
class book{
    title;
    author;
    isbn;
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
    checkout(){
        console.log(this.title,"has been checked");
    }
    returnbook(){
        console.log(this.title, "has been returned");
    }
    updatetitle(newtitle){
        this.title=newtitle;
        console.log(this.title,"new title applied")
    }
}
var b1=new book("twostates","chethan","200");
console.log(b1);
b1.checkout();
b1.returnbook();
b1.updatetitle("haryporters")
console.log(b1);

// question-2
class product{
    name;
    price;
    category;
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    applyDiscount(amount){
        console.log(this.price,"discount applied")
    }
    AfterDiscount(){
        console.log(this.price,"afterdiscount")
    }
}
var p1=new product("fogg","200","perfume");
p1.applyDiscount(50);
p1.AfterDiscount(150);
console.log(p1);

// question-3
class account{
    accountholdername;
    accountnumber;
    balance;
    constructor(accountholdername,accountnumber,balance){
        this.accountholdername=accountholdername;
        this.accountnumber=accountnumber;
        this.balance=balance;
    }
    deposite(amount){
        console.log(this.balance,"amount is deposited")
    }
    withdraw(amount){
        console.log(this.balance,"amount is withdrawed")
    }
    getbalance(){
        console.log(this.balance,"checked current balance")
    }
}
var rbi=new account("sreya","xxxxx1234","20000");
rbi.deposite(10000);
rbi.withdraw(5000);
rbi.getbalance();
console.log(rbi);

// question-4
class vehicle{
    model;
    licenseplate;
    mileage;
    constructor(model,licenseplate,mileage){
        this.model=model;
        this.licenseplate=licenseplate;
        this.mileage=mileage;
    }
    drive(miles){
        console.log(this.mileage,"increase the mileage");
    }
    getmileage(){
        console.log(this.mileage,"this is the current mileage");
    }
}
var bike=new vehicle("pulser","123123","40");
bike.drive(10);
bike.getmileage();
console.log(bike);

// question-5
class student{
    name;
    grade;
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    setgrade(newgrad){
        console.log(this.grade,"grades are updated")
    }
    getgrade(){
        console.log(this.grade,"these are students current grades")
    }
}
var s1=new student("sreya","95");
s1.setgrade(95);
s1.getgrade();
console.log(s1);

var s2=new student("nikhitha","97");
s2.setgrade(97);
s2.getgrade();
console.log(s2);
