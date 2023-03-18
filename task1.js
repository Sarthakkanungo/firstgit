// examine the dom


/*console.dir(document);
console.log(document.location);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.doctype);
console.log(document.forms);
console.log("DOCUMENT ALL");
console.log(document.all);
console.log(document.all[10]);*/



// get element by id

//var title = document.getElementById("header-title");
//var header = document.getElementById("main-header");
//console.log(title);
//console.log(typeof title);
// innerText  does  follow script or style  - Inner text
//console.log(title.innerText);
// text content does not follow script or style  - Inner text  <span style = "display : none";> 123 </span>
//console.log(title.textContent);
//title.style.borderBottom = "solid 3px black";
//header.style.borderBottom = "solid 3px black";
//title.innerHTML =" hello sharpener";




// get element by class name
//var items = document.getElementsByClassName("list-group-item");
//console.log("elementsbyclassname");
//console.log(items);
//console.log(items[1]);
//items[1].textContent = " Hello 2";
/*items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[2].style.background = 'green';
items[3].style.fontWeight = 'bold';*/

/*for(var i = 0; i < items.length;i++)
{
    items[i].style.backgroundColor = "grey";
    items[i].style.fontWeight = 'bold';
}

items[2].style.backgroundColor = 'green';*/

// get element by tag name

 /*var newitem = document.getElementsByTagName('li');
 console.log("elementbytagname");
 console.log(newitem);
 newitem[4].style.backgroundColor = "blue"; 
 newitem[5].style.textDecorationLine ='none';
console.log (newitem);*/

// query selectors

// var itemlist = document.querySelectorAll('.list-group-item');
// var li = document.querySelector('li');


// var seconditemlist = document.querySelector('.list-group-item:nth-child(2)');
// seconditemlist.style.backgroundColor = 'green';


// var thirditemlist = document.querySelector('.list-group-item:nth-child(3)');
// thirditemlist.style.display = 'none';
// console.log("queryselector");
// console.log(li);




// // querySelectorall

// var nodeelement = document.querySelectorAll('.list-group-item');
// console.log("querySelectorAll");
// console.log(nodeelement);
// nodeelement[1].style.color='green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
 
//  for(var i = 0 ; i < odd.length; i++)
//  {
//     odd[i].style.backgroundColor ='green';
//  }



// traversing DOM

// parent node
// var order = document.querySelector('#items');

// order.parentNode.style.backgroundColor = "#f4f4f4"; 
// console.log(order.parentNode.parentNode);
// console.log(order.parentNode.parentNode.parentNode);

 

//parent Element

 var order = document.querySelector('#items');
 //console.log(order.parentNode);
// console.log(order.parentElement);
// order.parentElement.style.backgroundColor = "#f4f4f4"; 
// console.log(order.parentElement.parentElement);
// console.log(order.parentElement.parentElement.parentElement);

// Child Nodes - gives array of nodes with text which is white spaces.

console.log(order.childNodes);
//children  - gives the Html collection without any spaces.
console.log(order.children);


//firstchild
console.log(order.firstChild);
// It will gives us text that is white spaces.
console.log("FirstELEMENTchild",order.firstElementChild);
order.firstElementChild.textContent = "HEllo Item 1";



// last child
console.log(order.lastChild);
console.log(order.lastElementChild);

// nextsibling
console.log(order.nextSibling);
console.log(order.nextElementSibling);

// previous Sibling
console.log(order.previousSibling);
console.log(order.previousElementSibling);
order.previousElementSibling.style.color ='green';

// create element

// create a div 
var newDiv = document.createElement('div');

// add a class
newDiv.className ='hello';


// add an id
newDiv.id = 'hello1';

// set attribute
newDiv.setAttribute('title','Hello Div');


// create  text node
var newDivText = document.createTextNode("Hello World");

// adding text to div
newDiv.appendChild(newDivText);

// inserting text to html 

var container = document.querySelector("header .container");
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv, h1);


