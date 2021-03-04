function Personel(ad,birim,gorev){
    this.ad=ad,
    this.birim=birim,
    this.gorev=gorev
}

Personel.prototype.isYap=function(){
    console.log(`${this.ad} işini yaptı`);
}

//Miras alma call metodu 
function Yonetici(ad,birim,gorev,unvan){
    Personel.call(this,ad,birim,gorev)
    this.unvan=unvan;
}
Yonetici.prototype=Object.create(Personel); //personelin iş yap fonksiyonunuda aldık
Yonetici.prototype.personelKov=function(){
    console.log('Personel kovuldu');
}


const personel = new Personel('Volkan','Bilişim','Yazılım');
const yonetici = new Yonetici ('Ayaz','Bilgi işlem','İdare','Müdür');
console.log(yonetici);
console.log(personel);

personel.isYap();
yonetici.personelKov();