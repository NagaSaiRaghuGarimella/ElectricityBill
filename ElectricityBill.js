
function calculateBill(){
    const oldReading=document.getElementById("old");
    const currentReading=document.getElementById("current");
    const arrears = document.getElementById("arrears");
    const customerName=document.getElementById("customer");
    let today=new Date();

    const offset = today.getTimezoneOffset()
    let date = new Date(today.getTime() - (offset*60*1000)).toISOString().split("T")[0];
     console.log(date);

    const curDate= document.getElementById("currentDate").value;
    if(curDate>date){
        alert("Bill date cant be greater than today");
    }
    if(parseInt(currentReading.value)<parseInt(oldReading.value)){
        alert("Sorry! current reading cant be less than old");
    }
    let dt=new Date();
      dt.setDate(dt.getDate()+300);
      console.log(dt.toLocaleDateString());

    let units=parseInt(currentReading.value)-parseInt(oldReading.value);
    let amt=0;
    if(units>0 && units<=100){
       amt=units*10
       console.log(amt);
    }
    else if(units>100 && units<=200){
        amt=100*10+(units-100)*15;
        console.log(amt);
    }
    else if(units>200 && units<=300){
        amt=100*10+100*15+(units-200)*20;
        console.log(amt);
    }
    else{
        amt=100*10+100*15+100*20+(units-300)*25;
        console.log(amt);
    }
    ar = parseInt(arrears.value);
    if(ar>0){
      amt=amt+ar;
      console.log("total bill with arrears: "+amt);
    }

    document.getElementById("result").innerHTML =  "Dear "+ `${customerName.value}`+" , "+
    "Your electricity bill is Rs :"+amt+" and Pay By Date "+dt.toLocaleDateString();
    return false;  

}
let clear= document.getElementById('result');
function clearData(){
   clear.innerHTML =" ";
}



const btn = document.getElementById("form_app");
btn.addEventListener('submit',()=>{
    event.preventDefault();
    calculateBill();
})
