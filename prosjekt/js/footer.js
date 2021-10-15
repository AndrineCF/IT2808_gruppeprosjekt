/* links to footer */
const footer = document.getElementById('footer');

var mainNode = document.createElement('div'); // a variable to make the div element.

var node = document.createElement('div'); // a variable to make the div element.
var textnode = document.createTextNode('+47-955-5765-1 nytthjemfordyr@gmail.com'); 
node.appendChild(textnode); // the textnode is now a child of div
mainNode.appendChild(node); 

var node = document.createElement('div'); // a variable to make the div element.
var textnode = document.createTextNode('@ 2021 Nytt hjem for dyr'); 
node.appendChild(textnode);
mainNode.appendChild(node);  

document.getElementById('footer').appendChild(mainNode); // the div is now a child of the footer

