

let display=document.querySelector("#num1") ;
let  btndiv=document.querySelector("#btn-div") ;
let  btclear=document.querySelector("#btn-clear") ;
let  btnclearlast=document.querySelector("#btn-clear-last-action") ;
let  btnbackspace=document.querySelector("#btn-back-space") ;
let  btnmul=document.querySelector("#btn-mul") ;
let  btnminus=document.querySelector("#btn-minus") ;
let  btplus=document.querySelector("#btn-plus") ;
let  btnpn=document.querySelector("#btn-pn") ;
let  btnpoint=document.querySelector("#btn-point") ;
let  btnequ=document.querySelector("#btn-equ") ;

let  btnnumbers=document.querySelectorAll(".btn-number") ;


let setpoint = false ;
let number1 , number2 , result;
let op="";




btplus.addEventListener("click",(e)=>{
   number1 = Number(display.textContent);
   display.textContent="0.0"
   op = "+";
});
btnminus.addEventListener("click",(e)=>{
    number1 = Number(display.textContent);
    display.textContent="0.0"
    op = "-";
 });
 btnmul.addEventListener("click",(e)=>{
    number1 = Number(display.textContent);
    display.textContent="0.0"
    op = "*";
 });
 btndiv.addEventListener("click",(e)=>{
    number1 = Number(display.textContent);
    display.textContent="0.0"
    op = "%";
 });
   

btnequ.addEventListener("click",(e)=>{
   
    number2= Number(display.textContent);
    switch (op) {
        case "+" :
        result=number1+number2 ;
        break ;
        case "-":
        result=number1-number2 ;
        break;
        case "*":
        result=number1*number2 ;
        break;
        case "%":
        result=number1/number2 ;
        break;
    }
    display.textContent=result;
 });
 
 


 
btclear.addEventListener("click",(e)=>{
display.textContent="0.0";
setpoint=false;
});
btnnumbers.forEach((item)=>{

    item.addEventListener("click",(e)=>{
        if(display.textContent =="0.0"){
        display.textContent = e.target.textContent;
        }else{
            display.textContent += e.target.textContent;
        }
    })
});

btnbackspace.addEventListener("click",(e)=>{
    let len=display.textContent.length;

    let lastdigit = display.textContent.substr(len -1 ,len)

    if(lastdigit=="."){
        setpoint=false;
    }
    if(len>1){
    display.textContent=display.textContent.substr(0,len-1);
    }else{
        display.textContent=("0.0");
    }
});
btnpn.addEventListener("click",(e)=>{
   display.textContent=display.textContent*-1;
 });
 btnpoint.addEventListener("click",(e)=>{

    if(setpoint ==false){
        display.textContent+=".";
        setpoint=true
    }
  });
