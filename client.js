$(document).ready(readyNow);

function readyNow(){
    console.log('Document ready'); // validating sourcing
    $('#generate-button').on('click', addDiv);
    $('.add-content').on('click', '.make-yellow', makeYellow)
    $('.add-content').on('click', '.delete-color-row', deleteRow)
}
let clickCount = 0; // initializing a variable for a counter

function addDiv() {
    // console.log('adding div'); checking function call
    clickCount++; // add one to counter
    $('.add-content').append(`
    <div class='added-div'>
    <p>${clickCount} </p>
    <button class="make-yellow" id="make-yellow-${clickCount}">Yellow</button>
    <button class="delete-color-row">Delete</button>
    </div>`) // add a div with the click count to the DOM
}

function makeYellow(){
   // event.preventDefault();
    console.log('it worked!');
    console.log($(this));
    $(this).parent().addClass('now-yellow');
}

function deleteRow() {
    $(this).parent().remove();
}