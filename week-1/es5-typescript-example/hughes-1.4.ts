/*
============================================
; Title: hughes-1.4.js
; Date: 22 December 2019
; Modified By: joshua Hughes
; Description: typescript example
;=============================================
*/

let item: string = 'Shirt';
let color: string = 'Blue';
let size: string = 'Large';

//item description function
function itemDescription(item:string, color:string, size:string): string {
  return "Item: \n"+ item + "\n   Item Details: Size: " + size + " Color: " + color + " ";
}

console.log(itemDescription(item, size, color));
