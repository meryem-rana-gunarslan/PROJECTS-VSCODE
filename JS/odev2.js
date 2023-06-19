//Arrays 17
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


