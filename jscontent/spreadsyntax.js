const personeller=['Volkan','Göksu','Ayaz'];
console.log(personeller);

console.log(...personeller); //spreadsyntax ile yazım

const uyeler =[...personeller,'Osman'];
console.log(uyeler);

const calisan={ad:'Ali',yas:'22',birim:'Bilgi İşlem'};
//const calisanKlon=calisan;
//calisanKlon.unvan='Müdür';
//calisan.unvan='Memur';
//console.log(calisanKlon);
//console.log(calisan);        klon yapınca ikiside memur unvanı aldı bu yüzden
const calisanKlon={...calisan};
calisanKlon.unvan='Müdür';
calisan.unvan='Memur';
console.log(calisanKlon);
console.log(calisan);
