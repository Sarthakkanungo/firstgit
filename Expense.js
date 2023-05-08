
const Formsubmission = document.querySelector('#ExpenseTracker');

// creating local storage for form submission

Formsubmission.addEventListener('submit',saveToLocalStorage);

function saveToLocalStorage(event)
{
    
        event.preventDefault();
        const Expenseamt = event.target.Expense.value;
        const describe   = event.target.describe.value;
        const  category  = event.target.category.value;
        //creating obj to store all values in an object

    const obj = { 
        Expenseamt,
        describe,
        category
       
    }
       


   // converting object to its real values using JSON.stringify method ,,, and reverse it back as old object 
   // by using JSON.parse(obj)  
    localStorage.setItem(obj.Expenseamt , JSON.stringify(obj));
    showUserData(obj);
 }


 function showUserData(obj){
     const parentElem = document.getElementById('users');
     const childELem = document.createElement('li');
     childELem.textContent = obj.Expenseamt + ' _ ' + obj.describe + ' _ ' + obj.category + ' _ ' ;

 
     const deletebutton = document.createElement('input');
     deletebutton.type = "button";
     deletebutton.value = "Delete";
     deletebutton.className ="btn btn-danger btn-sm gx-2";
     const Editbutton = document.createElement('input');
     Editbutton.type = "button";
     Editbutton.className = "btn btn-primary btn-sm gx-2";
     Editbutton.value = " Edit Expense";

     // onclick delete function

       deletebutton.onclick = () => {
        // deleting from local storage
       localStorage.removeItem(obj.Expenseamt);
       // deleting li from ul
       parentElem.removeChild(childELem);

     }
 
     // onclick Edit function
          Editbutton.onclick = () => {
             // deleting from local storage
          localStorage.removeItem(obj.Expenseamt);
           // deleting li from ul 
          parentElem.removeChild(childELem);

          expenseamtInput.value = obj.Expenseamt;
          descriptionInput.value = obj.describe;
          categoryInput.value = obj.category;

      }

     // APPEND this button in "li " that is childElem and then into Ul with id users parentElem
      childELem.appendChild(deletebutton);
      childELem.appendChild( Editbutton);
      
      parentElem.appendChild(childELem);

      
     // parentElem.appendChild(childELem);

      const expenseamtInput = document.querySelector('#expenseamt');
      const descriptionInput = document.querySelector('#description');
      const categoryInput = document.querySelector('#choosecategory');
      // Clear fields
       expenseamtInput.value = '';
       descriptionInput.value = '';
       categoryInput.value = '';
        

   }
 
