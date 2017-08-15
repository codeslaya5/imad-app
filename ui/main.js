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

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //Make a request to the server and send the name
  var names = ['name1' , 'name2' , 'name3'];
  var list = '';
  for(var i=0; i<names.length; i++)
  {
      list+='<li>' + names[i] + '</li>';
  }
  
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
  //Capture a list of names and render it as a list
};

















