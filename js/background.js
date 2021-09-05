const num = Math.floor(Math.random()*2);
const imagePath = "../images/image"+num+".jpg";
document.body.style.background = "url("+imagePath+") no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

if(num == 0){
    document.getElementById("quote").style.color = "black";
}else{
    document.getElementById("quote").style.color = "white";
}