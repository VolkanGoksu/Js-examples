const simdikiZaman=new Date();

let eskiTarih=new Date(2020,2,21);
console.log(simdikiZaman,eskiTarih);

let fark1=simdikiZaman-eskiTarih;
console.log(fark1);

let fark2=simdikiZaman.getTime()-eskiTarih.getTime();
console.log(fark2);

//kaç dakika geçtiğini bul
let dakika = Math.round(fark1/1000/60);
console.log(dakika);

let saat = Math.round(dakika/60);
console.log(saat);

let gun =Math.round(saat/24);
console.log(gun);

let timeStamp=new Date().getTime();
console.log(timeStamp);

console.log(new Date(timeStamp)); //timestap ile bildiğimiz bir tarihe eriştik