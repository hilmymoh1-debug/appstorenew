// JavaScript Document

let linkDownload = "";

function beliApp(link){

linkDownload = link;

document.getElementById("popup").style.display="block";

}


function tutupPopup(){

document.getElementById("popup").style.display="none";

}


function uploadBukti(){

let file = document.getElementById("bukti").files[0];

if(!file){

alert("Upload bukti transfer dulu");

return;

}

alert("Bukti transfer terkirim, silakan download");

let btn = document.getElementById("downloadBtn");

btn.href = linkDownload;

btn.style.display="inline-block";

}