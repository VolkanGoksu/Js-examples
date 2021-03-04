
const verileriGetir=()=>{
   return new Promise((resolve,reject)=>{
        resolve('doğru veriler');
        reject('hatalı veri');
   });
};

verileriGetir().then(veri=>{
    console.log(veri);
}).catch(err=>{
    console.log(err);
})