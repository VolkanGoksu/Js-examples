const tarih = new Date();
console.log(tarih);

let yil=tarih.getFullYear();
let ay=tarih.getMonth();
let gun = tarih.getDay();
console.log('saat '+tarih.getHours());
console.log('dakika '+tarih.getMinutes());
console.log('saniye ',+tarih.getSeconds());

console.log(tarih.toDateString()); // saat olmadan tarihi yakalamak
console.log(tarih.toTimeString()); //saati yakala
console.log(tarih.toLocaleString());
console.log(tarih.toLocaleDateString());
console.log(tarih.getTime());