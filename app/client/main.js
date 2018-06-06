/*
 * File Name: main.js
 * Description: Module creates the initial UI. 
 *----------*
 * node  |  * licensed under the MIT license. | https://raw.githubusercontent.com/nodejs/node/master/LICENSE
 *----------*
 * Copyright (c) 2018: 
 * Authors: Santhosh S
 * Creation Date: 05 June, 2018
 */
var diamondArray = [];
var score = 64;
var content = "";
var count = 1;
var previousArrow;

while (diamondArray.length < 8) {
    var diamondPosition = Math.ceil(Math.random() * 64);
    if (diamondArray.indexOf(diamondPosition) > -1) continue;
    diamondArray[diamondArray.length] = diamondPosition;
}
for (var row = 0; row < 8; row++) {
    for (var column = 0; column < 8; column++) {
        content += "<div class='innerContainer' id='" + count + "' value='[" + (row + 1) + '][' + (column + 1) + "]' onclick='swap(this)'><div class='question'></div></div>";
        count += 1;
    }
    content += "<br>"
}
document.getElementById("container").innerHTML += content;

/*
* Name: swap
* Description: Public method which replaces the question mark with diamond on user click.
* Parameters: e
* @param : event object used to identify matrix 2D co-ordinate and the box that user have clicked on.
* Returns:
* None
* Globals updated: score
* None
*/
window.swap = function (e) {
    if ($('#' + previousArrow).children().attr('class') != "diamond") {
        $('#' + previousArrow).children().removeClass($('#' + previousArrow).children().attr('class'));
    }
    var id = e.id;
    previousArrow = e.id;
    var currentPosition = $(e).attr('value');
    if (diamondArray.includes(parseInt(id))) {
        $('#' + id).children().removeClass("question");
        $('#' + id).children().addClass("diamond");
        score--;
        document.getElementById(id).style.pointerEvents = 'none';
        var index = diamondArray.indexOf(parseInt(id));
        if (index > -1) {
            diamondArray.splice(index, 1);
        }
        if (diamondArray.length == 0) {
            $('#popUpContent').html('<p>Your Score : <span>' + score + '</span></p><button onclick="location.reload();">Play Again!!!</button>');
            $('#popUp').show();
        }
    }
    else {
        guideToDiamond(currentPosition, id);
    }
}

/*
* Name: guideToDiamond
* Description: Public method which replaces the question mark with diamond on user click.
* Parameters: current,id
* @param : current used to identify the current user clicked matrix 2D coordinate and id to identify its equivalent box id.
* Returns:
* None
* Globals updated: score
* None
*/
function guideToDiamond(current, id) {
    var diamondPosition2D = [];
    var difference = [];
    var row, column, diamondRow, diamondColumn, nearDiamond;
    row = current[1];
    column = current[4];
    for (var i = 0; i < diamondArray.length; i++) {
        diamondPosition2D[i] = $('#' + diamondArray[i]).attr('value');
    }
    for (var i = 0; i < diamondArray.length; i++) {
        diamondRow = diamondPosition2D[i][1];
        diamondColumn = diamondPosition2D[i][4];
        difference[i] = Math.abs(row - diamondRow) + Math.abs(column - diamondColumn);
    }
    nearDiamond = difference.indexOf(Math.min.apply(null, difference));

    if (row - diamondPosition2D[nearDiamond][1] != 0) {
        if (row - diamondPosition2D[nearDiamond][1] < 0) {
            $('#' + id).children().removeClass("question");
            $('#' + id).children().addClass("down");
            document.getElementById(id).style.pointerEvents = 'none';
            score--;
        }
        else {
            $('#' + id).children().removeClass("question");
            $('#' + id).children().addClass("up");
            document.getElementById(id).style.pointerEvents = 'none';
            score--;
        }
    }
    else {
        if (column - diamondPosition2D[nearDiamond][4] < 0) {
            $('#' + id).children().removeClass("question");
            $('#' + id).children().addClass("right");
            document.getElementById(id).style.pointerEvents = 'none';
            score--;
        }
        else {
            $('#' + id).children().removeClass("question");
            $('#' + id).children().addClass("left");
            document.getElementById(id).style.pointerEvents = 'none';
            score--;
        }
    }

}


