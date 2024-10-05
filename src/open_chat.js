const bt = document.getElementById('bd');
const chat = document.getElementById('chat');
const image_bt = document.getElementById('bd_image');
const bd = document.getElementById('x');

function visible(){
  const visibility = window.getComputedStyle(chat, null).visibility;
  
  var screenHeight = screen.height;

  if (visibility == 'hidden'){
    chat.style.visibility = 'visible';
    image_bt.src = "images/seta.png";
  } else if(visibility == 'visible') {
    chat.style.visibility = 'hidden';
    image_bt.src = "images/icon.svg";
  }

  if(screenHeight <= 479){
    bt.style.visibility = 'hidden';
    image_bt.src = "images/icon.svg";
    bd.style.visibility = 'visible'
  }
}

function close_chat(){
  chat.style.visibility = 'hidden';
  image_bt.src = "images/icon.svg";
  bt.style.visibility = 'visible';
  bd.style.visibility = 'hidden';
}

bd.onclick = function(){close_chat()};
bt.onclick = function(){visible()};