let display=document.querySelector(".display");
let remove=document.querySelector(".remove")
let contenth1=document.querySelector(".content h1")
let contenth2=document.querySelector(".content h2")
let contenth3=document.querySelector(".content h3")

 

display.addEventListener("click",()=>{
    setTimeout(()=>{
     contenth1.innerText='Hello';
     contenth1.style.color="blueviolet"
     
    },2000);
    setTimeout(()=>{
        contenth2.innerText='welcome to my website';
        contenth2.style.color="blueviolet"
        
       },4000);

       setTimeout(()=>{
        contenth3.innerText='my name is Abeer';
        contenth3.style.color="blueviolet"
        
       },6000);

});
remove.addEventListener("click", () => {
    contenth1.innerText = '';
    contenth2.innerText = '';
    contenth3.innerText = '';
  });