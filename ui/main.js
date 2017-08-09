console.log('Loaded!');

var element = document.getElementById('main');
element.innerHTML = 'Hey there!';

//Move the image
var img = document.getElementById('dino');
img.onclick = function(){
    img.style.marginLeft = '100px';
};
