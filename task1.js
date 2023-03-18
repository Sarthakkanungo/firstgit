// examine the dom


console.dir(document);
console.log(document.location);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.doctype);
console.log(document.forms);
console.log("DOCUMENT ALL");
console.log(document.all);
console.log(document.all[10]);
var title = document.getElementById("header-title");
var header = document.getElementById("main-header");
console.log(title);
console.log(typeof title);
// innerText  does  follow script or style  - Inner text
console.log(title.innerText);
// text content does not follow script or style  - Inner text  <span style = "display : none";> 123 </span>
console.log(title.textContent);
//title.style.borderBottom = "solid 3px black";
header.style.borderBottom = "solid 3px black";





