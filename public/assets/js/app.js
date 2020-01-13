'use strict';

let click = 0;

$(document).ready( function() {
    $("#top").css("background-image", "url('./images/main-image1.jpeg')")
})


function buttonClick() {
$('button').click( function (event) {
    event.preventDefault();
    // console.log('pof')
    let select = $(this).val();
    if (click == 0) {
    $("#top").css("background-image", "url('./images/beach.jpeg')")
    click++;
     } else if (click === 1) {
        $("#top").css("background-image", "url('./images/honu.jpeg')")
        click++;
     } else if (click === 2) {
     $("#top").css("background-image", "url('./images/main-image1.jpeg')")
     click=0;
     }
    })
}



buttonClick()
