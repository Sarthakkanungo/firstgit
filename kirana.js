const url = "https://crudcrud.com/api/9ac823f6f1da47619015b7eac7bb9cec";

let totalbillprice  = 0;

async function InventoryList(event) {
    event.preventDefault();
    const product = event.target.Product.value;
    const price = event.target.Price.value;
    const quantity = event.target.Quantity.value;


    const obj = {
        product,
        price,
        quantity
    }

    try {
        const response = await axios.post(`${url}/Kirana`, obj);

        console.log(response.data);
        showItemsonScreen(response.data);

    } catch (err) {
        document.body.innerHTML = document.body.innerHTML + "<h4>Some Error Happened</h4>";
        console.log(err);
    }

};

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const getdetail = await axios.get(`${url}/Kirana`)

        console.log(getdetail);
        for (var i = 0; i < getdetail.data.length; i++) {
            showItemsonScreen(getdetail.data[i]);
        }
    } catch (err) {
        document.body.innerHTML = document.body.innerHTML + "<h4>Some Error Happened</h4>";
        console.log(err);
    }

})

function showItemsonScreen(item) {


    document.getElementById('product').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';

    const parentNode1 = document.getElementById('ItemList');
    const child =
        `<li id=${item._id}> ${item.product} - ${item.price} Rs - <span>${item.quantity}<span>
            <button onclick=buyOne('${item._id}','${item.quantity}',${item.price})>Buy 1</button> 
            <button onclick=buyTwo('${item._id}','${item.quantity}',${item.price})>Buy 2</button>
            <button onclick=buyThree('${item._id}','${item.quantity}',${item.price})>Buy 3</button>
            </li>`

    parentNode1.innerHTML = parentNode1.innerHTML + child;

}


async function showUpdatedItems(itemid, quantity) {
    try {
        const show = await axios.get(`${url}/Kirana/${itemid}`)

        console.log(show.data);

        show.data.quantity = quantity;

        showItemsonScreen(show.data);

    } catch (err) {
        console.log(err)
    }


}

function buyOne(itemid, quantity, price) {
    if (quantity < 1) {
        alert("Item not available")
    }
    quantity -= 1;
    
    const element = document.getElementById(itemid);
    const parent = document.getElementById('ItemList');
    parent.removeChild(element);
    showUpdatedItems(itemid, quantity);
    totalPrice(1*price);
}

function buyTwo(itemid, quantity, price) {
    if (quantity < 2) {
        alert("Item not available")
    }
    quantity -= 2;
    
    const element = document.getElementById(itemid);
    const parent = document.getElementById('ItemList');
    parent.removeChild(element);
    showUpdatedItems(itemid, quantity);
    totalPrice(2*price);
}

function buyThree(itemid, quantity, price) {
    if (quantity < 3) {
        alert("Item not available")
    }
    quantity -= 3;
    
    const element = document.getElementById(itemid);
    const parent = document.getElementById('ItemList');
    parent.removeChild(element);
    showUpdatedItems(itemid, quantity);
    totalPrice(3*price);
}


function totalPrice(cost)
{  
    totalbillprice += cost;
    const totalCostElement = document.getElementById('Totalcost');
    totalCostElement.textContent = totalbillprice ;
}

