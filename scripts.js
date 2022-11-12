const dino = document.getElementById("dino");
const obs = document.getElementById("obs");
const obs2 = document.getElementById("obs2");
const anya = document.getElementById("anya");
const anya2 = document.getElementById("anya2");


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


// let isAlive = setInterval(function () {
//   // get current dino Y position
//   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

//   // get current cactus X position
//   let cactusLeft = parseInt(
//     window.getComputedStyle(cactus).getPropertyValue("left")
//   );

//   // detect collision
//   if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
//     // collision
//     alert("Game Over!");
//   }
// }, 10);
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


document.addEventListener("keypress", (event)=>{
  var name = event.key
  var code = event.code
  if (name === "e") {
    create1();
  }
  if (name === "r") {
    create2();
  }
  if (name === "i"){
    create4();
  }
  if (name ==="o"){
    create5()
  }
  if (name ==='x'){
    jump()
  }
});