function compute()
//Get the values and calculate
var principal=document.getElementById("principal").value;
var rate=document.getElementById("rate").value;
var years=document.getElementById("years").value;
var interest=principal*years*rate/100;
var year=new Date().getFullYear()+parseInt(years);
function updateRate()
{var rateval= (document.getElementById("rate").value;
document.getElementById("rate_val").innertext=rateval;}
document.getElementById("result").innerHTML = "<br />If you deposit <mark>"+principal+"</mark>,<br /> at an interest rate of <mark>"+rate+"%</mark>.<br />You will receive an amount of <mark>"+interest+"</mark><br />in the year <mark>"+finalYear+"</mark>";
//update value
function getSliderValue() 
function showrate(x)
// Function updates span with final value from slider
{
    document.getElementById("enteredRate").innerText = x;
}
function checkdata()
// Function returns false if Amount entered is less than or equal to zero
{
    var principal = document.getElementById("principal");
    if (principal.value<=0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    return true;
}
    

        
