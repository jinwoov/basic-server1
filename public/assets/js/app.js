'use strict';

let click = 0;

$(document).ready( function() {
    $("#top").css("background-image", "url('./images/main-image1.jpeg')")
    $(".alt").css("color", "white")
    $(".alt").css("textShadow", "1px 2px 2px black")
})


function buttonClick() {
$('button').click( function (event) {
    event.preventDefault();
    // console.log('pof')
    let select = $(this).val();
    imageChange()
    })
}

const imageChange = () =>{
    if (click == 0) {
        $("#top").css("background-image", "url('./images/beach.jpeg')")
        $(".alt").css("color", "white")
        click++;
         } else if (click === 1) {
            $("#top").css("background-image", "url('./images/honu.jpeg')")
            $(".alt").css("color", "white")
            click++;
         } else if (click === 2) {
         $("#top").css("background-image", "url('./images/main-image1.jpeg')")
         $(".alt").css("color", "white")
    
         click=0;
         }
}

window.onload = function() {
    var x = 0;
    setInterval(function() {
        imageChange();
    },5000);
  }   


 
buttonClick()
