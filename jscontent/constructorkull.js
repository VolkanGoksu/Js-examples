class personel{
    constructor(ad,soyad,görev){
        this.ad=ad,
        this.soyad = soyad,
        this.görev = görev
    }
}

const personel1=new personel('Volkan','Göksu','Yazılım');
const personel2 = new personel('Ayaz','ATA','Yazılım');
const personel3 = new personel('Kızıl','Tamu','Bilişim');
console.log(personel1);
console.log(personel2);
console.log(personel3);