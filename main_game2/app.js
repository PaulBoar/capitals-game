const countryName = document.querySelector('.result');
const drawBtn = document.querySelector('.toss__btn');
const checkBtn = document.querySelector('.check__btn');
const outcome = document.querySelector('.draw__outcome');
const input = document.querySelector('.capital__input');
const img = document.querySelector('.img');
const score = document.querySelector('.score');
const endScoreCard = document.querySelector('.end__score');
const endScore = document.querySelector('.end__score .guessed-capitals');
const allCapitals = document.querySelector('.end__score .all__capitals');
const rightContainer = document.querySelector('.right-container-to-hide');

const europe = {
  Poland: {
    country: 'Poland',
    capital: 'Warsaw',
    img: './imgs/poland.png',
  },
  Germany: {
    country: 'Germany',
    capital: 'Berlin',
    img: './imgs/germany.png'
  },
  Italy: {
    country: 'Italy',
    capital: 'Rome',
    img: './imgs/italy.png',
  },
    Spain: {
      country: 'Spain',
      capital: 'Madrid',
      img: './imgs/spain.png'
    },
    Ukraine: {
      country: 'Ukraine',
      capital: 'Kyiv',
      img: './imgs/ukraine.png'
    },
    Norway: {
      country: 'Norway',
      capital: 'Oslo',
      img: './imgs/norway.png'
    },
    France: {
      country: 'France',
      capital: 'Paris',
      img: './imgs/france.png'
    },
    Great_Britain: {
      country: 'Great Britain',
      capital: 'London',
      img: './imgs/great-britain.png'
    },
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
score.textContent = playerScore;

function getKeyByValue(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

const europeCopie = europe;

const drawTheCountry = () => {
  let capitalValue = Object.values(europe);

  if (Object.values(europe).length == 0) {
    score.textContent = `Your score is ${playerScore}`;
    outcome.textContent = '';
    img.removeAttribute('src');
    rightContainer.style.display = 'none';
    endScoreCard.style.display = 'inline-block';
    endScore.textContent = playerScore;
    allCapitals.textContent = keys.length;
    return console.log('there is no more countries');
  } else {
    capitalDraw = capitalValue[Math.floor(Math.random() * capitalValue.length)];
    countryName.textContent = capitalDraw.country;
    outcome.textContent = '';
    img.setAttribute('src', capitalDraw.img);
    console.log(capitalDraw);
  }
  console.log(europe);

  return capitalDraw, europe, capitalValue;
};

const isCapitalRight = () => {
  if (Object.values(europe) === []) {
    console.log('nie ma więcej countries');
    return;
  }
  const countryToDelete = getKeyByValue(europeCopie, capitalDraw);
  const inputValue = input.value;
  const capitalOutcome = capitalDraw.capital;
  if (inputValue.toLowerCase() == capitalOutcome.toLowerCase()) {
    playerScore++;
    score.textContent = `your score: ${playerScore}`;
    delete europe[countryToDelete];
    outcome.textContent = 'Awsome!';
    setTimeout(() => {
      outcome.textContent = 'keep playing 😎';
      drawTheCountry();
    }, 2000);
  } else if (inputValue == '') {
    outcome.textContent = `you must write the capital of ${capitalDraw.country}`;
  } else {
    outcome.textContent = 'Wrong answer ❌';
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
