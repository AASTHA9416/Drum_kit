// document.querySelectorAll("button")[0].addEventListener("click",function (){
//     alert("i got clicked");
// });
// document.querySelectorAll("button")[1].addEventListener("click",function (){
//     alert("i got clicked");
// });
// document.querySelectorAll("button")[2].addEventListener("click",function (){
//     alert("i got clicked");
// });
// document.querySelectorAll("button")[3].addEventListener("click",function (){
//     alert("i got clicked");
// });
// document.querySelectorAll("button")[4].addEventListener("click",function (){
//     alert("i got clicked");
// });
// document.querySelectorAll("button")[5].addEventListener("click",function (){
//     alert("i got clicked");
// });
// document.querySelectorAll("button")[6].addEventListener("click",function (){
//     alert("i got clicked");
// });
var len=document.querySelectorAll("button").length;
for(var i=0;i<len;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
    // this.style.color="white";
    var buttonInnerHtml=this.innerHTML;
    playSound(buttonInnerHtml);
    addShadow(buttonInnerHtml);
});
}

document.addEventListener("keydown",function (e){
// alert(e.key);
playSound(e.key);
addShadow(e.key);
}
);

function playSound(word){
switch(word){
case 'w':
    const audio1=new Audio('./sounds/crash.mp3');
    audio1.play();
    break;

case 'a':
    const audio2=new Audio('./sounds/kick-bass.mp3');
    audio2.play();
    break;

case 's':
    const audio3=new Audio('./sounds/snare.mp3');
    audio3.play();
    break;

case 'd':
    const audio4=new Audio('./sounds/tom-1.mp3');
    audio4.play();
    break;
    
case 'j':
    const audio5=new Audio('./sounds/tom-2.mp3');
    audio5.play();
    break;
    
case 'k':
        const audio6=new Audio('./sounds/tom-3.mp3');
        audio6.play();
        break;
        
case 'l':
    const audio7=new Audio('./sounds/tom-4.mp3');
    audio7.play();
    break;
        
default:
        alert("Not a valid input");
        break;
    }
}

function addShadow(word){
    var activeButton=document.querySelector("."+word);
    activeButton.classList.add("pressed");
    setTimeout(function(){
     activeButton.classList.remove("pressed");
    },100);
}
