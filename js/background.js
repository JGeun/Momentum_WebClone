const num = Math.floor(Math.random()*2);
if(num == 0){
    document.body.style.background = "url(../images/image0.jpg) no-repeat";
}
else{
    document.body.style.background = "url(../images/image1.jpg) no-repeat";
}
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

if(num == 0){
    document.getElementById("quote").style.color = "black";
}else{
    document.getElementById("quote").style.color = "white";
}