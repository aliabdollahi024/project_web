// JavaScript

var current_name = "";
var curent_gender = "";

function submit()
{
    //  در این جا ابتدا از فیلد مشخص شده نام خوانده میشود البته قبل از آن حروفش هم چک میشود که مطابق صورت مساله ی خواسته شده باشد 
    if (!/^[a-z][a-z\s]*$/g.test(document.getElementById("firstNameinput").value)) {
        alert("Invalid characters");
    }
    else{
    string1 = document.getElementById("firstNameinput").value;
    current_name = string1;

    //تولید میشودurlپی از آن 
    let url = "https://api.genderize.io/?name="+string1;
    //   خروجی تقسیم شده و هر پارت آن در فیلد مشخص شده قرار میگیردjsonفرستاده میشود و فایل getدرخواست fetchپس از آن با تابع 
    fetch(url).then((resp)=>resp.json()).then((data)=>(document.getElementById("gender").innerText = data["gender"] , 
    document.getElementById("probability").innerText = data["probability"] , curent_gender =  data["gender"],
    console.log(data)
    ));
    //در این جا اگر نام سابمیت شده از قبل ذخیره شده باشد اطلاعات آن ذخیره نمایش داده میشود
    if (localStorage.getItem(current_name)!=null)
    {
        document.getElementById("history").innerHTML = current_name+" = "+localStorage.getItem(current_name);
    }
    else
    {
        document.getElementById("history").innerHTML ="";
        
    }
    }
    
}

function saveRequest()
{
//  انجام شده باشدsubmitبه ما میدهد را برای آن اسم ذخیره میکنیم البته قبل از آن چک میکنیم که با این نام مشخص درست قبل از آن apiدر این تابع پیش بینی ای که 
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
    // شده یا نه submitدر این تابع جنسیتی که ما در نظر داریم و آن را انتخاب کرده ایم برای آن اسم خاص ذخیره میکنیم و آن را نمایش میدهیم ولی اول چک میکنیم که اسم وارد شده درست قبل از آن 


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
    //در این جا اگر اسمی که آخرین بار سابمیت شده است ذخیره ای برای آن وجود داشته باشد آن ذخیره پاک شده و در صفحه نمایش نیز پاک میشود
localStorage.removeItem(current_name);
document.getElementById("history").innerHTML ="";
}


//در این جا هم لیسنر های مربوط به هر کلید ست میشود.
document.getElementById("clearButton").addEventListener("click", clear);
document.getElementById("SubmitButton").addEventListener("click", submit);
document.getElementById("SaveRequestButton").addEventListener("click", saveRequest);
document.getElementById("SaveMyPredictionButton").addEventListener("click", saveMyanswer);

