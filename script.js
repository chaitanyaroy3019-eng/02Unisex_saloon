function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function copyNumber(){
    let num = document.getElementById("number").innerText;
    navigator.clipboard.writeText(num);
    alert("Number copied!");
}