/*console.log('Loaded!');

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
    while(img.style.marginLeft<'50px');
    }

img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};
*/

//Counter code

var button = document.getElementById('counter');
button.onclick = function(){
    //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if( request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if( request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make the request
    request.open('GET','http://vjrockz111.imad.hasura-app.io/counter',true);
    request.send(null);
};