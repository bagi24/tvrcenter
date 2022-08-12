/* alert ("hallo world")  //Javascript function alert

let js = "amazing"

if (js === "amazing") alert("Javascript is Fun")


let myFirstJob = "coder";  
let myCurrentJob= "teacher";
console.log(myFirstJob)
*/

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// javascriptIsFun = 30;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let marksWeight = 78;
// let marksHeight = 1.69;

// let johnsWeight = 92;
// let johnsHeight = 1.88;

// let marksBMI = marksWeight / marksHeight ** 2;
// console.log(marksBMI);

// let johnsBMI = johnsWeight / johnsHeight ** 2;
// console.log(johnsBMI);

// let concate = marksBMI > johnsBMI;
// console.log(concate);

// if (marksBMI > johnsBMI) {
//   console.log(` Mark's BMI ${marksBMI} is higer than John's BMI ${johnsBMI}`);
// } else {
//   console.log(`John's BMI ${johnsBMI} is higer than Mark's BMI ${marksBMI}`);
// }

// const dolphinsScore = [96, 108, 89]
// const KoalasScore = [88, 91, 110]

// const avarageDolphins = (96 +108 + 89)/3
// const avarageKoalas = (88+91+110)/3
// console.log(avarageDolphins, avarageKoalas)

// if( avarageDolphins > avarageKoalas  ) {
//     console.log( " Dolphins are Winner !")
// } else {
//     console.log("Koalas are Winner!")
// }

// if(avarageDolphins===avarageKoalas) {

//     console.log( "nobady is Winner")
// }

// const dolphinsScore = [90, 102, 90]
// const KoalasScore = [90, 90, 113]

// const avarageDolphins = (90+102+90)/3
// const avarageKoalas = (90+90+113)/3
// console.log(avarageDolphins, avarageKoalas)

// if( avarageDolphins>avarageKoalas && avarageDolphins >= 100) {
// console.log ( "dolphins are winner!")
// }  else if ( avarageKoalas > avarageDolphins && avarageKoalas >= 100)
//  {
//     console.log("Koalas are Winner")
// } else if ( avarageDolphins> avarageKoalas && avarageDolphins <100) {
//     console.log( "delpins ar winner! but no medal")
// } else if (avarageKoalas > avarageDolphins && avarageKoalas <100) {
//     console.log ("koalas are winner, but No medal")
// }

// let bill = 275;
// let tip;
// let total;

// if (bill >= 50 && bill <= 300) {
//   tip = (bill * 15) / 100;
//   total = tip + bill;
//   console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${total}`);
// } else {
//   tip = (bill * 20) / 100;
//   total = tip + bill;
//   console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${total}`);
// }

// function print() {
//     console.log("This is simply function")
// }
// print();

// function fruqties(apple, orange) {
// console.log(apple, orange)
// const juise = `This is ${apple} apple plus This is ${orange} orange `
// return juise;
// }

// const applejuise = fruqties(5,0);
// console.log(applejuise);

// const oringejuise = fruqties(0, 7);
// console.log(oringejuise);

// const twicejuise = fruqties(3, 3)
// console.log(twicejuise);

//function declaration

// function myage(birthday) {
//   return 2022 - birthday;
// }

// const bekasage = myage(1994);
// console.log(bekasage);

// //function expression
// const myrealAge = function myage(birthday) {
//   return 2022 - birthday;
// };

// const myAge = myrealAge(1994);
// console.log(bekasage, myAge);

// const myplane = function iWilllearn(englishlanguage, programing ) {
//  myAge =30;
//   if ( myAge===30 )  {
//         console.log(`I already speaking ${englishlanguage}  and I became master ${programing} `)
//     }

// }

// const result = myplane(1, 2) ;
// console.log(result)

// const myAge = birthday => 2022-birthday;
// const age = myAge(1994);
// console.log(age);

// const sapensioasaki = (birthday, firstname) => {
// const myage = 2022-birthday;
// const pensia = 65 - myage;

// return ` chemi asaki aris ${myAge} da sapensio asakamde darchenili maqvs ${pensia} weli`
// }

// console.log(sapensioasaki(1994, 'beqa'));

// function cutFruitPieces (fruit) {
//     return fruit *4;
// }

//    function fruitProcessor (apple, orange ) {

//     const applepieces = cutFruitPieces(apple);
//     const orangepieces = cutFruitPieces(orange);

//     const juice = `Juise with ${applepieces} pices of apple and ${orangepieces} pices of origin`;
// return juice;

// }
// console.log(fruitProcessor(2,3));

//  const resultNumber = function number (newNumber) {

//     if(newNumber==5) {
//         return ` ${newNumber} is simply number`
//      } else {
//         console.log('This is other number')
//      }

// }

// const result = resultNumber(5);
// console.log(result);

// const resultNumber = newNumber =>  {
// if (newNumber==5)

//    { return `${newNumber} is simoly number`}
//    else { console.log("this is false")}

// }

// const result = resultNumber(5);
// console.log(result);

// const avarageDolphins = (44+23+71)/3;
// const avarageKoalas = (65+54+49)/3;
// console.log(avarageDolphins, avarageKoalas)

// if(avarageDolphins>= avarageKoalas*2) {
//     console.log(` Dolphins are win! score is ${avarageDolphins}`)
// } else if ( avarageKoalas >= avarageDolphins*2) {
//     console.log(`Koalas are win! score is ${avarageKoalas}`)
// } else {
//     console.log("Nobady is Winner :( ")
// }

// const calceAvarage = (a,b,c) => (a+b+c)/3;

// const avarageDolphins = calceAvarage(44, 23, 71);
// const avarageKoalas = calceAvarage(65, 54, 49);
// console.log(avarageDolphins, avarageKoalas);

// const checkwinner = function(avarageDolphins,avarageKoalas){

//  if(avarageDolphins>= avarageKoalas*2) {
//    console.log(` Dolphins are win! score is ${avarageDolphins}`)
//  } else if ( avarageKoalas >= avarageDolphins*2) {
//      console.log(`Koalas are win! score is ${avarageKoalas}`)
//      } else {
//    console.log("Nobady is Winner :( ")
// }
// }

//  checkwinner(avarageDolphins, avarageKoalas);

// expression function
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// //arrow function

// // const calcTip =bill => bill >= 50 && bill <=300 ? bill*0.15 : bill*0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);

// const beqa = [1, 2, 2, 4, 4]
// console.log(beqa);

// const beqaa = new Array (2,3, 3, 4)
// console.log(beqaa)

//  const result = function( firstName,surName, age ) {
//     let text = ""

//     if(age>=18) {
//       text ="var srulwlovani"
//     } else {
//     text ="ar var srulwlovani"
//     }

//     return ` I am ${firstName} ${surName}, my age is ${age} old and me ${text} `
//     // if( age >=18) {

//     // const person = ` I am ${firstName} ${surName}, my age is ${age} old and i am srulwlovani `
//     //   return person ;
//     // } else {
//     //      return ` I am ${firstName} ${surName}, my age is ${age} old and me ar var srulwlovani `
//     // }

//     }

//  const gio = result ("gio", "injgia", 16)
//  const beqa = result("beqa","injgia",27)
// console.log(beqa, gio)

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthday: 1991,
//     job: "Teacher",
//     friends: [ "Michael", "Peter", "Stiven"],
//     hasDriveLicense: false,

//     aboutme: function() {
//        let  text= ""

//         if(this.hasDriveLicense) {
//             text="true"

//         } else {
//             text="false"
//         }
//         return ` I am  ${this.firstName } ${this.lastName}, my birthday is ${this.birthday} , I am ${this.job}, i have ${this.friends.length} friends and the best is ${this.friends[1]},
//         i has drive licenze, becauze this is ${this.hasDriveLicense} `
//     }

// }

// console.log(jonas.aboutme())

// const emzari = { juice: true, salt: false, fruite: true };

// //  meniu - juice, salate, fruite

// const check = function (e) {
//   return `I order juice: ${'gamarjoba'.juice} salat: ${'gamarjoba'.salt}, frute: ${'gamarjoba'.fruite} `;
// };

// const gioOrder = check({ juice: true, salt: false, fruite: true });
// const beqa = check({ juice: false, salt: false, fruite: true });
// const shota = check('gamarjoba');
// const emzariOrder = check(emzari);

// console.log(gioOrder);
// console.log(beqa);
// console.log(shota);
// console.log(emzariOrder);

// const person1 = {
//  firstName: "Mark",
//  lastname: "Miller",
//  mass: 78,
//  height: 1.69,

//  BMI: function() {
//     BMI = this.mass/this.height **2
//     return BMI
//  },

// }

// const BMImark = person1.BMI()

// const person2 = {
//     firstName: "John",
//     lastname: "Smith",
//     mass: 92,
//     height: 1.95,

//     BMI: function() {
//         BMI = this.mass/this.height **2
//         return BMI
//      }

//    }

//    const BMIjohn = person2.BMI()

//   const result = BMIjohn>BMImark ? `John's BMI ${BMIjohn} is higher than Mark's BMI ${BMImark} ` : `Mark's BMI ${BMImark} is higher than John's BMI ${BMIjohn} `

// console.log(result)\\

// for Loop
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum = arr[i];
//      // 0 =4
//     // 4 =5
//     // 5 = 9

//     // 0 = 0 + 4 >> 4
//     //4 = 4 + 5 >> 9
//     // 9 = 9 +9 >> 18

//   }

//   // return sum/ arr.length;
//   console.log(sum);
// };

// calcAverage([4, 5, 9]);

//1.Values and Variables

// const country ="Georgia";
// const continent ="Europe";
// const population = 3500000;

// // console.log(country, continent, population)

// // //2.data types
//  const country ="Georgia";
// // const isIsland = false;
//  const language = "Georgian";
// const continent = "Europe"
// let population = 3500000;
// // console.log( typeof isIsland , typeof population,  typeof country,  typeof language)

// let population1 = 3500000/2;
// console.log(population1)

// let population2 = 3500000
// population2++
// console.log(population2)

// let populationFiland = 6000000;

// let result = populationFiland- populationGeorgia;
// console.log(result)

// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// const numNeighbours =  prompt("How many neighbour countries does your country have?")

// if (numNeighbours == 1) {
//     console.log('Only 1 border!');
//     } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
//     } else {
//     console.log('No borders');
//     }

// const country ="Georgia";
//  const isIsland = false;
// const language = "Georgian";
// const continent = "Europe"
// const population = 35;

// if (language == "Georgian" && population < 50 && isIsland) {
//     console.log( 'You should live in Georgia :)');
// } else {
//     console.log( "Georgia is the best country in the world!")
// }

// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//     console.log('MOST number of native speakers!');
//     break;
//     case 'spanish':
//     console.log('2nd place in number of native speakers');
//     break;
//     case 'english':
//     console.log('3rd place');
//     break;
//     case 'hindi':
//     console.log('Number 4');
//     break;
//     case 'arabic':
//     console.log('5th most spoken language');
//     break;
//     default:
//     console.log('Great language too :D');
//     }

// language = 'arabic';

// const result = function (language) {
//   if (language === 'chinese' || language === 'mandarin') {
//     console.log('MOST number of native speakers!');
//   } else if (language === 'spanish') {
//     console.log('2nd place in number of native speakers');
//   } else if (language === 'english') {
//     console.log('3rd place');
//   } else if (language === 'hindi') {
//     console.log('Number 4');
//   } else if (language === 'arabic') {
//     console.log('5th most spoken language');
//   } else {
//     console.log('Great language too :D');
//   }
// };

// console.log(result(language));

// const country ="Georgia"
// populationGeorgia=3.5;

// const test = `${country} population is ${populationGeorgia > 33 ?  "above" : "below"} "average" `;

// console.log(test)

//   const percentageOfWorld2 = function(country, population) {
//   return `${country} has ${population} million people, so it's about ${
//     (population / worldpopulation) * 100
//   } of the world population `;
// }

// const country1 = percentageOfWorld2('Georgia', 3.7);
// const country2 = percentageOfWorld2('Armenia', 3);

// console.log(percentageOfWorld2(country1));
// console.log(percentageOfWorld2(country2));
// console.log(percentageOfWorld2(country3));

// const worldpopulation = 7900;

// const percentageOfWorld1 = function(country, population) {
//       return `${country} has ${population} million people, which is about ${
//          (population / worldpopulation) * 100
//        } of the world `;
//      }

//   function describePopulation(country, population) {

//     return percentageOfWorld1('georgia', 3.7);
//   }

//   console.log(describePopulation())

//

//  const populations = [45, 1141, 15, 6] ;
// console.log(populations.length ===4);

// const percentages = percentageOfWorld2(1441)
// console.log(percentages)

// const neighbours = ['Russia', 'Azerbaijan', 'Turkya', 'Armenia'];
//  neighbours.push('Utopia');
// console.log(neighbours)

// neighbours.pop('Utopia')
// console.log(neighbours)

// console.log(neighbours.includes('Mango'))

// if (neighbours.includes('Armenia')) {

// console.log("Cavatanem :D ") }

// if (!neighbours.includes('Germany')) {
//     console.log('Probably not a central European country :D');
//     }

//     console.log(neighbours.indexOf('Armenia'))

//     neighbours[neighbours.indexOf('Russia')] = ' Russia is Agresor!'
//     console.log(neighbours);

// const myCountry = {
//     country: 'Georgia',
//     capital: 'Tbilisi',
//     language: 'Georgian',
//     population: 3.7,
//     neighbours:  ['Russia', 'Armenia', 'Azerbaijan', 'Turkya'],

//     describe: function() {

//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

//         },

//         checkIsland: function () {
//             return this.isIsland = this.neighbours.length ===0 ? true :
//             false;

//          }
//  }

//  console.log(myCountry.checkIsland());

// for (let voter = 1; voter <= 50; voter++) console.log(`Voter number ${voter} is currently voting`);

// const worldpopulation = 7900;

// const percentageOfWorld1 = function (population) {
//    return (population / worldpopulation) * 100;
// };

// const example1 = [1, 2, 3, 4, 5];
// const example2 = [];
// for (i = 0; i < example1.length; i++) {
//   const result = percentageOfWorld1(example1[i]);
//   example2.push(result);
// }





const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (i=0; i<listOfNeighbours.length; i++) 
// for (let y = 0; y < listOfNeighbours[i].length; y++)
     
// console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
const worldpopulation = 7900;

const percentageOfWorld1 = function (population) {
    return (population / worldpopulation) * 100;
 };
const populations = [45, 1141, 15, 6] ;


const percentages3 = [];
let i = 0;
while (i < populations.length) {
const perc = percentageOfWorld1(populations[i]);
percentages3.push(perc);
i++;
}
console.log(percentages3);



 
