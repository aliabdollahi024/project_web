// JavaScript
/*function submit()
{
    String1 = "https://api.genderize.io/?name=";
    console.log("ali" + document.getElementById("firstNameinput").value)
    String1 = String1 + document.getElementById("firstNameinput").value;
    console.log(String1)
    fetch(String1).then((resp)=>resp.json()).then((data)=>(document.getElementById("gender").innerText = data , 
    document.getElementById("probability").innerText = data["probability"] , 
    console.log(data)
    ));
}
document.getElementById("submitButton").onclick = submit();*/

var current_name = "";
var curent_gender = "";

function submit()
{
    string1 = document.getElementById("firstNameinput").value;
    current_name = string1;


    let url = "https://api.genderize.io/?name="+string1;
    console.log(url);
    localStorage.setItem

    fetch(url).then((resp)=>resp.json()).then((data)=>(document.getElementById("gender").innerText = data["gender"] , 
    document.getElementById("probability").innerText = data["probability"] , curent_gender =  data["gender"],
    console.log(data)
    ));
    
}

function save()
{
    if (document.getElementById("html1").checked == true)
    {
        localStorage.setItem(current_name,"Male");
        document.getElementById("html1").checked = false;

    }
    else if(document.getElementById("html2").checked == true)
    {
        localStorage.setItem(current_name,"Female");
        document.getElementById("html2").checked = false;
    }
    else
    {
        
        console.log(current_name)
        if(localStorage.getItem(current_name)==null){
            console.log("wwwwwwwwww")
            localStorage.setItem(current_name,curent_gender);
        }
        
        localStorage.setItem(current_name,curent_gender);
    }  
}

function clear()
{
localStorage.removeItem(current_name);
}
document.getElementById("clearButton").addEventListener("click", clear);
document.getElementById("SubmitButton").addEventListener("click", submit);
document.getElementById("SaveButton").addEventListener("click", save);

