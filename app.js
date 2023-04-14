var products = document.getElementsByClassName("post-overlay");
var items = document.getElementsByClassName("item");



for(var i =0;i<products.length;i++){
    products[i].addEventListener("click",selcetdata);
}

function selcetdata(){
   var textbox =  this.firstElementChild;
   console.log(textbox);
   var back = this.parentNode.style.backgroundImage;
   var pName = textbox.getElementsByClassName("p-head")[0].innerHTML;
   var pPrice = textbox.getElementsByClassName("p-price")[0].innerHTML;
   localStorage.setItem("cBack",back);
   localStorage.setItem("cName",pName);
   localStorage.setItem("cPrice",pPrice);
   window.location.href = "details.html";
}
document.querySelector(".image-back").style.backgroundImage = localStorage.getItem("cBack");
document.querySelector(".productName").textContent = localStorage.getItem("cName");
document.querySelector(".productPrice").textContent = localStorage.getItem("cPrice");


