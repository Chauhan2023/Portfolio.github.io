const burger=document.querySelector('.reponsive>button>i')
const navbar=document.querySelector('.navbar')
const right=document.querySelector('.right')
burger.addEventListener('click',()=>{
   right.classList.toggle('v-class')
   navbar.classList.toggle('h-nav')
})


const btn=document.querySelector('.click');

btn.addEventListener('click',()=>{
alert("foam is submitted successfully ")
location.reload();

})





//active nav bar


