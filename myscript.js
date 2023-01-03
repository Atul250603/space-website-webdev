function hamburgerHandler(e){
    let hamburger=document.getElementById("hamburger");
    let mainnav=document.getElementsByClassName("mainnav")[0];
    let nav=mainnav.children[0];
    let closeBtn=nav.children[0];
    let ul=nav.children[1];
    let li=ul.children;
    hamburger.style="display:none;";
    mainnav.style="display:inline-block;height:100vh;width:50%;position:absolute;top:0;right:0;margin:0;padding:0; border-radius:0;z-index:1000;";
    closeBtn.style="display:flex;";
    nav.style="width:100%; margin-top:20px;";
    ul.style="padding:0; width:80%; margin:30px 0 0 20px; margin-right:0;";
    for (elem of li){
        elem.style="display:block;margin:0;padding:18px 0; font-size:12px; letter-spacing:0px;width:100%;"
    }

}
function closeBtnHandler(e){
    let hamburger=document.getElementById("hamburger");
    let mainnav=document.getElementsByClassName("mainnav")[0];
    let nav=mainnav.children[0];
    let closeBtn=nav.children[0];
    let ul=nav.children[1];
    let li=ul.children;
    hamburger.removeAttribute("style");
    mainnav.removeAttribute("style");
    closeBtn.style="display:none;";
    nav.removeAttribute("style");
    ul.removeAttribute("style");
    for (elem of li){
        elem.removeAttribute("style");
    }
}
let hamburger=document.getElementById("hamburger");
hamburger.addEventListener('click',hamburgerHandler);
let mainnav=document.getElementsByClassName("mainnav")[0];
let nav=mainnav.children[0];
let closeBtn=nav.children[0];
closeBtn.addEventListener("click",closeBtnHandler);
