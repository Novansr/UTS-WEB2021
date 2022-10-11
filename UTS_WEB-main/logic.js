alert("login sebagai user\nusername : user\npassword : uts");
alert("login sebagai admin\nusername : admin\npassword : uts");

document.getElementById("btn").addEventListener("click", function(){
    document.querySelector(".pop").style.display = "flex";
    document.querySelector(".isi2").style.display = "flex";
    document.querySelector(".container").style.display = "none"
})

