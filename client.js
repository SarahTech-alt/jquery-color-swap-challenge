$(document).ready(readyNow);

function readyNow(){
    console.log('Document ready'); // validating sourcing
    $('#generate-button').on('click', addDiv);
}
let clickCount = 0; // initializing a variable for a counter

function addDiv() {
    // console.log('adding div'); checking function call
    clickCount++; // add one to counter
    $('.add-content').append(`<div class='added-div'><p>Number of clicks: ${clickCount} </p></div>`) // add a div with the click count to the DOM
}