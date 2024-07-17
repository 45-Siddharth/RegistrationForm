let formEle=document.getElementById("Myform");

let firstEle = document.getElementById("fname");
let lastEle = document.getElementById("lname");
let passEle = document.getElementById("pass");
let conPassEle = document.getElementById("conpass");
let maleEle = document.getElementById("male");
let femaleEle = document.getElementById("female");
let otherEle = document.getElementById("other");
let emailEle = document.getElementById("email");
let phnoEle = document.getElementById("phno");
let addEle = document.getElementById("address");
let checkEle = document.getElementById("check");
let resultEle = document.getElementById("result");

let ferrorEle=document.getElementById("ferror");
let lerrorEle=document.getElementById("lerror");
let perrorEle=document.getElementById("perror");
let cperrorEle=document.getElementById("cperror");
let emerrorEle=document.getElementById("emerror");
let pherrorEle=document.getElementById("pherror");
let adderrorEle=document.getElementById("adderror");

let butEle=document.getElementById("submit");

firstEle.addEventListener("change",function(event)
{
    if(event.target.value === "") 
    {
        ferrorEle.textContent = "Required*";
        ferrorEle.classList.add("error");
    }
    else
    {
        ferrorEle.textContent = "";
    }
});

lastEle.addEventListener("change",function(event)
{
    if(event.target.value === "") 
    {
        lerrorEle.textContent = "Required*";
        lerrorEle.classList.add("error");
    }
    else
    {
        lerrorEle.textContent = "";
    }
});

passEle.addEventListener("change",function(event)
{
    if(event.target.value === "") 
    {
        perrorEle.textContent = "Required*";
        perrorEle.classList.add("error");
    }
    else
    {
        perrorEle.textContent = "";
    }
});

conPassEle.addEventListener("change",function(event)
{
    if(event.target.value === "") 
    {
        cperrorEle.textContent = "Required*";
        cperrorEle.classList.add("error");
    }
    else
    {
        if(event.target.value !== passEle.value)
        {
            cperrorEle.textContent = "password mismatch*";
            cperrorEle.classList.add("error");
        }
        else
        cperrorEle.textContent = "";
    }
});

emailEle.addEventListener("change",function(event)
{
    if(event.target.value === "") 
    {
        emerrorEle.textContent = "Required*";
        emerrorEle.classList.add("error");
    }
    else
    {
        emerrorEle.textContent = "";
    }
});

phnoEle.addEventListener("change",function(event)
{
    if(event.target.value === "") 
    {
        pherrorEle.textContent = "Required*";
        pherrorEle.classList.add("error");
    }
    else
    {
        pherrorEle.textContent = "";
    }
});

addEle.addEventListener("change",function(event)
{
    if(event.target.value === "") 
    {
        adderrorEle.textContent = "Required*";
        adderrorEle.classList.add("error");
    }
    else
    {
        adderrorEle.textContent = "";
    }
});

function validateForm()
{
    let cond=true;
    if(firstEle.value === "")
    {
        ferrorEle.textContent = "Required*";
        ferrorEle.classList.add("error");
        cond=false;
    }
    if(lastEle.value === "")
    {
        lerrorEle.textContent = "Required*";
        lerrorEle.classList.add("error");
        cond=false;
    }
    if(passEle.value === "")
    {
        perrorEle.textContent = "Required*";
        perrorEle.classList.add("error");
        cond=false;
    }
    if(conPassEle.value === "")
    {
        cperrorEle.textContent = "Required*";
        cperrorEle.classList.add("error");
        cond=false;
    }
    if(emailEle.value === "")
    {
        emerrorEle.textContent = "Required*";
        emerrorEle.classList.add("error");
        cond=false;
    }
    if(phnoEle.value === "")
    {
        pherrorEle.textContent = "Required*";
        pherrorEle.classList.add("error");
        cond=false;
    }
    if(addEle.value === "")
    {
        adderrorEle.textContent = "Required*";
        adderrorEle.classList.add("error");
        cond=false;
    }
    return cond;
}

formEle.addEventListener("submit",function(event)
{
    event.preventDefault();
    let bool = validateForm(); 
    if(checkEle.checked && bool)
    {
        firstEle.value = "";lastEle.value = "";passEle.value = "";
        conPassEle.value = "";emailEle.value = "";phnoEle.value = "";
        addEle.value = "";
        resultEle.textContent = "Successfully Registered";
    resultEle.classList.add("success","text-success","mt-4");
    }
    else if(checkEle.checked){
        resultEle.textContent = "Fill the Form";
        resultEle.classList.add("error2","mt-3");
    }
    else{
        resultEle.textContent = "Fill the Box";
        resultEle.classList.add("error2","mt-3");
    }
});