const getYourOwn = document.querySelector('.btn');
const container = document.querySelector('.getCont');

getYourOwn.addEventListener('click', ()=>{
   container.classList.toggle('open') 
})