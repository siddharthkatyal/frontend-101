var first_name_check = 0;
var last_name_check = 0;
var email_check = 0;
var phone_check = 0;
function first_name(){
    var text_field = document.getElementsByClassName("first-name-space")[0];
    text_field.style.color = "black";
    var alert = document.getElementsByClassName("r1")[0];
    if(text_field.value == ""){
        text_field.style.border = "2px solid red";
        alert.style.zIndex = "10";
    }
    else{
        text_field.style.border = "2px solid blue";
        alert.style.zIndex = "0";
        first_name_check = 1;
    }
}
function last_name(){
    var text_field = document.getElementsByClassName("last-name-space")[0];
    text_field.style.color = "black";
    var alert = document.getElementsByClassName("r2")[0];
    if(text_field.value == ""){
        text_field.style.border = "2px solid red";
        alert.style.zIndex = "10";
    }
    else{
        text_field.style.border = "2px solid blue";
        alert.style.zIndex = "0";
        last_name_check = 1;
    }
}
function email(){
    var text_field = document.getElementsByClassName("email-space")[0];
    text_field.style.color = "black";
    var alert = document.getElementsByClassName("r3")[0];
    if(text_field.value == ""){
        text_field.style.border = "2px solid red";
        alert.style.zIndex = "10";
    }
    else{
        text_field.style.border = "2px solid blue";
        alert.style.zIndex = "0";
        email_check = 1;
    }
}
function phone(){
    var text_field = document.getElementsByClassName("phone-space")[0];
    text_field.style.color = "black";
    var alert = document.getElementsByClassName("r4")[0];
    if(text_field.value == ""){
        text_field.style.border = "2px solid red";
        alert.style.zIndex = "10";
    }
    else{
        text_field.style.border = "2px solid blue";
        alert.style.zIndex = "0";
        phone_check = 1;
    }
}
function password(){
    var text_field = document.getElementsByClassName("password-space")[0];
    text_field.style.color = "black";
    var alert = document.getElementsByClassName("r5")[0];
    if(text_field.value == ""){
        text_field.style.border = "2px solid red";
        alert.style.zIndex = "10";
    }
    else{
        text_field.style.border = "2px solid blue";
        alert.style.zIndex = "0";
    }
}
function password_check(value){
    var name = document.getElementsByClassName("first-name-space")[0].value;
    console.log(value);
    console.log(name);
    var regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$/;
    var value = value.toLowerCase();
    var name = name.toLowerCase();
    
    console.log(value);
    console.log(name);
    if(value.length < 8){
        alert("Minimum length is 8");
        var text_field = document.getElementsByClassName("password-space")[0];
        var red_circle = document.getElementsByClassName("r5")[0];
        text_field.style.border = "2px solid red";
        red_circle.style.zIndex = "10";
    }
    else if(value.length > 15){
        alert("Maximum length is 15");
        var text_field = document.getElementsByClassName("password-space")[0];
        var red_circle = document.getElementsByClassName("r5")[0];
        text_field.style.border = "2px solid red";
        red_circle.style.zIndex = "10";
    }
    else if(regx.test(value) == false){
        alert("Password should contain alphanumerics and special symbols only with atleast one of each");
        var text_field = document.getElementsByClassName("password-space")[0];
        var red_circle = document.getElementsByClassName("r5")[0];
        text_field.style.border = "2px solid red";
        red_circle.style.zIndex = "10";
    }
    else if(value.includes(name)){
        alert("Password should not contain your name");
        console.log(main);
        console.log(to_check);
        var text_field = document.getElementsByClassName("password-space")[0];
        var red_circle = document.getElementsByClassName("r5")[0];
        text_field.style.border = "2px solid red";
        red_circle.style.zIndex = "10";
    }
    else{
        var text_field = document.getElementsByClassName("password-space")[0];
        var red_circle = document.getElementsByClassName("r5")[0];
        text_field.style.border = "2px solid blue";
        red_circle.style.zIndex = "0";
    }
}
function events(){
    events_check = 1;
    var drop_down = document.getElementsByClassName("events_select")[0];
    drop_down.style.color = "black";
    drop_down.style.border="2px solid blue";
}
function gender(){
    gender_check=1;
    var drop_down = document.getElementsByClassName("gender")[0];
    drop_down.style.color = "black";
    drop_down.style.border="2px solid blue";
}
function year(){
    year_check = 1;
    var drop_down = document.getElementsByClassName("year")[0];
    drop_down.style.color = "black";
    drop_down.style.border="2px solid blue";
}
function submit(){
    password_check(document.getElementsByClassName("password-space")[0].value);
   if (first_name_check == 0 || last_name_check == 0 || email_check == 0 || phone_check == 0)
   alert("Fields marked with * are required to be filled");
   else{
    document.getElementsByClassName("first-name-space")[0].value="";
    document.getElementsByClassName("last-name-space")[0].value="";
    document.getElementsByClassName("email-space")[0].value="";
    document.getElementsByClassName("phone-space")[0].value="";
    document.getElementsByClassName("password-space")[0].value="";
    }
}