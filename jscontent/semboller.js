
var bilgisayar = {}
bilgisayar.marka='msi';
//bilgisayar['hardDisk']='sata';
//bilgisayar['hardDisk']='ssd';


/*
const sembol1=Symbol('deger');
const sembol2=Symbol('deger');
console.log(sembol1,sembol2);
console.log(typeof sembol2);
*/


const hardDiskSembol1=Symbol('hardDisk');
const hardDiskSembol2=Symbol('hardDisk');

bilgisayar[hardDiskSembol1]='sata';
bilgisayar[hardDiskSembol2]='ssd';

console.log(bilgisayar);
console.log(bilgisayar[hardDiskSembol1]);
console.log(bilgisayar[hardDiskSembol2]);