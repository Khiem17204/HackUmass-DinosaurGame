const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const cactus2 = document.getElementById("cactus2");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 2000);
  }
}

function create1() {

  if (cactus.classList != "create") {
    cactus.classList.add("create");

    setTimeout(function () {
      cactus.classList.remove("create");
    }, 1000);
  }
}

function create2() {
  if (cactus2.classList != "create2") {
    cactus2.classList.add("create2");

    setTimeout(function () {
      cactus2.classList.remove("create2");
    }, 5000);
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



document.addEventListener("keypress", (event)=>{
  var name = event.key
  var code = event.code
  if (name === "r") {
    create1();

  }
  if (name === "t") {
    create2();
  }
});



