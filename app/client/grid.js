/*
 * File Name: grid.js
 * Description: Module that creates and shows the initial UI. 
 *----------*
 * node  |  * licensed under the MIT license. | https://raw.githubusercontent.com/nodejs/node/master/LICENSE
 *----------*
 * Copyright (c) 2018: 
 * Authors: Santhosh S
 * Creation Date: 24 September, 2018
 */
/*
* Name: grid
* Description: Public method which creates and shows the initial UI.
* Parameters: None
* @param : None
* Returns: None
* Globals updated: None
* None
*/
function grid() {
    this.diamondArray = [];
    this.score = 64;
    this.content = "";
    this.count = 1;
    this.previousArrow;

    while (this.diamondArray.length < 8) {
      let diamondPosition = Math.ceil(Math.random() * 64);
      if (this.diamondArray.indexOf(diamondPosition) > -1) continue;
      this.diamondArray[this.diamondArray.length] = diamondPosition;
    }
    for (let row = 0; row < 8; row++) {
      for (let column = 0; column < 8; column++) {
        this.content += "<div class='innerContainer' id='" + this.count + "' value='[" + (row + 1) + '][' + (column + 1) + "]' onclick='swap(this)'><div class='question'></div></div>";
        this.count += 1;
      }
      this.content += "<br>"
    }
    document.getElementById("container").innerHTML += this.content;
};

let gridObj = new grid();
export default gridObj;
