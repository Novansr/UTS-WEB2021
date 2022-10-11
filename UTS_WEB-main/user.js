alert("you join as user");

document.getElementById("bg1").addEventListener("mouseenter",function(){
    document.querySelector('body').style.backgroundImage= "url('aset/bg1.gif')";
})

document.getElementById("bg1").addEventListener("mouseleave",function(){
    document.querySelector('body').style.backgroundImage= "none";
})

document.getElementById("bg2").addEventListener("mouseenter",function(){
    document.querySelector('body').style.backgroundImage= "url('aset/gb2.gif')";

})

document.getElementById("bg2").addEventListener("mouseleave",function(){
    document.querySelector('body').style.backgroundImage= "none";
})