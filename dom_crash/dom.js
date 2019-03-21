const val = document.querySelector('#form-control');
const btn = document.querySelector('#btn');
const searchBtn = document.querySelector('#search');
const form = document.querySelector('.container');
const navbar = document.querySelector('.navbar');
const body_h1 = document.querySelector('#body-h1');
const itemList =document.querySelector(".items");
const li =document.createElement('li');
const item = document.querySelector('.item');

const msg = document.querySelector('#msg');




//forEach
btn.addEventListener('click',(e)=>
{
  e.preventDefault();
  console.log('btn'+val.value);
})


btn.addEventListener('click', onSubmit);



function onSubmit()
{
    if(val.value === '')
    {
      msg.innerHTML = 'please enter all fields'
      msg.style.background ='red';


      setTimeout(() => msg.remove(), 3000 );

      itemList.remove();
    }

    else {
      msg.innerHTML='Added SuccessFully'
      msg.style.background='grey';

        setTimeout(() => msg.remove(), 3000 );




const li =document.createElement('li');

  li.appendChild(document.createTextNode(val.value));

  itemList.appendChild(li);



    }

}


item.addEventListener('click', click);

function click()
{
    alert('clcik'+li)
}



searchBtn.addEventListener('blur', search);


function search()
{
  console.log('search'+searchBtn.value);




}
