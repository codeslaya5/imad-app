console.log('Loaded!');

var element = document.getElementById('main');
element.innerHTML = 'Hey there!';

//Move the image
var img = document.getElementById('dino');
var marginLeft = 0;
function moveRight(){
    do{
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
    }
    while(marginLeft<50);
    }

img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};
