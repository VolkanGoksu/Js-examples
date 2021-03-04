//http request 
//amaç : harici bir internet sitesine veri göndermek veya veri almak

const request = new XMLHttpRequest();
request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();

//console.log(request);
request.addEventListener('readystatechange',()=>{
   // console.log(request,request.readyState);
   if(request.readyState==4){
       if(request.status==200){
        console.log(request.responseText);
       }
   }
})