console.log(window);

//Single element
const form =document.getElementById('my-form')

console.log(form);

const querySelector =document.querySelector('h1')

console.log(querySelector);

//Multiple element


console.log(document.querySelectorAll('.item'));


//OR
console.log(document.getElementsByClassName('item'));



//OR
const items =document.querySelectorAll('.items')


console.log(items);

items.forEach((item) =>
  console.log('item-->'+item));

  const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.remove();
ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerText='Brad'
ul.lastElementChild.innerHTML ='Hello'


//DOM Events

const btn =  document.querySelector('.btn');

btn.addEventListener('click', (e)=>
{
  e.preventDefault();
     console.log('click');

     document.querySelector('#my-form')
     .style.background = '#ccc';
});



//validate forms
const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const msg = document.querySelector('.msg');

const myForm = document.querySelector('#my-form');

const btnn =  document.querySelector('.btn');


const userList = document.querySelector('#users');



const itemList = document.querySelector('.items');

btnn.addEventListener('click',onSubmit);


function onSubmit(e)
{


console.log('submit');
  e.preventDefault();

  if(nameInput.value === ''|| emailInput.value === '')
     {
         msg.innerHTML = 'please enter all fields'
         msg.style.background ='red';


         setTimeout(() => msg.remove(), 3000 );
     }

     else {
       console.log('success');

       itemList.remove();

       const li =document.createElement('li');

         li.appendChild(document.createTextNode(nameInput.value));

        ul.appendChild(li);
        
     }

}
