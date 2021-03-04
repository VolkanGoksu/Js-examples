const todoOlustur=(callback)=>{
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange',()=>{
        if(request.readyState==4 && request.status==200){
            callback(request.responseText,undefined);
        }else if(request.readyState==4) 
        {
            callback(undefined,'bir hata oluştu')
        }   
        
    })
    request.open('GET','https://jsonplaceholder.typicode.com/todos');
    request.send();
};
todoOlustur((veri,hata)=>{
    if(hata){
        console.log(hata);
    }else{
        console.log(veri);
    }
})