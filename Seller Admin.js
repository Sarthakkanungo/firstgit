<<<<<<< HEAD

const Url = "https://crudcrud.com/api/6d43d8bb24fb4d7b8a79df2673a78e47";

async function AdminPanel(event)
=======
const Url = "https://crudcrud.com/api/03f88475b9b540d29a08f58460bed086";

function AdminPanel(event)
>>>>>>> 44f7ebc5378fa98d529af3af682e57783bdd7d07
{
    event.preventDefault();
    const sellingprice = event.target.Selling.value;
    const productname = event.target.Product.value;
<<<<<<< HEAD
    const category = event.target.category.value;
=======
    const category = event.target.categories.value;
>>>>>>> 44f7ebc5378fa98d529af3af682e57783bdd7d07

    const obj= {
        sellingprice,
        productname,
        category
<<<<<<< HEAD
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
=======
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
>>>>>>> 44f7ebc5378fa98d529af3af682e57783bdd7d07
});


function paneldetails(obj)
{
    document.getElementById('Sp').value="";
    document.getElementById('Pr').value="";
    document.getElementById('Ct').value="";

<<<<<<< HEAD
    const fooditem = document.getElementById('food');
    const skinitem = document.getElementById('skin');
    const Electron = document.getElementById('electronic');

    if(obj.category == "ElectronicItems")
    {
        const child = 
    `<li id=${obj._id}> ${obj.sellingprice}---${obj.productname}---${obj.category}
    <button onclick=RemoveItem('${obj._id}','${obj.category}')> delete </button>
=======
   
    
    const fooditem = document.getElementById('food');
    const skinitem = document.getElementById('skin');
   
    const Electron = document.getElementById('electronic');
   
    if(obj.category == "Electronic Items")
    {
        const child = 
    `<li ${obj._id}> ${obj.sellingprice}---${obj.productname}---${obj.category}
    <button onclick=RemoveItem('${obj._id}')> delete </button>
>>>>>>> 44f7ebc5378fa98d529af3af682e57783bdd7d07
    </li>`
        Electron.innerHTML = Electron.innerHTML + child;
       
    }
<<<<<<< HEAD
    else if(obj.category == "FoodItem")
    {
        const child = 
        `<li id=${obj._id}> ${obj.sellingprice}---${obj.productname}---${obj.category}
        <button onclick=RemoveItem('${obj._id}','${obj.category}')> delete </button>
=======
    else if(obj.category == "Food Item")
    {
        const child = 
        `<li ${obj._id}> ${obj.sellingprice}---${obj.productname}---${obj.category}
        <button onclick=RemoveItem('${obj._id}')> delete </button>
>>>>>>> 44f7ebc5378fa98d529af3af682e57783bdd7d07
        </li>`
        fooditem.innerHTML = fooditem.innerHTML + child;
      
    }

<<<<<<< HEAD
    else if(obj.category == "Skincare")
    { 
        const child = 
        `<li id=${obj._id}> ${obj.sellingprice}---${obj.productname}---${obj.category}
        <button onclick=RemoveItem('${obj._id}','${obj.category}')> delete </button>
=======
    else (obj.category == "Skin care")
    { 
        const child = 
        `<li ${obj._id}> ${obj.sellingprice}---${obj.productname}---${obj.category}
        <button onclick=RemoveItem('${obj._id}')> delete </button>
>>>>>>> 44f7ebc5378fa98d529af3af682e57783bdd7d07
        </li>`
        
        skinitem.innerHTML = skinitem.innerHTML + child;
       
    }

}

<<<<<<< HEAD
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
=======
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
>>>>>>> 44f7ebc5378fa98d529af3af682e57783bdd7d07
