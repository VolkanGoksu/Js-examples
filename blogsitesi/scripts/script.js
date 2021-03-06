const makaleler = document.querySelector('.guides');
const cikisLinkleri = document.querySelectorAll('.logged-out');
const girisLinkleri = document.querySelectorAll('.logged-in');

const uyelikDetay=document.querySelector('.account-details');


const kullaniciYukle=(kullanici)=>{
    if(kullanici){
        let html=`
           <div>
             Mail:<b>${kullanici.email}</b>
           </div>
        `;
        uyelikDetay.innerHTML=html;
        girisLinkleri.forEach(item=>item.style.display='block');
        cikisLinkleri.forEach(item=>item.style.display='none');
    }
    else{
        girisLinkleri.forEach(item=>item.style.display='none');
        cikisLinkleri.forEach(item=>item.style.display='block');

    }
}


const makalelerYukle=(data)=>{
   if(data.length){
    let html='';
    data.forEach(doc=>{
        const makale=doc.data();
        //console.log(makale);

        const li=`
        <li>
           <div class="collapsible-header grey lighten-4">${makale.baslik}</div>
           <div class="collapsible-body"><span>${makale.icerik}</span></div>
        </li>
        `;
        html +=li;
    });
    makaleler.innerHTML=html;
   }
   else{
       makaleler.innerHTML='<h3>Makaleler için giriş yap</h3>';
   }
}



document.addEventListener('DOMContentLoaded',function(){
    var modallar=document.querySelectorAll('.modal');
    M.Modal.init(modallar);

    var makaleler=document.querySelectorAll('.collapsible');
    M.Collapsible.init(makaleler);
})