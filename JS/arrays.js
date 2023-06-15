const myFirstArray = ['my', 'first', 'array', 11, true];
console.log(myFirstArray[0]);


const EvenNumbers =[2,6,10];

console.log(EvenNumbers);

EvenNumbers[0] = 'Two';
EvenNumbers[1] = 'Six';
EvenNumbers[2] = 'Ten';

console.log(EvenNumbers);


//array.length
const data =['org','app', 'https'];
console.log(`The lenght of the array is ${data.length}.`);

//push()
const numbers =[1,2,3,4,5];
console.log(numbers);

numbers.push(6,7,8);
console.log(numbers);

//pop()

numbers.pop();
console.log(numbers);

//join()
const food = ['apple', 'bread', 'orange', 'tomato'];

console.log(food.join());
console.log(food.join(''));
console.log(food.join(' '));
console.log(food.join('-'));

//concat()

const positiveNum = [1,2,3]
const negativeNum = [-1,-2,-3]

const integers = positiveNum.concat(negativeNum);
console.log(integers);

//arrays and functions

const foods = (arr) =>{

}


//forEach()
var array = ['a', 'b', 'c'];

array.forEach(function(element) {
  console.log(element);
});

// ekran çıktısı: "a"
// ekran çıktısı: "b"
// ekran çıktısı: "c"

var array1 = ['a', 'b', 'c'];

array1.forEach(function(element, index) {
  console.log('index numarası: ' + index + ' | ' + index + ' index numaralı eleman: ' + element);
});

// ekran çıktısı: index numarası: 0 | 0 index numaralı eleman: a
// ekran çıktısı: index numarası: 1 | 0 index numaralı eleman: b
// ekran çıktısı: index numarası: 2 | 0 index numaralı eleman: c


//INCLUDES
var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// ekran çıktısı: true

console.log(pets.includes('at'));
// ekran çıktısı: false

//FILTER

const arrays = [1, 2, 3, 4, 5, 6];

// array dizisinde bulunan 3'ten büyük sayılar
const filtered = arrays.filter(num => num > 3);

console.log(filtered); // ekran çıktısı: [4, 5, 6]

console.log(arrays); // ekran çıktısı: [1, 2, 3, 4, 5, 6]


//MAP
const numbersPositive = [1, 2, 3, 4, 5, 6];

// her elemana yazdigimiz sayiyi ekliyoruz --> num + sayi
const oneAdded = numbersPositive.map(num => num + 9);

console.log(oneAdded); // ekran çıktısı: [2, 3, 4, 5, 6, 7]

console.log(numbersPositive); // ekran çıktısı: [1, 2, 3, 4, 5, 6]

const NumberS = [1, 2, 3, 4, 5, 6];

// her elemana bir ekliyoruz
const OneAddeD = NumberS.forEach(num => num + 1);

console.log(OneAddeD); // ekran çıktısı: undefined

console.log(NumberS); // ekran çıktısı: [1, 2, 3, 4, 5, 6]



//REDUCE
const arrs = [1, 2, 3, 4, 5];

const islemYapanMetod = (toplam, simdikiDeger) => toplam + simdikiDeger;
// 1 + 2 + 3 + 4 + 5

console.log(arrs.reduce(islemYapanMetod));
// ekran çıktısı: 15


const arraYY = [1, 2, 3, 4, 5];

const IslemYapanMetod = (toplam, simdikiDeger) => toplam+ simdikiDeger;
// 5 + 1 + 2 + 3 + 4

console.log(arraYY.reduce(IslemYapanMetod, 5));
// ekran çıktısı: 20


//SOME
// Dizi elemanlarımızdan en az bir tanesi 10'dan büyük mü ?
function buyukMu10(element, index, array) {
    return element > 10;
  }
  
  [2, 5, 8, 1, 4].some(buyukMu10);  // false
  [12, 5, 8, 1, 4].some(buyukMu10); // true


  //EVERY
  const arr = [1, 2, 3, 4, 5, 6];

  // tüm elemanlar 4'ten büyük mü?
  const dorttenBuyuk = arr.every(num => num > 4);
  console.log(dorttenBuyuk); // ekran çıktısı: false
  
  // tüm elemanlar 10'dan küçük mü?
  const ondanKucuk = arr.every(num => num < 10);
  console.log(ondanKucuk); // ekran çıktısı: true



  //SORT

  var months = ['March', 'Jan', 'Feb', 'Dec'];

  months.sort();
  console.log(months);
  // ekran çıktısı: Array ["Dec", "Feb", "Jan", "March"]
  
  var array1 = [1, 30, 4, 21];
  
  array1.sort();
  console.log(array1);
  // ekran çıktısı: Array [1, 21, 30, 4]

  // Küçükten büyüğe göre sıralamak için
var numara = [4, 2, 5, 1, 3];

numara.sort(function(a, b) {
  return a - b;
});

console.log(numara);
// [1, 2, 3, 4, 5]

// Büyükten büyüğe göre sıralamak için
var sayilar = [4, 2, 5, 1, 3];

sayilar.sort(function(a, b) {
  return b - a;
});

console.log(sayilar);
// [5, 4, 3, 2, 1]

//ARRAY FORM

let text = "birşey"

console.log(text); // ekran çıktısı: birşey
console.log(Array.from(text)); // ekran çıktısı:   ["b", "i", "r", "ş", "e", "y"]

const li = document.querySelectorAll('li');
const liArray = Array.from(document.querySelectorAll('li'));

// Dizi olup olmadıklarını kontrol edelim
console.log(Array.isArray(li)); // output: false
console.log(Array.isArray(liArray));  // output: true

//ARRAY OF

console.log(Array.of(1, 2, 3)); // [1, 2, 3]        
console.log(Array(1, 2, 3));    // [1, 2, 3]
console.log(Array.of(5)); // [5] 
console.log(Array(5)); // [ , , , , ]