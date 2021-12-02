// JavaScript

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

    if (localStorage.getItem(current_name)!=null)
    {
        document.getElementById("history").innerHTML = current_name+" = "+localStorage.getItem(current_name);
    }
    else
    {
        document.getElementById("history").innerHTML ="";
        
    }
    
}

function saveRequest()
{

    if (document.getElementById("firstNameinput").value ==current_name)
    {if(localStorage.getItem(current_name)==null){
        localStorage.setItem(current_name,curent_gender);
    }
        
    localStorage.setItem(current_name,curent_gender);
    document.getElementById("history").innerHTML = current_name+" = "+localStorage.getItem(current_name);
}
else{alert("first submit then try again");}
    
}

function saveMyanswer()
{


    if (document.getElementById("firstNameinput").value ==current_name)
    {if (document.getElementById("html1").checked == true)
    {
        localStorage.setItem(current_name,"Male");
        document.getElementById("html1").checked = false;
        document.getElementById("history").innerHTML = current_name+" = "+localStorage.getItem(current_name);

    }
    else if(document.getElementById("html2").checked == true)
    {
        localStorage.setItem(current_name,"Female");
        document.getElementById("html2").checked = false;
        document.getElementById("history").innerHTML = current_name+" = "+localStorage.getItem(current_name);
    }
}
else
{alert("first submit then try again")}

    
}

function clear()
{
localStorage.removeItem(current_name);
document.getElementById("history").innerHTML ="";
}

document.getElementById("clearButton").addEventListener("click", clear);
document.getElementById("SubmitButton").addEventListener("click", submit);
document.getElementById("SaveRequestButton").addEventListener("click", saveRequest);
document.getElementById("SaveMyPredictionButton").addEventListener("click", saveMyanswer);

