// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');

// creating local storage for form submission

myForm.addEventListener('submit' ,saveToLocalStorage);

function saveToLocalStorage(event)
{
    
       event.preventDefault();
        const name = event.target.username.value;
        const email = event.target.emailid.value;
        const phone = event.target.Phoneno.value;
        const Address = event.target.Address.value;
        const date = event.target.date.value;
        const time = event.target.time.value;


        //creating obj to store all values in an object

    const obj = { 
        name : name,
        email : email,
        phone : phone,
        Address : Address,
        date : date,
        time : time
      }
       


   // converting object to its real values using JSON.stringify method ,,, and reverse it back as old object 
   // by using JSON.parse(obj)  
     
        
                //  localStorage.setItem(obj.email , JSON.stringify(obj));
                // showUserData(obj);


             //  commenting the locaL storage and making call to crud sever using axios api
             
             
             axios.post("https://crudcrud.com/api/9d3033edfa144854bb89e3514638bb08/BookAnAppointment",obj)
              .then((response)=>
              {
                showUserData(response.data);
                console.log(response);
              }).catch((err) =>
              {
                document.body.innerHTML = document.body.innerHTML + "<h4>Some Error Happened</h4>";
                console.log(err);
              })

          
 }


 window.addEventListener("DOMContentLoaded" , ()=>
 {
   axios.get("https://crudcrud.com/api/9d3033edfa144854bb89e3514638bb08/BookAnAppointment")
   .then((response)=>
   {
     console.log(response);
     for(var i = 0; i < response.data.length ; i++)
     {
       showUserData(response.data[i]);
     }

   }).catch((err) =>
   {
     
     console.log(err);


   })

 })


 function showUserData(obj){
     const parentElem = document.getElementById('users');
     const childELem = document.createElement('li');
     childELem.textContent = obj.name + ' _ ' + obj.email + ' _ ' + obj.phone + ' _ ' + obj.Address + ' _ ' + obj.date + ' _ ' + obj.time ;
 
 
     const deletebutton = document.createElement('input');
     deletebutton.type = "button";
     deletebutton.value = " delete";
     const Editbutton = document.createElement('input');
     Editbutton.type = "button";
     Editbutton.value = " Edit";

     // onclick delete function

       deletebutton.onclick = () => {
        // deleting from local storage
       localStorage.removeItem(obj.email);
       // deleting li from ul
       parentElem.removeChild(childELem);

     }
 
     // onclick Edit function
          Editbutton.onclick = () => {
             // deleting from local storage
          localStorage.removeItem(obj.email);
           // deleting li from ul 
          parentElem.removeChild(childELem);

          nameInput.value = obj.name;
          emailInput.value = obj.email;
          phoneInput.value = obj.phone;
          AddressInput.value = obj.Address;
          TimeInput.value = obj.time;
          DateInput.value = obj.date;


      }

     // APPEND this button in "li " that is childElem and then into Ul with id users parentElem
      childELem.appendChild(deletebutton);
      parentElem.appendChild(childELem);

      childELem.appendChild( Editbutton);
      parentElem.appendChild(childELem);

      const nameInput = document.querySelector('#name');
      const emailInput = document.querySelector('#email');
      const phoneInput = document.querySelector('#phone');
      const AddressInput = document.querySelector('#add');
      const DateInput = document.querySelector('#Date');
      const TimeInput = document.querySelector('#Time1');

      // Clear fields
          nameInput.value = '';
          emailInput.value = '';
          phoneInput.value = '';
          AddressInput.value = '';
          TimeInput.value = '';
          DateInput.value = '';

   }




 // Listen for form submit
// for adding new li node as values put by user.

//  myForm.addEventListener('submit', showUserData); 
//  const nameInput = document.querySelector('#name');
//  const emailInput = document.querySelector('#email');
//  const phoneInput = document.querySelector('#phone');
//  const AddressInput = document.querySelector('#add');
//  const DateInput = document.querySelector('#Date');
//  const TimeInput = document.querySelector('#Time1');



// const userList = document.querySelector('#users');


// function showUserData(obj) {
//     obj.preventDefault();
   
//     // Create new list item with user
//     const li = document.createElement('li');
//     const btn = document.createElement('button');
//     const btntext =document.createTextNode('delete');
   
   

//     // Add text node with input values
//     li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value} : ${phoneInput.value}: ${AddressInput.value}: ${DateInput.value} : ${TimeInput.value} ` ));
  
//      // adding text to btn
//       btn.appendChild(btntext);
//      // adding li to btn
//       li.appendChild(btn);
    
//      // Append to ul
//       userList.appendChild(li);
//      // delete button
//         btn.onclick =() => {
//         userList.removeChild(li);
//         localStorage.removeItem(obj.email);
//       }
//     // Clear fields
//     nameInput.value = '';
//     emailInput.value = '';
//     phoneInput.value = '';
//     AddressInput.value = '';
//     TimeInput.value = '';
//     DateInput.value = '';
  
// }


 