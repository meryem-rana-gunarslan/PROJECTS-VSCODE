//odev 35

let birinciSayi = 2;
let ikinciSayi = 8;
 var sonuc = birinciSayi*ikinciSayi;
console.log(`Sonuc ${sonuc}dir.`);

//odev 57
let variable = 14;


if( variable > 0){
    console.log(`Variable positif sayidir.`)
}
else if(variable < 0){
    console.log(`Variable negatif sayidir.`)
}
else{
    console.log(`Variable sifira esittir.`)

}

// odev 71

let UserName = 'meryemG123';
let passWord = 'password12345';

if (UserName === 'meryemG123' && passWord === 'password12345'){
    console.log('You logged in succesfully!');
}
else{
    console.log('Your username or password is incorrect.');
}


//odev 84 (ERROR)
/*
var result = Math.floor(Math.random() * 5) + 1;

var userNumber = prompt('Enter a number from 1 to 5.');
if(userNumber < 1 || userNumber > 5){
    alert('You have entered an invalid number. Refresh the page and try again..');

}
else if(result == userNumber){
    alert('Congrats, you are correct..');

}
else{
    alert('Your answer is invalid, try again by refreshing the page.');
}
*/
//switch
var time = "Morning"
switch(time){
    case "Morning":
        console.log('Good ' + time);
        break;
    case "Afternoon":
        console.log('Good '+ time);
        break;
    case "Evening":
        console.log('Good '+ time);
        break;
    case "Night" :
        console.log('Good ' + time);
        break;
     default:
        break;      
            

}




//Function video 27

function yasHesapla(dogumYili){
    return 2018 - dogumYili;
}

let ageAda = yasHesapla(2012);
let ageYigit = yasHesapla(2010);
let ageCinar = yasHesapla(1950);

console.log(ageAda);
console.log(ageYigit);
console.log(ageCinar);


function EmekliligeKacYilKaldi(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;


    if(emeklilik>0){
        console.log(`${isim}, emekli olmana ${emeklilik} yil kaldi`);


    }
    else{
        console.log(`${isim}, zaten emekli oldun.`);


    }

}

EmekliligeKacYilKaldi(2012,'Ada');
EmekliligeKacYilKaldi(2010,'Yigit');
EmekliligeKacYilKaldi(1950,'Cinar');


//Function video 28
//declerations

//function sum(a,b){
 //   c = a + b;
//    return c;
//}
//console.log(sum(10,20));
//console.log(sum(789,938));
//console.log(sum(-45,354));

//expressions

const sum = function(a=0,b=0){
    //if(typeof a === 'undefined'){ a = 0;}
    //if(typeof a === 'undefined'){ b = 0; }

     
    var c = a+b;
    return c;
}

   /* function args(){
    console.log(arguments);

}
args(10,20,30);
*/

function sumAll(){
    var total = 0;
    for(let i = 0; i < arguments. length; i ++){
        total +=arguments[i];
    }
    return total;
}

console.log(sum(10,30));
console.log(sum(10,)); //NaN
console.log(sum(10,50,20,40));//No thrid variable so it only adds the first 2.
console.log(sumAll(10,20,30,40));


//Functions video 29

var bakiye = 2000
var adsoyad = 'john doe'

var hesapA = {
    ad : 'John Doe',
    hesapNo :'12345678',
    bakiye : 2000,
    ekHesap : 1000
}

var hesapB = {
    ad : 'Jane Do',
    hesapNo : '87654321',
    bakiye : 3000,
    ekhesap : 2000
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);
    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye - miktar;
        console.log('paranizi alabilirsiniz.');

    }
    else{
        var toplam = hesap.bakiye + hesap.ekHesap;

        if(toplam>=miktar){
            if(confirm('ek hesabinizi kullanmak istermisiniz')){
                console.log('paranizi alabilirsiniz.')
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekhesap = hesap.ekhesap - ekhesap;


            }
            else{
                console.log(`${hesap.hesapNo} nolu hesanizidan $${miktar}  bulunmaktadir.`);

            }


        } else{
            console.log('uzgunuz bakiye yetersiz');

        }
    }
}

paraCek(hesapA,2000);
paraCek(hesapB, 5000);
paraCek(hesapB,2000 );