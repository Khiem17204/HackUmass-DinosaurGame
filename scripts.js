const dino = document.getElementById("dino");
const dino2 = document.getElementById("dino2");
const obs = document.getElementById("obs");
const obs2 = document.getElementById("obs2");
const anya = document.getElementById("anya");
const anya2 = document.getElementById("anya2");
var myMusic = document.getElementById("music");

myMusic.autoplay =true;
myMusic.load;

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 2000);
  
  
  }
}

function create1() {

  if (obs.classList != "create") {
    obs.classList.add("create");

    setTimeout(function () {
      obs.classList.remove("create");
    }, 3000);
  }
}

function create2() {
  if (obs2.classList != "create2") {
    obs2.classList.add("create2");

    setTimeout(function () {
      obs2.classList.remove("create2");
    }, 2500);
  }
}


let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let obsLeft = parseInt(
    window.getComputedStyle(obs).getPropertyValue("margin-right")
  );

  // detect collision
  if (obsLeft<60 && obsLeft > 0 && dinoTop >= 155) {
    // collision
    alert("Player 2 wins");
  }
}, 10);

let isAlive1 = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let obsLeft = parseInt(
    window.getComputedStyle(obs2).getPropertyValue("margin-right")
  );

  // detect collision
  if (obsLeft<60 && obsLeft > 0 && dinoTop >= 155) {
    // collision
    alert("Player 2 wins");
  }
}, 10);



function jump2() {
  if (dino2.classList != "jump") {
    dino2.classList.add("jump");

    setTimeout(function () {
      dino2.classList.remove("jump");
    }, 2000);
  }
}

function create4() {

  if (anya.classList != "create4") {
    anya.classList.add("create4");

    setTimeout(function () {
      anya.classList.remove("create4");
    }, 3000);
  }
}

function create5() {
  if (anya2.classList != "create5") {
    anya2.classList.add("create5");

    setTimeout(function () {
      anya2.classList.remove("create5");
    }, 2500);
  }
}

let isAlive3 = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino2).getPropertyValue("top"));

  // get current cactus X position
  let obsLeft = parseInt(
    window.getComputedStyle(anya).getPropertyValue("margin-right")
  );

  // detect collision
  if (obsLeft<60 && obsLeft > 0 && dinoTop >= 155) {
    // collision
    alert("Player 1 wins");
  }
}, 10);

let isAlive4 = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino2).getPropertyValue("top"));

  // get current cactus X position
  let obsLeft = parseInt(
    window.getComputedStyle(anya2).getPropertyValue("margin-right")
  );

  // detect collision
  if (obsLeft<60 && obsLeft > 0 && dinoTop >= 155) {
    // collision
    alert("Player 1 wins");
  }
}, 10);

document.addEventListener("keypress", (event)=>{
  var name = event.key
  var code = event.code
  if (name === "i") {
    create1();
  }
  if (name === "o") {
    create2();
  }
  if (name ==='x'){
    jump()
  }
  if (name ==='e'){
    create4()
  }
  if (name ==='r'){
    create5()
  }
  if (name === "/"){
    jump2()
  }
});

