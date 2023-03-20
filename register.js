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
        name : name ,
        email : email,
        phone : phone,
       Address : Address,
       date: date,
       time: time
       }
   // converting object to its real values using JSON.stringify method ,,, and reverse it back as old object 
   // by using JSON.parse(obj)  
    localStorage.setItem(email , JSON.stringify(obj));
    
   
 }

 
 


 // Listen for form submit
// for adding new li node as values put by user.


 const nameInput = document.querySelector('#name');
 const emailInput = document.querySelector('#email');
 const phoneInput = document.querySelector('#phone');
 const AddressInput = document.querySelector('#add');
 const DateInput = document.querySelector('#Date');
 const TimeInput = document.querySelector('#Time1');


const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
   
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');
    

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value} : ${phoneInput.value}: ${AddressInput.value}: ${DateInput.value} : ${TimeInput.value} ` ));
   
   
   
    
    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    AddressInput.value = '';
    TimeInput.value = '';
    DateInput.value = '';
  }
}


 