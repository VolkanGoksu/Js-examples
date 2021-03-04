class Personel{
    constructor(ad,soyad,gorev){
        this.ad=ad,
        this.soyad=soyad,
        this.gorev=gorev
    }
    isYap(){
        console.log(`${this.ad} ${this.gorev} işlemi gerçekleşti`);
        return this;
    }
    toplantiyaGir(){
        console.log(`${this.ad} toplantıya girdi`);
        return this;
    }
}

//personelden miras aldırma
class Yonetici extends Personel{

    personelKov(per){
        calisanlar = calisanlar.filter((p)=>{
            return p.ad!=per.ad;
        })
    }
};




const yonetici = new Yonetici('Ayaz','Ata','Yönetici');
console.log(yonetici);
const personel1 = new Personel('Volkan','Göksu','Yazılım');
const personel2 = new Personel('Osman','Akif','Bilişim');
console.log(personel1);


let calisanlar=[personel1,personel2,yonetici];
console.log(calisanlar);

yonetici.personelKov(personel2); //personel2 yi kovduk
console.log(calisanlar);

yonetici.personelKov(yonetici);  //kendinide kov :DD
console.log(calisanlar); 