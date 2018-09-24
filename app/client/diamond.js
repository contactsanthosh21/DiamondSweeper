/*
 * File Name: diamond.js
 * Description: Module replaces the question mark with diamond. 
 *----------*
 * node  |  * licensed under the MIT license. | https://raw.githubusercontent.com/nodejs/node/master/LICENSE
 *----------*
 * Copyright (c) 2018: 
 * Authors: Santhosh S
 * Creation Date: 24 September, 2018
 */
import gridObj from './grid';
import guideToDiamond from "./guide";
/*
* Name: swap
* Description: Public method which replaces the question mark with diamond on user click.
* Parameters: e
* @param : event object used to identify matrix 2D co-ordinate and the box that user have clicked on.
* Returns: None
* Globals updated: score
* None
*/
window.swap = (e) => {
    console.log(gridObj.previousArrow);
    if ($('#' + gridObj.previousArrow).children().attr('class') != "diamond") {
        $('#' + gridObj.previousArrow).children().removeClass($('#' + gridObj.previousArrow).children().attr('class'));
    }
    let id = e.id;
    gridObj.previousArrow = e.id;
    let currentPosition = $(e).attr('value');
    if (gridObj.diamondArray.includes(parseInt(id))) {
        $('#' + id).children().removeClass("question");
        $('#' + id).children().addClass("diamond");
        gridObj.score--;
        document.getElementById(id).style.pointerEvents = 'none';
        let index = gridObj.diamondArray.indexOf(parseInt(id));
        if (index > -1) {
            gridObj.diamondArray.splice(index, 1);
        }
        if (gridObj.diamondArray.length == 0) {
            $('.modal-title').html('<p>Your Score : <span>' + gridObj.score + '</span></p>');
            $('#myModal').modal('show');
        }
    }
    else {
        guideToDiamond(currentPosition, id);
    }
}
export default window.swap;