//auth durumunu izle
auth.onAuthStateChanged(k=>{
    if(k){
        console.log("Giriş İşlemi başarılı");
        //makale verilerini getir
        db.collection('makaleler').onSnapshot(snapshot=>{
            //console.log(snapshot.docs);
            makalelerYukle(snapshot.docs);
            kullaniciYukle(k);
        })
    }
    else{
        console.log("Çıkış işlemi başarılı");
        makalelerYukle([]);
        kullaniciYukle();
    }
})

//makale oluştur
const makaleOlusturForm=document.querySelector('#create-form');
makaleOlusturForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('makaleler').add({
        baslik:makaleOlusturForm['title'].value,
        icerik:makaleOlusturForm['content'].value
    }).then(()=>{
        const modalKapat = document.querySelector('#modal-create');
        M.Modal.getInstance(modalKapat).close();
        makaleOlusturForm.reset();
    })

})

//Üyelik Oluşturmaw
const uyelikForm = document.querySelector('#signup-form');
uyelikForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    //console.log('başarılı');

    const mail = uyelikForm['signup-email'].value;
    const password=uyelikForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(mail,password).then(sonuc=>{
      //  console.log(sonuc.user);
        const modalKapat = document.querySelector('#modal-signup');
        M.Modal.getInstance(modalKapat).close();
        uyelikForm.reset();//kayıt olduktan sonraki inputları temizler
    });
})

//Çıkış işlemi
const cikis = document.querySelector('#logout');
cikis.addEventListener('click',(e)=>{
    e.preventDefault();

    auth.signOut().then(()=>{
       // console.log('Çıkış başarılı');
    })
})

//Giriş işlemi 
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const mail = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(mail,password).then((sonuc)=>{
        console.log(sonuc.user);
        const modalKapat = document.querySelector('#modal-login');
        M.Modal.getInstance(modalKapat).close();
        loginForm.reset();
    })
})