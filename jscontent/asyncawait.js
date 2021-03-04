const verileriGetir=async()=>{


    const res =await fetch('veriler.json'); //await kullanarak bekledik
    const veri=await res.json();
    return veri;
}

verileriGetir().then(veri=>{
    console.log(veri);
})