var btns = document.getElementsByClassName("menu_optn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("actived");
    current[0].className = current[0].className.replace(" actived", "");
    this.className += " actived";
  });
}

var slide=document.getElementsByClassName('slide');
console.log(slide);
var routes=document.getElementsByClassName('routes')

for(var i=0;i<slide.length;i++){
    slide[i].addEventListener('click',()=>{
        routes[0].classList.toggle('active');
    })
}

