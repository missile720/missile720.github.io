//array of objects used for text animation
const words = [
  { text: "Software Engineer" },
  { text: "Artist" },
  { text: "Web Developer" },
  { text: "Father" },
];

const projects = [
  {
    link: "https://smart-pantry-khaki.vercel.app/",
    title: "SmartPantry",
    source: "./img/smartpantry.gif",
    description:
      "Pantry tracker that allows users to virtually store their ingredients and get AI recommended recipe based on their ingredients",
  },
  {
    link: "https://echo-box-syntax-samurai.vercel.app/",
    title: "EchoBox",
    source: "./img/echobox.gif",
    description:
      "A playlist aggregator app, to listen to your Spotify and local playlists from a single source",
  },
  {
    link: "https://quizzical-scrimba-site.netlify.app/",
    title: "Quizzical",
    source: "./img/quizzical.gif",
    description:
      "Quiz app that fetches quiz questions from an API using React",
  },
  {
    link: "https://minesweeper-js-missile.netlify.app/",
    title: "Minesweeper",
    source: "./img/minesweeper.gif",
    description:
      "Minesweeper game where the user plays to find all the bombs without detonating them",
  },
  {
    link: "https://tic-tac-toe-missile.netlify.app/",
    title: "Tic-Tac-Toe",
    source: "./img/tic-tac-toe.gif",
    description:
      "Tic-tac-toe game where the user plays versus the computer. The user also has the ability to change the difficulty of the game",
  },
  {
    link: "https://boggle-js.netlify.app/",
    title: "Boggle",
    source: "./img/boggle.gif",
    description:
      "Boggle game where the user plays for the highest score within a certain time limit",
  }
];

//runs textAnimation function at start of page
textAnimation(words);

//function that takes in the words
async function textAnimation(words) {
  await sleep(2000);
  let i = 0;

  //loops through words array
  while (true) {
    //stores each word
    let word = words[i].text;
    //splits word into an array of letters
    let wordArray = word.split("");

    //loops through letters array
    for (let j = 0; j < wordArray.length; j++) {
      //waits for 150ms between each letter
      await sleep(100);
      //adds letter to document
      document.getElementById("text-identity").innerHTML += wordArray[j];
    }
    //waits 1s to allow user to read word
    await sleep(1000);
    //delete function for word executes after waiting for the previous line
    await deleteLetter();
    //increment i
    i++;
    //checks to see if i is at end of array of objects
    if (i >= words.length) {
      //resets i to repeat array of objects
      i = 0;
    }
  }
}

async function deleteLetter() {
  //grabs current word
  let deleteWord = document.getElementById("text-identity").innerHTML;
  //splits word into array of letters
  let deleteLetters = deleteWord.split("");
  //while deleteLetters still contains letters it loops
  while (deleteLetters.length > 0) {
    await sleep(100);
    //pops the last letter
    deleteLetters.pop();
    //adds letters as a string to the dom
    document.getElementById("text-identity").innerHTML = deleteLetters.join("");
  }
}

//function that pauses based on time parameter
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.onscroll = function () {
  stickyNav();
};
let navbar = document.getElementById("navbar");
let navbarButton = document.getElementsByClassName("nav-button");
let placeholder = document.getElementById("placeholder-left");
let placeholderRight = document.getElementById("placeholder-right");

// Set when during scroll to set nav to sticky
let sticky = 500;
let transparent = 80;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
    placeholder.classList.add("display-none");
    placeholderRight.classList.add("display-none");
    for (let i = 0; i < navbarButton.length; i++) {
      navbarButton[i].classList.add("nav-button-transition");
    }
  } else {
    navbar.classList.remove("sticky");
    placeholder.classList.remove("display-none");
    placeholderRight.classList.remove("display-none");
    for (let i = 0; i < navbarButton.length; i++) {
      navbarButton[i].classList.remove("nav-button-transition");
    }
  }

  if (window.scrollY >= transparent && window.scrollY < sticky) {
    for (let i = 0; i < navbarButton.length; i++) {
      navbarButton[i].classList.add("nav-button-transparent");
    }
  } else {
    for (let i = 0; i < navbarButton.length; i++) {
      navbarButton[i].classList.remove("nav-button-transparent");
    }
  }
}

// adds each card in array in html line 114 
for(let i = 0; i < projects.length; i++){
  document.querySelector(".projects-container").innerHTML += `
  <a href="${projects[i].link}" target="_blank" rel="noopener noreferrer">
    <div class="project-card">
      <h3>${projects[i].title}</h3>
      <img src="${projects[i].source}" alt="Misael Bolainez">
      <p>${projects[i].description}</p>
    </div>
  </a>`;
}