function Personel(ad,birim,gorev){
   this.ad=ad,
   this.birim = birim,
   this.gorev=gorev;

   /*this.isYap=function(){   //fonksiyon içinde fonksiyon oluşturma
       console.log('iş yapıldı');
   }*/
}
Personel.prototype.isYap=function(){ //fonksiyon prototype içinde saklanır
    console.log(`${this.ad} işini yaptı`);
}

const personel = new Personel('Volkan','Bilgi İşlem','Yazılım');
console.log(personel);
personel.isYap();