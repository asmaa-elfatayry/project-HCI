let logbtn=document.getElementById('login');
 let form =document.getElementById("form");
 let layout=document.querySelector('.layout');
 let closeBtn=document.querySelector('.close');
 let subBtn=document.querySelector('.sub');
 let sign=document.getElementById('signup');
 let textCh=document.querySelector('.regis');
logbtn.addEventListener("click",function(e){
    e.preventDefault();
form.style.display="block";
layout.style.display="block";
textCh.innerText="Login Form";
});
closeBtn.addEventListener("click",function(){
    form.style.display="none";
    layout.style.display="none"; 
  
});

subBtn.addEventListener("click",function(){
    form.style.display="none";
    layout.style.display="none"; 
   
});

sign.addEventListener("click",function(e){
    e.preventDefault();
    form.style.display="block";
layout.style.display="block";
textCh.innerText="Register Form";
});