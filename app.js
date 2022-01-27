
 
const countryName = document.querySelector('.result');
const drawBtn = document.querySelector('.toss-btn');
const checkBtn = document.querySelector('.check-btn');
const outcome = document.querySelector('.draw-outcome');
const input = document.querySelector('.capitalInput');
const img = document.querySelector('.img')
const score = document.querySelector('.score')

const europe = {
  Poland: {
    country: 'Poland',
    capital: 'Warsaw',
    img: './imgs/poland.png'
  },
  Germany: {
    country: 'Germany',
    capital: 'Berlin',
    img: './imgs/germany.png'
  },
  Italy: {
    country: 'Italy',
    capital: 'Rome',
    img: './imgs/italy.png'
  },
//   Spain: {
//     country: 'Spain',
//     capital: 'Madrid',
//     img: './imgs/spain.png'
//   },
//   Ukraine: {
//     country: 'Ukraine',
//     capital: 'Kyiv',
//     img: './imgs/ukraine.png'
//   },
//   Norway: {
//     country: 'Norway',
//     capital: 'Oslo',
//     img: './imgs/norway.png'
//   },
//   France: {
//     country: 'France',
//     capital: 'Paris',
//     img: './imgs/france.png'
//   },
//   Great_Britain: {
//     country: 'Great Britain',
//     capital: 'London',
//     img: './imgs/great-britain.png'
//   },
//   Switzreland: {
//     country: 'Switzreland',
//     capital: 'Genev',
//     img: './imgs/switzerland.png'
//   },
//   Portugal: {
//     country: 'Portugal',
//     capital: 'Lisbon',
//     img: './imgs/portugal.png'
//   },
//   Finland: {
//     country: 'Finland',
//     capital: 'Helsinki',
//     img: './imgs/finland.png'
//   },
//   Netherlands: {
//     country: 'Netherlands',
//     capital: 'Amsterdam',
//     img: './imgs/netherlands.png'
//   },
//   Luxembourg: {
//     country: 'Luxembourg',
//     capital: 'Luksemburg',
//     img: './imgs/luxembourg.png'
//   },
//   Latvia: {
//     country: 'Latvia',
//     capital: 'Riga',
//     img: './imgs/latvia.png'
//   },
//   Denmark: {
//     country: 'Denmark',
//     capital: 'Copenhagen',
//     img: './imgs/denmark.png'
//   },
//   Belgium: {
//     country: 'Belgium',
//     capital: 'Brussels',
//     img: './imgs/belgium.png'
//   },
//   Croatia: {
//     country: 'Croatia',
//     capital: 'Zagreb',
//     img: './imgs/croatia.png'
//   },
//   Bulgaria: {
//     country: 'Bulgaria',
//     capital: 'Sofia',
//     img: './imgs/bulgaria.png'
//   },
//   Czech_republic: {
//     country: 'Czech-republic',
//     capital: 'Prague',
//     img: './imgs/czech-republic.png'
//   },
//  Sweden: {
//     country: 'Sweden',
//     capital: 'Stockholm',
//     img: './imgs/sweden.png'
//   }, 
};

const keys = Object.keys(europe);
const prop = keys[Math.floor(Math.random() * keys.length)];
const europeObj = Object(europe);

let capitalDraw;
let playerScore = 0;
score.textContent = playerScore

function getKeyByValue(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value)
}

const europeCopie = europe;
const drawTheCountry = () => {
let capitalValue = Object.values(europe);
  
 
if (europe == []) {
  console.log('nie ma więcej countries');
}
capitalDraw = capitalValue[Math.floor(Math.random() * capitalValue.length)];
countryName.textContent = capitalDraw.country;
outcome.textContent = '';
img.setAttribute('src', capitalDraw.img);
console.log(capitalDraw);
 
 console.log(europe);

  return capitalDraw, europe, countryToDelete;
};

// const drawTheCountry = () => {
//   const europeCopie = europe;
//   const capitalValue2 = Object.values(europeCopie);
//  capitalDraw = capitalValue2[Math.floor(Math.random() * capitalValue2.length)];
//  countryName.textContent = capitalDraw.country;
//  outcome.textContent = '';
//  img.setAttribute('src', capitalDraw.img);
//  console.log(capitalDraw);
//  const countryToDelete = getKeyByValue(europeCopie, capitalDraw);
//  delete europeCopie[countryToDelete];
//  console.log(europeCopie);
//   return capitalDraw, europeCopie;
// };

const isCapitalRight = () => {
  const countryToDelete = getKeyByValue(europeCopie, capitalDraw);
  const inputValue = input.value;
  const capitalOutcome = capitalDraw.capital;
  if (inputValue.toLowerCase() == capitalOutcome.toLowerCase()) {
   playerScore++
   score.textContent = playerScore;
   delete europe[countryToDelete];
   outcome.textContent = 'wspaniale!';
   setTimeout(() => {
    outcome.textContent = 'gramy dalej 😎'
    drawTheCountry();
   }, 2000);
  
    
   
   } else if (inputValue == '') {
   outcome.textContent = `you must write the capital of ${capitalDraw.country}`;
  } else {
    outcome.textContent = 'nie trafiłeś mordeczko';
  }
  input.value = '';
};

drawBtn.addEventListener('click', drawTheCountry);
checkBtn.addEventListener('click', isCapitalRight);
document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    isCapitalRight();
  } else {
    console.log('nie ten key');
  }
});



