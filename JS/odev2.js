//Arrays video
// Arrays
let names = ['çinar', 'sena', 'ada', 'yigit'];
let years = [2017, 1999, 2012, 2010];
let mix = ['sadik',
, 'turan', 1983, null, undefined,
['sinema', 'kitap']];

// //get array item
// console.log(names[3])
// console.log(names[0])

// //set array item
// names[5]='emel';
// names[6]='irem';

// //add item
// years.push(1986);
// years.unshift(1986);

// //remove item
// years.pop();
// years.shift();

// //indexOf
// let index = names.indexOf('ada');
// console.log('index: ' + index);

// //reverse
// names.reverse();

// //sort
// years.sort();

// //concat
// let val = years.concat(names);
// console.log(val);

//splice
// names.splice(2,0,'seda');

//find

//filter

function over18(year){
    let age =  2018 - year;
    return age >= 18;


}
console.log(over18(1990));

let val = years.find(over18);
console.log(val);



console.log (names);
console.log (names.length);
console.log(typeof names);

// console.log (years);
// console.log(mix);

//150
someOddNumbers = [1, 3, 5, 7, 9, "Onbir", "Onüç"];
someOddNumbers[1] = "Üç";
someOddNumbers[5] = 11;
console.log(someOddNumbers);

//158
teamJuniors = ["Ali", "Ayşe", "Ahmet", "Aslı"]
teamSeniors = ["Mehmet", "Zeynep", "Burak", "Ece"]
teamJuniors.pop("Ahmet")
teamJuniors.concat("Deniz")

teamSeniors.pop("Burak")
teamSeniors.concat("Gizem")
theTeam = teamJuniors + teamSeniors;

console.log(theTeam)

//173 

 
for (let i = -5; i < 5; i++) {
    console.log(i);


    
}
for(let i = 1; i < 7;i++){
    console.log(7);
}


//178 
for (let i =+ 2; i < 2 ; i++){
    console.log(i);
;}



