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



// get element by id

var title = document.getElementById("header-title");
var header = document.getElementById("main-header");
console.log(title);
//console.log(typeof title);
// innerText  does  follow script or style  - Inner text
//console.log(title.innerText);
// text content does not follow script or style  - Inner text  <span style = "display : none";> 123 </span>
//console.log(title.textContent);
//title.style.borderBottom = "solid 3px black";
//header.style.borderBottom = "solid 3px black";
//title.innerHTML =" hello sharpener";




// get element by class name
var items = document.getElementsByClassName("list-group-item");
console.log(items);
//console.log(items[1]);
items[1].textContent = " Hello 2";
/*items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[2].style.background = 'green';
items[3].style.fontWeight = 'bold';*/

for(var i = 0; i < items.length;i++)
{
    items[i].style.backgroundColor = "grey";
    items[i].style.fontWeight = 'bold';
}

items[2].style.backgroundColor = 'green';







