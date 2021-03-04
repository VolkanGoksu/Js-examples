/*
const karesiniAl=(sayi1,sayi2)=>{
    console.log(sayi1,sayi2);
    let dizi = [sayi1,sayi2];

    return dizi.map((say)=>{
        return say*say
    })
};

console.log(karesiniAl(3,5));
*/ //farklı bir parametre kullanamadığımız ve kod kalabalığı var 

//res parametreleri ile
//sınırsız sayıda sayının karesini alan 
const karesiniAl2=(...sayilar)=>{
  console.log(sayilar);
  return sayilar.map(sayi=>sayi*sayi);
};
console.log(karesiniAl2(4,3,2,89));