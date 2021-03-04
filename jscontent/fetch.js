//promomihariciveriler.js den daha hızlı yöntem

fetch('veriler.json').then(res=>{
    return res.json();
}).then(veri=>{
    console.log(veri);
}).catch(err=>{
    console.log(err);
})

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))