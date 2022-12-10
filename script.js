
// video
var video = document.getElementById("video");
var btn = document.getElementById("button");

function playPause() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// text content
var essay = document.getElementById("essay");


document.body.onkeyup = function(e) {
    var code = e.keyCode;
    if(code === 83) { // key code for s
        essay.scrollTo(document.body.scrollLeft,
                        essay.scrollTop + 300);
    }
};

document.body.onkeydown = function(e) {
    var code = e.keyCode;
    if(code === 87) { // key code for w
        essay.scrollTo(document.body.scrollLeft,
                        essay.scrollTop - 300);
    }
};


// image carousel
let parent = document.getElementById('list');

function moveRight(){
  let lastChild = document.querySelector('.slider ul li:last-child');
  parent.prepend(lastChild);
}

function moveLeft(){
  let firstChild = document.querySelector('.slider ul li:first-child');
  parent.append(firstChild);
}

document.onkeydown = (e)=>{
  switch(e.keyCode){
    case 68:
      moveLeft();
      break;
    case 65:
      moveRight()
      break;
  }
};
