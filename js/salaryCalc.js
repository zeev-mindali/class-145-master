//var mySalary=0;
function calcTheMoney(){
    var mySalary=Number(document.getElementById("salary").value);
    //console.log("salary:"+(mySalary+100));
    calc10(mySalary);
    calc20(mySalary);
}

function calc10(salary){
    document.getElementById("resm10").innerText=salary*0.1;
    document.getElementById("ress10").innerText=salary*0.9;
}

function calc20(salary){
    document.getElementById("resc20").innerHTML=salary*0.2;
    document.getElementById("ress20").innerHTML=salary*0.8;
}