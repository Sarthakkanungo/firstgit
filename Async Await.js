console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {

const wifeBringingTicket = new Promise((resolve , reject) =>
{
    setTimeout(()=>
    {
        resolve(`ticket`);
    } , 1000)
});


const getPopcorn = new Promise((resolve,reject)=> resolve(`popcorn`))
const getButter = new Promise((resolve,reject)=> resolve(`butter`))
const getcoldDrink = new Promise((resolve,reject)=> resolve(`coldDrink`))

 let ticket = await wifeBringingTicket;
 
 
    console.log(`wife : I have the ${ticket}`);
    console.log('husband we should go in');
    console.log('wife: no i am hungry');
    
    
 //let Popcorn = await getPopcorn;

     //console.log(`husband i got some ${Popcorn}`); 
     console.log('husband we should go in');
     console.log('wife: no i need butter on my popcorn');
     
     
 //let butter = await getButter;
     //console.log(`husband i got some ${butter}`); 
     console.log('husband we should go in');

 //let coldDrink = await getcoldDrink;
     //console.log(`husband i got some ${coldDrink} also dear`); 
     console.log('husband we should go in , we may miss our first few minutes');
  let [Popcorn, butter,coldDrink] = await Promise.all([getPopcorn,getButter,getcoldDrink])
  
  console.log(`${Popcorn} , ${butter} , ${coldDrink}`)
return ticket;
}

preMovie().then((m)=> console.log(`person3: shows ${m}`))
console.log("person4: shows ticket");
console.log("person5: shows ticket");

/* this is task 13 of async and await for delete and create post */

const posts = [

    { title: 'POST1' },

    { title: 'POST2' },

]





 async function createPost(post) {

     try {
           
        const  create =  await new Promise((resolve, reject) => {
          setTimeout(()=>
        {
          posts.push(post);
          console.log(post);
          resolve(post);
        },3000)
        })

      }catch (err)
        {    
          console.log("Some error has occured");
        }
     } 





async function deletePost() {

 try {

    const del = await new Promise((resolve, reject) => {
            setTimeout(()=>
           {
              if (posts.length > 0) 
             {
               const poppedElement = posts.pop();
               console.log("element deleted is " , poppedElement.title)
               resolve(poppedElement);
             }
             else 
              {
                 reject('ERROR')
              }
         } , 5000)
            
    })
 } catch(err)
        {    
           console.log("Array is Empty");
        }
}
   
deletePost() 
createPost({ title: 'new POST 1' })
deletePost()
createPost({ title: 'new POST 2' })
createPost({ title: 'new POST 3' })
deletePost() 
deletePost() 
deletePost() 
deletePost() 