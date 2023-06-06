function sayHi(){
    console.log('Hello World!!')
}

sayHi();


myFirstName = 'Meryem'
myLastName = 'Gunarslan'
function myName(){
    console.log("Tam adim " + myFirstName +" " +myLastName+".");
}

myName();


function showNum(){
    var result = 3 + 3;
    return 8 % 6;

}
console.log(showNum());
console.log(showNum() * 2 );


var myCity = function(){
    console.log(`My city is `)
}


var userName = "Guest User";

var logUserName = () => {
    userName = "John Wayne";
    console.log(userName);
}
console.log(userName);
logUserName();


