//set ile bir dizide bulunan elemanları tekilleştirebiliriz yani benzersiz olur
//birden fazla tekrar eden eleman olmaz

const dizi1=['ali','volkan','osman','Ali','öykü'];
console.log(dizi1);

const dizi2=new Set(['ali','volkan','osman','ali','öykü']);
console.log(dizi2);

const dizi3= new Set(dizi1);
console.log(dizi3);

const sayilar = new Set();
//console.log(sayilar);

sayilar.add(11);
sayilar.add(30).add(11);
sayilar.delete(30);

console.log(sayilar.size);
console.log(sayilar.has(30));//sayının içerisinde var olup olmadıgını verir
console.log(sayilar.clear());
console.log(sayilar);