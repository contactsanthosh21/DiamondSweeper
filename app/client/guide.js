/*
 * File Name: guide.js
 * Description: Module shows the arrow direction for the nearest diamond. 
 *----------*
 * node  |  * licensed under the MIT license. | https://raw.githubusercontent.com/nodejs/node/master/LICENSE
 *----------*
 * Copyright (c) 2018: 
 * Authors: Santhosh S
 * Creation Date: 26 September, 2018
 */
let gridObj = require('./grid');
/*
* Name: guideToDiamond
* Description: Public method which replaces the question mark with diamond on user click.
* Parameters: current,id
* @param : current used to identify the current user clicked matrix 2D coordinate and id to identify its equivalent box id.
* Returns: None
* Globals updated: score
* None
*/
let guideToDiamond = (current, id) => {
    let diamondPosition2D = [];
    let difference = [];
    let row, column, diamondRow, diamondColumn, nearDiamond;
    row = current[1];
    column = current[4];
    for (let i = 0; i < gridObj.diamondArray.length; i++) {
        diamondPosition2D[i] = $('#' + gridObj.diamondArray[i]).attr('value');
    }
    for (let i = 0; i < gridObj.diamondArray.length; i++) {
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
            gridObj.score--;
        }
        else {
            $('#' + id).children().removeClass("question");
            $('#' + id).children().addClass("up");
            document.getElementById(id).style.pointerEvents = 'none';
            gridObj.score--;
        }
    }
    else {
        if (column - diamondPosition2D[nearDiamond][4] < 0) {
            $('#' + id).children().removeClass("question");
            $('#' + id).children().addClass("right");
            document.getElementById(id).style.pointerEvents = 'none';
            gridObj.score--;
        }
        else {
            $('#' + id).children().removeClass("question");
            $('#' + id).children().addClass("left");
            document.getElementById(id).style.pointerEvents = 'none';
            gridObj.score--;
        }
    }

}

module.exports=guideToDiamond;