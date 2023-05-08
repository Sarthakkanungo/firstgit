
const Url = "https://crudcrud.com/api/6d43d8bb24fb4d7b8a79df2673a78e47";

async function AdminPanel(event)
{
    event.preventDefault();
    const sellingprice = event.target.Selling.value;
    const productname = event.target.Product.value;
    const category = event.target.category.value;

    const obj= {
        sellingprice,
        productname,
        category
    };

    try {
        const response = await axios.post(`${Url}/adminpanel`, obj);
        console.log(response);
        paneldetails(response.data);
    } catch (err) {
        console.log(err);
    }
};

window.addEventListener("DOMContentLoaded" , async ()=>{
    try {
        const response = await axios.get(`${Url}/adminpanel`);
        console.log(response);
        for (var i=0; i<response.data.length; i++) {
           paneldetails(response.data[i]);
        }
    } catch (error) {
        console.log(error);
    }
});


function paneldetails(obj)
{
    document.getElementById('Sp').value="";
    document.getElementById('Pr').value="";
    document.getElementById('Ct').value="";

    const fooditem = document.getElementById('food');
    const skinitem = document.getElementById('skin');
    const Electron = document.getElementById('electronic');

    if(obj.category == "ElectronicItems")
    {
        const child = 
    `<li id=${obj._id}> ${obj.sellingprice}---${obj.productname}---${obj.category}
    <button onclick=RemoveItem('${obj._id}','${obj.category}')> delete </button>
    </li>`
        Electron.innerHTML = Electron.innerHTML + child;
       
    }
    else if(obj.category == "FoodItem")
    {
        const child = 
        `<li id=${obj._id}> ${obj.sellingprice}---${obj.productname}---${obj.category}
        <button onclick=RemoveItem('${obj._id}','${obj.category}')> delete </button>
        </li>`
        fooditem.innerHTML = fooditem.innerHTML + child;
      
    }

    else if(obj.category == "Skincare")
    { 
        const child = 
        `<li id=${obj._id}> ${obj.sellingprice}---${obj.productname}---${obj.category}
        <button onclick=RemoveItem('${obj._id}','${obj.category}')> delete </button>
        </li>`
        
        skinitem.innerHTML = skinitem.innerHTML + child;
       
    }

}

async function RemoveItem(userid,category)
{

    try {
        const res = await axios.delete(`${Url}/adminpanel/${userid}`);
        removefromscreen(userid, category);
        console.log("successfully deleted" + res.data);
    } catch (err) {
        console.log("Finding Difficult to delete user from backend ");
    }
 } 

function removefromscreen(userid,category)
 {
    if(category==="ElectronicItems")
        {
            var parent = document.getElementById('electronic');
        }
   else if(category==="FoodItem")
        {
            var parent = document.getElementById('food');
        }
  else if(category==="Skincare")
        {
            var parent = document.getElementById('skin');
        }

     const childTobeDeleted = document.getElementById(userid);
     parent.removeChild(childTobeDeleted);
 }
