const bt = document.getElementById('bd');
const chat = document.getElementById('chat');
const image_bt = document.getElementById('bd_image');

function visible(){
  const visibility = window.getComputedStyle(chat, null).visibility;
  if (visibility == 'hidden'){
    chat.style.visibility = 'visible';
    image_bt.src = "images/seta.png";
  } else if(visibility == 'visible') {
    chat.style.visibility = 'hidden';
    image_bt.src = "images/icon.svg";
  }
}

bt.onclick = function(){visible()};