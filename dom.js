"use strict";
// dom manipulation notes
const body = document.body;
const h1 = document.createElement("h1"); //create element
h1.textContent = "robin ";
//append takes in strings, while append child only takes elements
body.append("hello there", "robin");
body.appendChild(h1); //apend child can only take one element

const div = document.createElement("div");
//innertext vs textcontent
/* 
    text content contains everything that is inside element including the spacing and
    indentation of all the things containing inside it. 
    inner text only contains the contents of the text inside the element, displaying it just
    like you would see it inside your html
    
*/
div.innerText = "hello world";
// div.textContent = "hello world2";
body.append(div);
