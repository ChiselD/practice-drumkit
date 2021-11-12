// variables

const BUTTONS = document.querySelectorAll(".drum");

const DRUMKIT = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "crash",
  k: "kick-bass",
  l: "snare"
}

// function to check character and play sound & animation

function checkChar(obj, key) {
  if (key in obj) {
    let sound = new Audio("sounds/" + obj[key] + ".mp3");
    sound.play();
    buttonAnimation(key);
  } else {
    return;
  }
}

// event listeners

BUTTONS.forEach((btn) => {
  btn.addEventListener("click", function(btn) {
    let buttonInnerHTML = this.innerHTML;
    checkChar(DRUMKIT, buttonInnerHTML);
  });
});

document.addEventListener("keydown", function(e) {
  checkChar(DRUMKIT, e.key);
});

// animation

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 80);
}
