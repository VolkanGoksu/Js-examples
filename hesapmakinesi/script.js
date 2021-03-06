const girilenSayibir = document.getElementById('girilenSayiBir');
const girilenSayiİki = document.getElementById('girilenSayiİki');

const btnTpl = document.getElementById('btn-tpl');
const btnCkr = document.getElementById('btn-ckr');
const btnCrp = document.getElementById('btn crp');
const btnBol = document.getElementById('btn-bol');

const snc = document.getElementById('snc');

btnTpl.addEventListener('click', () => {
   const gs1 = parseFloat(girilenSayibir.value);
   const gs2 = parseFloat(girilenSayiİki.value);
   snc.innerHTML=(gs1+gs2);
   console.log(snc);
  
})
btnCkr.addEventListener('click',()=>{
    const gs1 = parseFloat(girilenSayibir.value);
    const gs2 = parseFloat(girilenSayiİki.value);
    snc.innerHTML=(gs1-gs2);
    console.log(snc);
})
btnCrp.addEventListener('click',()=>{
    const gs1 = parseFloat(girilenSayibir.value);
    const gs2 = parseFloat(girilenSayiİki.value);
    snc.innerHTML=(gs1*gs2);
    console.log(snc);
})
btnBol.addEventListener('click',()=>{
    const gs1 = parseFloat(girilenSayibir.value);
    const gs2 = parseFloat(girilenSayiİki.value);
    snc.innerHTML=(gs1/gs2);
    console.log(snc);
})