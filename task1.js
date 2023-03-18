// // examine the dom


// /*console.dir(document);
// console.log(document.location);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.doctype);
// console.log(document.forms);
// console.log("DOCUMENT ALL");
// console.log(document.all);
// console.log(document.all[10]);*/



// // get element by id

// //var title = document.getElementById("header-title");
// //var header = document.getElementById("main-header");
// //console.log(title);
// //console.log(typeof title);
// // innerText  does  follow script or style  - Inner text
// //console.log(title.innerText);
// // text content does not follow script or style  - Inner text  <span style = "display : none";> 123 </span>
// //console.log(title.textContent);
// //title.style.borderBottom = "solid 3px black";
// //header.style.borderBottom = "solid 3px black";
// //title.innerHTML =" hello sharpener";




// // get element by class name
// //var items = document.getElementsByClassName("list-group-item");
// //console.log("elementsbyclassname");
// //console.log(items);
// //console.log(items[1]);
// //items[1].textContent = " Hello 2";
// /*items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[2].style.background = 'green';
// items[3].style.fontWeight = 'bold';*/

// /*for(var i = 0; i < items.length;i++)
// {
//     items[i].style.backgroundColor = "grey";
//     items[i].style.fontWeight = 'bold';
// }

// items[2].style.backgroundColor = 'green';*/

// // get element by tag name

//  /*var newitem = document.getElementsByTagName('li');
//  console.log("elementbytagname");
//  console.log(newitem);
//  newitem[4].style.backgroundColor = "blue"; 
//  newitem[5].style.textDecorationLine ='none';
// console.log (newitem);*/

// // query selectors

// // var itemlist = document.querySelectorAll('.list-group-item');
// // var li = document.querySelector('li');


// // var seconditemlist = document.querySelector('.list-group-item:nth-child(2)');
// // seconditemlist.style.backgroundColor = 'green';


// // var thirditemlist = document.querySelector('.list-group-item:nth-child(3)');
// // thirditemlist.style.display = 'none';
// // console.log("queryselector");
// // console.log(li);




// // // querySelectorall

// // var nodeelement = document.querySelectorAll('.list-group-item');
// // console.log("querySelectorAll");
// // console.log(nodeelement);
// // nodeelement[1].style.color='green';

// // var odd = document.querySelectorAll('li:nth-child(odd)');
 
// //  for(var i = 0 ; i < odd.length; i++)
// //  {
// //     odd[i].style.backgroundColor ='green';
// //  }



// // traversing DOM

// // parent node
// // var order = document.querySelector('#items');

// // order.parentNode.style.backgroundColor = "#f4f4f4"; 
// // console.log(order.parentNode.parentNode);
// // console.log(order.parentNode.parentNode.parentNode);

 

// //parent Element

//  var order = document.querySelector('#items');
//  //console.log(order.parentNode);
// // console.log(order.parentElement);
// // order.parentElement.style.backgroundColor = "#f4f4f4"; 
// // console.log(order.parentElement.parentElement);
// // console.log(order.parentElement.parentElement.parentElement);

// // Child Nodes - gives array of nodes with text which is white spaces.

// console.log(order.childNodes);
// //children  - gives the Html collection without any spaces.
// console.log(order.children);


// //firstchild
// console.log(order.firstChild);
// // It will gives us text that is white spaces.
// console.log("FirstELEMENTchild",order.firstElementChild);
// //order.firstElementChild.textContent = "HEllo Item 1";
 var abc = document.getElementById('item');
 console.log("THIS IS I AM CHECKING" ,abc.nextElementSibling);



// // last child
// console.log(order.lastChild);
// console.log(order.lastElementChild);

// // nextsibling
// console.log(order.nextSibling);
// console.log(order.nextElementSibling);

// // previous Sibling
// console.log("previous sibling",order.previousSibling);
// console.log(order.previousElementSibling);
// order.previousElementSibling.style.color ='green';

// // create element

// // create a div 
// var newDiv = document.createElement('div');

// // add a class
// newDiv.className ='hello';


// // add an id
// newDiv.id = 'hello1';

// // set attribute
// newDiv.setAttribute('title','Hello Div');


// // create  text node
// var newDivText = document.createTextNode("Hello World");

// // adding text to div
// newDiv.appendChild(newDivText);

// // inserting text to html 

// var container = document.querySelector("header .container");
// var h1 = document.querySelector('header h1');

// console.log(newDiv);
// container.insertBefore(newDiv, h1);

var Editbtn = document.createElement('button');
Editbtn.className = "btn btn-danger btn-sm float-right delete";
 var Editbtntext = document.createTextNode('Edit');
 Editbtn.appendChild(Editbtntext);
 //console.log(Editbtn);

console.log(1);
console.log(1);
var form = document.getElementById('addForm');
var itemlist1 = document.getElementById('items');
var filter = document.getElementById('filter');


//form submit event 
form.addEventListener('submit',addItem);

// remove event
itemlist1.addEventListener('click', removeitem);

// filter event
filter.addEventListener('keyup', filteritems);



// add item
function addItem(e)
{
     e.preventDefault();
    // Get input Value
    var newitem = document.getElementById('item').value;
    
    // create new li
    var li = document.createElement('li');
    
     // Add a class name
     li.className = "list-group-item";

    
    // Add text node with Input Value
    li.appendChild(document.createTextNode(newitem));

    // // create del button element 
        var deletebtn = document.createElement('button');

    // add classes to the btn element
        deletebtn.className = "btn btn-danger btn-sm float-right delete";

    //  add text to button 
         deletebtn.appendChild(document.createTextNode('X'));


         // similarly creating an edit btn 
        var Editbtn = document.createElement('button');
        Editbtn.className = "btn btn-danger btn-sm float-right";
        var Editbtntext = document.createTextNode('Edit');
        Editbtn.appendChild(Editbtntext);  
         
    // append deletebtn to li 
         li.appendChild(deletebtn);
         li.appendChild(Editbtn);
     
    // append li to list
      itemlist1.appendChild(li);

}
      //remove item
      function removeitem(e)
      {
        if(e.target.classList.contains('delete'))
        {
            if(confirm('Are you sure?'))
            {
               var li = e.target.parentElement;
               itemlist1.removeChild(li);
            }
        }
      }


     
// // filter item
// function filteritems(e){
//     // converting text to lowercase
//     var text = e.target.value.toLowerCase();

//    // get lis
//    var items1 = itemlist1.getElementsByTagName('li');
//   // console.log(itemsnames);

//    // convert them to array
//    Array.from(items1).forEach(function(xyz){
//     var itemName = xyz.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1)
//     {
//         xyz.style.display = 'block';
//     }
//     else
//     {
//         xyz.style.display = 'none';
//     }
//    })

// }


