const {JSDOM}  = require('jsdom');
const {window} = new JSDOM('<!doctype html><html><body><div id="container"></div></body></html>');
global.document = window.document;
global.window = window;
global.$ = require('jquery');


const assert = require('assert');
const gridObj = require('../app/client/grid');
let swap = require("../app/client/diamond");

describe("Grid Initial UI", () => {
  it(" diamond array holds 8 random diamond positions", () => {
    assert.equal(gridObj.diamondArray.length, 8);
  })

  it("content has been generated", () => {
    assert.notEqual(gridObj.content, "");
  })

  it("cells count has been generated", () => {
    assert.equal(gridObj.count,64);
  })
})

describe("Click Event", () => {
  it("not happened", () => {
    assert.equal($('#' + 10).children().attr('class'),'question');
  })
  it("happened on grid cell of 10", () => {
    swap({'id':10,'value':'[2][2]'});
    assert.equal(gridObj.previousArrow,10);
  })
  it("updated the UI part", () => {
      assert.notEqual($('#' + 10).children().attr('class'),'question');
  })
  it("reduces the score value", () => {
    assert.equal(gridObj.score,63);
  })
  it("disables the click event on already clicked cell", () => {
    assert.equal($('#'+10).css("pointer-events"),'none');
  })
})
