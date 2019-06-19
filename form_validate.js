const msg        = document.querySelector('.msg');
const btn        = document.querySelector('.btn');
const nameInput  = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const formId     = document.querySelector('#my-form');  
const userList   = document.querySelector('#users');



btn.addEventListener('click',(e)=>
{



    btn.style.background = 'black';
    btn.style.color = 'white';
    e.preventDefault();
    console.log('btn fired');
    
    if(nameInput.value === '' || emailInput.value === '')
     {
         msg.classList.add('error');
         msg.innerHTML ='please fill fields';

         setTimeout( ()=>msg.remove(),3000);
     }
     else
     {
         msg.innerHTML ='SuccessFully added';
         
        const li= document.createElement('li');

        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}` ) );

      userList.appendChild(li);

        li.addEventListener('click',(e)=>
        {
            e.preventDefault()
            console.log('list clicked');
          
        });

     }

})