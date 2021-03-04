//tarihi formatlayabilmemiz için bir kütüphane
let simdikiZaman=new Date();

let formatTarih = dateFns.format(simdikiZaman,'dddd do mm YYYY');
console.log(formatTarih); //string değer çıktı verir
console.log(simdikiZaman.getFullYear()); //number değer çıktı verir