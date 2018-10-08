var user= "admin";
var passwd="admin";
function check(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username==user && password==passwd){
        window.open("appoitment.html");
        
    }
    else{
        alert("Worng");
    }
}