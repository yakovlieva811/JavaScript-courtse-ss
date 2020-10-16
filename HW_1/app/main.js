const userName = prompt('What is your name?')
alert('Your name is  ' + userName);

const userYear = prompt('What year were you born in ?')
const nowYear = 2020;
const userAge= nowYear - userYear
alert('Your age is  ' +   userAge );

const squareSide  = prompt('Enter the square side: ')
const squareP = squareSide*4;
const squareS = squareSide**2;
alert('Square perimeter is ' + squareP + ' and square area is ' + squareS );

const r  = prompt('Enter the radius: ')
const circleS = 3.1428 * r**2;
alert('Circle area is ' + circleS );

const distance  = prompt('Enter the distance between two cities (km): ')
const time  = prompt('Enter the time of your trip (hours): ')
const speed = distance/time;
alert('Your speed should be ' + speed + ' km/h');


const dollars = prompt('Enter the amount of dollars: ')
const dollarsToHryvna  = 28.36 * dollars
const dollarsToEuro = 0.8519  * dollars
alert(dollars + ' USD =' + dollarsToEuro + ' EUR or ' + dollarsToHryvna + ' UAN');

const flashSize = prompt('Enter your flash drive size (Gb): ')
const amountOfFiles  = Math.trunc( flashSize * 1024 / 820) ;
alert('Your flash drive can fit ' + amountOfFiles + ' files (size 820 Mb)');


const moneyHave = prompt('Enter the amount of money you have: ')
const chocoPrise = prompt('Enter the prise of one chocolate bar: ')
const  amountOfChoco =Math.trunc( moneyHave/chocoPrise) ;
const moneyLeft = moneyHave - (amountOfChoco*chocoPrise)
alert('You can buy ' + amountOfChoco + ' bars of chocolate and after that you will have ' +moneyLeft +  ' USD.' );


const number = prompt('Enter the three-digit number:  ')
alert(('' + number).split('').reverse().join(''))


