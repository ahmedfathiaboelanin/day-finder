// select elements by dom
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let findBtn = document.getElementById("find");
let result = document.getElementById("result");
let error = document.getElementById("errorSec");

// create date obj
findBtn.onclick = function(){
    let date = new Date(year.value, month.value, day.value);
    if(day.value <= 0 || day.value > 31 || year.value === "" ){
        error.innerHTML = "Please enter valid date" ;
        result.innerHTML = "Day";
    }else{
        result.innerHTML = date; 
        error.innerHTML = "" ; 
    }
}
