// Select color input
// Select size input
var color, gridHeight, gridWidth, grid, row, block;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
event.preventDefault();
makeGrid(gridHeight, gridWidth);

})

function makeGrid(N,M) {

// Your code goes here! 
grid = $('#pixelCanvas'); 
gridHeight = $('#inputHeight').val();
gridWidth = $('#inputWeight').val();

grid.children().remove();
for(a = 0; a <= gridWidth; a++){
    grid.append('<tr></tr>');
}
row = $('tr');
for(b = 0; b <=gridWidth; b++){
    row.append('<td></td>');
}
block = grid.find('td');


block.click(function () {
    color = $('#colorPicker').val();
    if($(this).attr('style')) {
        $(this).removeAttr('style')
    }
    else {
        $(this).attr('style', 'background-color : ' + color );
    }
})



}
