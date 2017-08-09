console.log('Loaded!');

var element = document.getElementById('main');
element.innerHTML = 'Hey there!';

//Move the image
var img = document.getElementById('dino');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + '10px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
};
