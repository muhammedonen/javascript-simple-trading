window.onload = function () {

var datainfo = [];
var info = "jpn";
var  y;
var x = 0;
var localData;
var odeme;


  window.onclick = e => {
     x = e.target.alt;
    
    if (x) {
      document.getElementById('buy').style.display = "inline";
      y =  document.getElementById('price').innerText = Number(x);
    }
}

document.getElementById('buy').addEventListener('click', ()=>{
   odeme = +prompt("please make your payment");
  if (odeme != y) {

    alert("wrong payment amount");

  }else  {
   
    datainfo.push(odeme)
    localData =  localStorage.setItem(info,JSON.stringify(datainfo));
    var localinfo = localStorage.getItem(info);
    var localEnd = JSON.parse(localinfo);
    var html = '';
    for (let i = 0; i < localEnd.length; i++) {
      html += `<li>${localEnd[i]} $ payment successful <b>&#x2611;</b> </li>`;            
      
    }

    
    document.getElementById('data').innerHTML = html;
  
  }
});
}