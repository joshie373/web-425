/*
============================================
; Title: hughes-1.4.js
; Date: 22 December 2019
; Modified By: joshua Hughes
; Description: typescript example
;=============================================
*/
var item = 'Shirt';
var color = 'Blue';
var size = 'Large';
//item description function
function itemDescription(item, color, size) {
    return "Item: \n" + item + "\n   Item Details: Size: " + size + " Color: " + color + " ";
}
console.log(itemDescription(item, size, color));
