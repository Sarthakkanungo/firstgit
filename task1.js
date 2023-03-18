// 
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
var items = document.getElementsByClassName("list-group-item");
for(var i = 0 ; i < items.length ; i++)
{
    // creating edit button 
    var Editbtn = document.createElement('button');
    // adding the same classes except delete class
    Editbtn.className = "btn btn-danger btn-sm float-right ";
    // creating text node to store text
    var Editbtntext = document.createTextNode('Edit');
    // appending text in button
    Editbtn.appendChild(Editbtntext);

    items[i].appendChild(Editbtn)
}
  
  
 

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


