var form = document.getElementById('addForm');
var itemlist1 = document.getElementById('items');


//form submit event 
form.addEventListener('submit',addItem);

// add item
function addItem(e)
{
     e.preventDefault();
    // Get input Value
    var newitem = document.getElementById('item');

    // create new li
    var li = document.createElement('li');
    
     // Add a class name
     li.className = "list-group-item";
     console.log(1);

}