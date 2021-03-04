const veriler = [
    {ad:'Volkan',yas:21},
    {ad:'Ayaz',yas:25},
    {ad:'Serhat',yas:41},
]
console.log(veriler);

//veriler dizisini localstroge ekle
localStorage.setItem('veriler',JSON.stringify(veriler));

let veriler1=localStorage.getItem('veriler');
console.log(JSON.parse(veriler1));