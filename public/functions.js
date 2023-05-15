//Scroll Navbar Function

var scrollPos = window.scrollY;
var navBar =  document.getElementById("Nav");

function getnavheight(){
    return navBar.offsetHeight;
}

document.addEventListener("scroll",function(){
    let newscrollPos=window.scrollY;
    if (scrollPos > newscrollPos){
        navBar.style.top = "0px";
    }
    else{
        navBar.style.top = "-" + getnavheight() + "px";
    }
    scrollPos = newscrollPos;
});

var navbarhoverflag = false;

document.documentElement.addEventListener("mousemove",function(event){
    if (event.clientY <= getnavheight() && navBar.style.top == "-" + getnavheight() + "px"){
        navBar.style.top = "0px";
        navbarhoverflag = true;
    }
    else if (event.clientY > getnavheight() && navbarhoverflag){
        navBar.style.top = "-" + getnavheight() + "px";
        navbarhoverflag = false;
    }
});

//Footer SVGs

var svgList = {
    'Discord':'<svg id="DiscordSVG" width="800px" height="800px" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="var(--footer-svg)" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10"/><ellipse cx="71" cy="101" fill="var(--footer-svg)" rx="13" ry="15"/><ellipse cx="121" cy="101" fill="var(--footer-svg)" rx="13" ry="15"/></svg>',
    'GitHub':'<svg width="800px" height="800px" viewBox="0 -0.5 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Color-" transform="translate(-700.000000, -560.000000)" fill="var(--footer-svg)"><path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560" id="Github"></path></g></g></svg>',
    'LinkedIn':'<svg width="800px" height="800px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="var(--footer-svg)" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/></svg>'
}

var footersvgs = document.getElementsByClassName("svg");
for (i=0;i<footersvgs.length;i++){
    footersvgs[i].innerHTML = svgList[footersvgs[i].id];
}

//Show Discord Function

var DiscordPopup = document.getElementById("DiscordPopup");
var DiscordSVG = document.getElementById("DiscordSVG");
var DiscordName = document.getElementById("DiscordName");

function showDiscord(){
    DiscordPopup.style.opacity = '100%';
    document.documentElement.addEventListener("click",function(click){
        if (click.target != DiscordPopup && click.target!= DiscordSVG && click.target!= DiscordName){
            DiscordPopup.style.opacity = "0%";
        }
    });
}
