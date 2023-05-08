const url ="https://crudcrud.com/api/602873fdb3c24bcbbb0e76bd95f0cf28";

function InventoryList(event)
{
    event.preventDefault();
    const product = event.target.Product.value;
    const price = event.target.Price.value;
    const quantity = event.target.Quantity.value;


    const obj = {
        product,
        price,
        quantity
    }

    axios.post("https://crudcrud.com/api/602873fdb3c24bcbbb0e76bd95f0cf28/Kirana", obj)
    .then((response) =>
    {
        console.log(response);
        showItems(response.data);
    })
    .catch((error)=>
    {
        document.body.innerHTML = document.body.innerHTML + "<h4>Some Error Happened</h4>";
        console.log(error);
    })
    
}

window.addEventListener("DOMContentLoaded", ()=>
{
    axios.get("https://crudcrud.com/api/602873fdb3c24bcbbb0e76bd95f0cf28/Kirana")
    .then((response) =>
    {
        console.log(response);
        for(var i = 0 ; i <response.data.length ; i++)
        {
            showItems(response.data[i]);
        }
    })
    .catch((error) => {
        console.log(error)
    })
});

function showItems(item)
{
    
     
        document.getElementById('product').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value = '';

        const parentNode1 = document.getElementById('ItemList');
        const child = 
        `<li id=${item._id}> ${item.product} - ${item.price} Rs - <span>${item.quantity}<span>
        <button onclick=buyOne('${item._id}','${item.quantity}')>Buy 1</button> </li>` 
        // <button onclick=buyTwo('${item._id}',${item.Quantity},'${item.Price}')>Buy 2</button>
        // <button onclick=buyThree('${item._id}',${item.Quantity},'${item.Price}')>Buy 3</button>
             

        parentNode1.innerHTML = parentNode1.innerHTML + child;

}


function showUpdatedItems(itemid,quantity)
{
    axios.get(`${url}/Kirana/${itemid}`)
    .then((response) => {
        console.log(response.data);
        
        response.data.quantity=quantity;
        
        showItems(response.data);

    })
    .catch((err) => {
        console.log(err)
    })
}


function buyOne(itemid,quantity)
{
   if(quantity < 1)
   {
     alert("Item not available")
   }
  quantity -= 1;
   const element = document.getElementById(itemid);
   const parent  = document.getElementById('ItemList');
   parent.removeChild(element);
   showUpdatedItems(itemid,quantity);
}
 function totalprice(itemid,quantity,price)
 {

 }

