const store = document.querySelector('#Store');

store.addEventListener('submit', generalstoreitem);


function generalstoreitem(event) {
    event.preventDefault();
    const ItemName = event.target.ItemName.value;
    const ItemDescription = event.target.ItemDescription.value;
    const ItemPrice = event.target.ItemPrice.value;
    const ItemQuantity = event.target.ItemQuantity.value;


    const obj = {
        "ItemName": ItemName,
        "ItemDescription": ItemDescription,
        "ItemPrice": ItemPrice,
        "ItemQuantity": ItemQuantity

    }

    axios.post("https://crudcrud.com/api/602873fdb3c24bcbbb0e76bd95f0cf28/GeneralStore", obj)
        .then( (response) => {
            ListonScreen(response.data);
            console.log(response);
        }).catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4>Some Error Happened</h4>";
            console.log(err);
        })


}


window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/602873fdb3c24bcbbb0e76bd95f0cf28/GeneralStore")
        .then((response) => {
            console.log(response);

            for (var i = 0; i < response.data.length; i++) {
                ListonScreen(response.data[i]);
            }

        }).catch((err) => {

            console.log(err);
        })

})

function RemainingStock(obj) {

    const parentElem = document.getElementById('stockdetail');
 
    const child = `<li id='${obj._id}''> ${obj.ItemName} --> ${obj.ItemDescription} --> ${obj.ItemPrice} --> ${obj.ItemQuantity}</li>`
    // const childELem = document.createElement('li');
    // childELem.textContent = obj.ItemName + ' _ ' + obj.ItemDescription + ' _ ' + obj.ItemPrice + ' _ ' + obj.ItemQuantity;
    parentElem.innerHTML = parentElem.innerHTML + child;


}





function ListonScreen(obj) {
    const parentElem = document.getElementById('product');
    const childELem = document.createElement('li');
    childELem.textContent = obj.ItemName + ' _ ' + obj.ItemDescription + ' _ ' + obj.ItemPrice + ' _ ' + obj.ItemQuantity;

    const buy1 = document.createElement('input');
    buy1.type = "button";
    buy1.value = "Buy 1";
    let q = 0;
    buy1.onclick = () => {

        q = q + 1;
        axios.put(`https://crudcrud.com/api/602873fdb3c24bcbbb0e76bd95f0cf28/GeneralStore/${obj._id}`, {
            "ItemName": obj.ItemName,
            "ItemDescription": obj.ItemDescription,
            "ItemPrice": obj.ItemPrice,
            "ItemQuantity": obj.ItemQuantity - q
        })
            .then((response) => {
                console.log(response);
                axios.get(`https://crudcrud.com/api/602873fdb3c24bcbbb0e76bd95f0cf28/GeneralStore/${obj._id}`)
                    .then((res) => {
                       // updatequantity(res.data.quantity,res.data._id)
                        RemainingStock(res.data);
                    }).catch(err => console.log(err))

            }).catch((err) => {
                document.body.innerHTML = document.body.innerHTML + "<h4>Some Error Happened</h4>";
                console.log(err);
            })


    }

    childELem.appendChild(buy1);
    parentElem.appendChild(childELem);


    const buy2 = document.createElement('input');
    buy2.type = "button";
    buy2.value = "Buy 2";

    buy2.onclick = () => {
        q = q + 2;
        axios.put(`https://crudcrud.com/api/602873fdb3c24bcbbb0e76bd95f0cf28/GeneralStore/${obj._id}`,
            {
                "ItemName": obj.ItemName,
                "ItemDescription": obj.ItemDescription,
                "ItemPrice": obj.ItemPrice,
                "ItemQuantity": obj.ItemQuantity - q
            })
            .then((response) => {

                console.log(response);
                axios.get(`https://crudcrud.com/api/602873fdb3c24bcbbb0e76bd95f0cf28/GeneralStore/${obj._id}`)
                    .then((res) => {
                        RemainingStock(res.data);
                    }).catch(err => console.log(err))
            }).catch((err) => {
                document.body.innerHTML = document.body.innerHTML + "<h4>Some Error Happened</h4>";
                console.log(err);
            })

    }

    childELem.appendChild(buy2);
    const buy3 = document.createElement('input');
    buy3.type = "button";
    buy3.value = "Buy 3";



    buy3.onclick = () => {

        q = q + 3;
        axios.put(`https://crudcrud.com/api/602873fdb3c24bcbbb0e76bd95f0cf28/GeneralStore/${obj._id}`,
            {
                "ItemName": obj.ItemName,
                "ItemDescription": obj.ItemDescription,
                "ItemPrice": obj.ItemPrice,
                "ItemQuantity": obj.ItemQuantity - q
            })
            .then((response) => {
                console.log(response);
                axios.get(`https://crudcrud.com/api/602873fdb3c24bcbbb0e76bd95f0cf28/GeneralStore/${obj._id}`)
                    .then((res) => {
                        RemainingStock(res.data);
                    }).catch(err => console.log(err))
            }).catch((err) => {
                document.body.innerHTML = document.body.innerHTML + "<h4>Some Error Happened</h4>";
                console.log(err);
            })

    }

    childELem.appendChild(buy3);

    parentElem.appendChild(childELem);

}
