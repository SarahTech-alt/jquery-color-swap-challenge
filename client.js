$(document).ready(readyNow);

function readyNow(){
    console.log('Document ready'); // validating sourcing
    $('#generate-button').on('click', addDiv);
}

function addDiv() {
    console.log('adding div');
    
    $('.add-content').append(`<div class='added-div'>New Element</div>`)
}