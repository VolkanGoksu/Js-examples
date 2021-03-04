class personel{
    constructor(ad,soyad,gorev){
        this.ad = ad,
        this.soyad = soyad,
        this.gorev = gorev
    }
     isYap(){
         console.log(`${this.ad} ${this.gorev} işini gerçekleştirdi`);
          return this; //nesne özelliğini kazandırıyoruz
     }
     toplantiyaGir(){
         console.log(`${this.ad} toplantıya girdi`);
         return this;
     }
}

const personel1 = new personel('Volkan','Göksu','Yazılım');
const personel2 = new personel('Ayaz','Ata','Biliim');
console.log(personel1);
console.log(personel2);

personel1.isYap().toplantiyaGir(); //burda hata alıyoruz isyapın nesne özelliği kazanması lazım
personel2.toplantiyaGir().isYap();