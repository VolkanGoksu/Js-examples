const form =document.querySelector('form');
const detay = document.querySelector('.detay');
const card = document.querySelector('.card');

const zamanFoto = document.querySelector('img.zaman');
const icon = document.querySelector('.icon img');

const guncelleUI=(veri)=>{
    const sehirDetay = veri.sehirDetay;
    const havaDurumu = veri.havaDurumu;

   
     
    detay.innerHTML= ` <div class="text-muted text-uppercase text-center detay">
    <h5 class="my-3">${sehirDetay.LocalizedName}</h5>
    <div class="my-3">${havaDurumu.WeatherText}</div>
    <divv class="display-4 my-4">
        <span>${havaDurumu.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    </div>`;

    const iconSrc = `img/icons/${havaDurumu.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);
     
    let zamanSrc=null;
     if(havaDurumu.IsDayTime){
         zamanSrc='img/day.svg';
     }else{
         zamanSrc='img/night.svg';
     }
     zamanFoto.setAttribute('src',zamanSrc);


     // let zamanSrc=havaDurumu.IsDayTime?'img/day.svg':'img/night.svg';
     // zamanFoto.setAttribute('src',zamanSrc);

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
    
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();//varsayılan özellikleri yokettik
    const sehir =form.sehir.value.trim();
    //console.log(sehir);

    sehirGuncelle(sehir).then(veri=>{
        guncelleUI(veri);
        console.log(veri);
    })

    form.reset();

    localStorage.setItem('sehir',sehir);
});

const sehirGuncelle= async(sehir)=>{
    const sehirDetay = await sehirGetir(sehir);
    const havaDurumu = await havaDurumuGetir(sehirDetay.Key);

    return{
        sehirDetay,
        havaDurumu
    }
}

if(localStorage.getItem('sehir')){
    sehirGuncelle(localStorage.getItem('sehir')).then(veri=>{
        guncelleUI(veri);
        console.log(veri);
    })
}