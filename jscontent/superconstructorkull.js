class Personel{
    constructor(ad,soyad,gorev) {
        this.ad=ad,
        this.soyad=soyad,
        this.gorev=gorev
    }
    isYap(){
        console.log(`${this.ad} ${this.gorev} işlemi gerçekleşti`);
        return this;
    }
    toplantiyaGir(){
        console.log(`${this.ad} toplantıya katıldı`);
        return this;
    }
}

class Yonetici extends Personel{
    constructor(ad,soyad,gorev,unvan){
        super(ad,soyad,gorev)
        this.unvan = unvan;
    }
     personelKov(per){
         calisanlar = calisanlar.filter((p)=>{
            return p.ad!=per.ad
         })
     }
}


const yonetici = new Yonetici('Ayaz','Ata','Yönetici','Müdür');
console.log(yonetici);


const personel1 = new Personel('Volkan','Göksu','Yazılım');
const personel2 = new Personel('Osman','Kurt','Bilişim');
console.log(personel1);
console.log(personel2);

personel1.isYap().toplantiyaGir();
personel2.isYap().toplantiyaGir();


let calisanlar=[personel1,personel2,yonetici];
console.log(calisanlar);

yonetici.personelKov(personel2);
console.log(calisanlar);