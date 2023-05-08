const Url = "https://crudcrud.com/api/03f88475b9b540d29a08f58460bed086";

function AdminPanel(event)
{
    event.preventDefault();
    const sellingprice = event.target.Selling.value;
    const productname = event.target.Product.value;
    const category = event.target.categories.value;

    const obj= {
        sellingprice,
        productname,
        category
    }

    axios.post(`${Url}/adminpanel`, obj)
   
    .then((response) => {
        console.log(response);
        paneldetails(response.data);
    })

    .catch((err) => {
        console.log(err)
    })
};

window.addEventListener("DOMContentLoaded" , ()=>{
    axios.get(`${Url}/adminpanel`)
    .then((response) => {
        console.log(response)

        for (var i=0; i<response.data.length; i++) {
           paneldetails(response.data[i])
        }
    })

    .catch((error) => {
        console.log(error)
    })
});


function paneldetails(obj)
{
    document.getElementById('Sp').value="";
    document.getElementById('Pr').value="";
    document.getElementById('Ct').value="";

   
    
    const fooditem = document.getElementById('food');
    const skinitem = document.getElementById('skin');
   
    const Electron = document.getElementById('electronic');
   
    if(obj.category == "Electronic Items")
    {
        const child = 
    `<li ${obj._id}> ${obj.sellingprice}---${obj.productname}---${obj.category}
    <button onclick=RemoveItem('${obj._id}')> delete </button>
    </li>`
        Electron.innerHTML = Electron.innerHTML + child;
       
    }
    else if(obj.category == "Food Item")
    {
        const child = 
        `<li ${obj._id}> ${obj.sellingprice}---${obj.productname}---${obj.category}
        <button onclick=RemoveItem('${obj._id}')> delete </button>
        </li>`
        fooditem.innerHTML = fooditem.innerHTML + child;
      
    }

    else (obj.category == "Skin care")
    { 
        const child = 
        `<li ${obj._id}> ${obj.sellingprice}---${obj.productname}---${obj.category}
        <button onclick=RemoveItem('${obj._id}')> delete </button>
        </li>`
        
        skinitem.innerHTML = skinitem.innerHTML + child;
       
    }

}

function RemoveItem(obj)
{

   
    axios.delete(`${Url}/adminpanel/${obj}`)
        .then((res)=>{
        console.log("successfully deleted" + res);
        }).catch((err) =>
        {
        console.log(" Finding Difficult to delete user from backend ")
        })

 } 