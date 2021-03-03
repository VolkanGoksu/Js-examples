const form = document.querySelector('.add-form');
const liste = document.querySelector('.todos');

function olustur(yapilacak){
    let html = `
     <li class="list-group-item d-flex justify-content-between align-items-center">
     <span>${yapilacak}</span>
     <i class="fa fa-trash delete"></i>
     </li>
    `;
    liste.innerHTML +=html;
}

form.addEventListener('submit',e=>{
    e.preventDefault();
    const yapilacak=form.add.value.trim();
 
   // olustur(yapilacak);
   //inputa boş ekleme yapmamak için
   if(yapilacak.length){
       olustur(yapilacak);
       form.reset();
   }
})

liste.addEventListener('click',e=>{
   if(e.target.classList.contains('fa-trash')){
       e.target.parentElement.remove();
   }
})