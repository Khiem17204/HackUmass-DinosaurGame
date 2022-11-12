const dino = document.getElementById("dino");
const obs = document.getElementById("obs");
const obs2 = document.getElementById("obs2");
const obs3 = document.getElementById("obs3");
const anya = document.getElementById("anya");
const anya2 = document.getElementById("anya2");
const anya3 = document.getElementById("anya3");


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
    }, 10000);
  }
}

function create2() {
  if (obs2.classList != "create2") {
    obs2.classList.add("create2");

    setTimeout(function () {
      obs2.classList.remove("create2");
    }, 5000);
  }
}

function create3() {
  if (obs3.classList != "create3") {
    obs3.classList.add("create3");

    setTimeout(function () {
      obs3.classList.remove("create3");
    }, 2000);
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

  if (anya.classList != "create") {
    anya.classList.add("create");

    setTimeout(function () {
      anya.classList.remove("create");
    }, 10000);
  }
}

function create5() {
  if (anya2.classList != "create2") {
    anya2.classList.add("create2");

    setTimeout(function () {
      anya2.classList.remove("create2");
    }, 5000);
  }
}

function create6() {
  if (anya3.classList != "create3") {
    anya3.classList.add("create3");

    setTimeout(function () {
      anya3.classList.remove("create3");
    }, 2000);
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
  if (name === "t"){
    create3();
  }
  if (name === "i"){
    create4();
  }
  if (name ==="o"){
    create5()
  }
  if (name ==="p"){
    create6()
  }
});