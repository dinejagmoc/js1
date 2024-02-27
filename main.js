const mynum1 = document.getElementById("num1");
const mynum2 = document.getElementById("num2");
const mysum = document.getElementById("sum1");
const mydiff = document.getElementById("diff1");
const myprod = document.getElementById("prod1");
const myquo = document.getElementById("quo1");
let sum = 0;
let diff = 0;
let prod = 0;
let quo = 0;

function calcuSum() {
    if(mynum1.value == "" || mynum2.value == "")
    {
        alert("HOY BULOY BUTNGI OG NUMBER!!"); 
    }else
    {
        sum = parseInt(mynum1.value) + parseInt(mynum2.value);
        mysum.innerHTML = sum;
    }
}

function calcuDiff() {
    if(mynum1.value == "" || mynum2.value == "")
    {
        alert("HOY BULOY BUTNGI OG NUMBER!!"); 
    }else
    {
        diff = parseInt(mynum1.value) - parseInt(mynum2.value);
        mydiff.innerHTML = diff;
    }
}

function calcuProd() {
    if(mynum1.value == "" || mynum2.value == "")
    {
        alert("HOY BULOY BUTNGI OG NUMBER!!"); 
    }else
    {
        prod = parseInt(mynum1.value) * parseInt(mynum2.value);
        myprod.innerHTML = prod;
    }
}

function calcuQuo() {
    if(mynum1.value == "" || mynum2.value == "")
    {
        alert("HOY BULOY BUTNGI OG NUMBER!!"); 
    }else
    {
        quo = parseInt(mynum1.value) / parseInt(mynum2.value);
        myquo.innerHTML = quo;
    }
}

function clearEnt () {
    mynum1.value = "";
    mynum2.value = "";
    mysum.innerHTML = "";
    mydiff.innerHTML = "";
    myprod.innerHTML = "";
    myquo.innerHTML = "";
    sum = 0;
    diff = 0;
    prod = 0;
    quo = 0;
}