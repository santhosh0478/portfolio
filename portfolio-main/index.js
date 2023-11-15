width="0px"
function openaside(){
    document.getElementById("thisisside").style.width="40vw";
    document.getElementById("thisisside").classList.remove("asidehide");
}
function closeaside(){
    document.getElementById("thisisside").style.width="0%";
    document.getElementById("thisisside").classList.add("asidehide");
}


let popup1=document.getElementById("popup");
function openpopup(){
    popup1.classList.add("finalpopup");
}

function closepopup(){
    popup1.classList.remove("finalpopup");
}
let popup2=document.getElementById("popup2");
function openpopup2(){
    popup2.classList.add("finalpopup2");
}
function closepopup2(){
    popup2.classList.remove("finalpopup2")
}


