
document.addEventListener("DOMContentLoaded",function(){
    abouttoggled = false;
});

function abouttoggle(){

    document.getElementById("AboutUnlocked").classList.toggle("Tiny");
    document.getElementById("About-ShowMore").classList.toggle("hidden");
    document.getElementById("About-ShowLess").classList.toggle("hidden");
    abouttoggled = !abouttoggled;
    if (!abouttoggled){
        document.getElementById("AboutLocked").scrollIntoView(true);
    }
    else{
        setTimeout(function(){
            document.getElementById("AboutUnlocked").scrollIntoView(true);
        },500);
        
    }
}

//CAROUSEL

var carousel_slides = document.getElementById("About-CarouselSlides");
var carousel_itemtitles = document.getElementById("About-CarouselTitles");
var carousel_info = document.getElementById("About-CarouselInfo");
var carousel_infopopup = document.getElementById("About-CarouselInfoPopup");
var carousel_infopopup_descriptions = document.getElementById("About-CarouselInfoPopupList");

var carousel_slidecount = document.getElementById("About-Carousel").dataset.slidecount;
var carousel_currentslide = 1;

function nextcarouselitem(){
    if (carousel_slides.scrollLeft == carousel_slides.offsetWidth*(carousel_slidecount-1)){
        carousel_slides.scrollLeft = 0;
        carousel_itemtitles.scrollLeft = 0;
        carousel_currentslide = 1;
    }else{
        carousel_slides.scrollLeft += carousel_slides.offsetWidth;
        carousel_itemtitles.scrollLeft += carousel_itemtitles.offsetWidth;
        carousel_currentslide +=1
    }
}

function prevcarouselitem(){
    if (carousel_slides.scrollLeft == 0){
        carousel_slides.scrollLeft = carousel_slides.offsetWidth*(carousel_slidecount-1)
        carousel_itemtitles.scrollLeft = carousel_itemtitles.offsetWidth*(carousel_slidecount-1);
        carousel_currentslide = carousel_slidecount;
    }else{
        carousel_slides.scrollLeft -= carousel_slides.offsetWidth;
        carousel_itemtitles.scrollLeft -= carousel_itemtitles.offsetWidth;
        carousel_currentslide -=1
    }
}

function toggle_aboutcarouselinfo(){
    carousel_infopopup.classList.toggle("About-CarouselInfoPopup-Shown");
    carousel_infopopup_descriptions.scrollLeft = carousel_infopopup_descriptions.offsetWidth*(carousel_currentslide-1);
    if (carousel_infopopup.classList.contains("About-CarouselInfoPopup-Shown")){
        document.documentElement.addEventListener("click",function(click){
            if (click.target != carousel_infopopup && !carousel_infopopup.contains(click.target) && click.target!= carousel_info && !carousel_info.contains(click.target)){
                carousel_infopopup.classList.remove("About-CarouselInfoPopup-Shown");
            }
        });
    }

}


// SKILLTABS

var skilltabs = document.getElementById("SkillTabs");
var skilltabpicker_buttons = document.getElementById("SkillTabPicker").children;
var currentskilltab = 1;

function setskilltab(newtab){
    if (currentskilltab == newtab){
        return;
    }
    skilltabpicker_buttons[currentskilltab-1].classList.toggle("SkillTabPicker-Selected");
    skilltabpicker_buttons[newtab-1].classList.toggle("SkillTabPicker-Selected");
    skilltabs.scrollLeft = (skilltabs.offsetWidth - (skilltabs.offsetWidth - skilltabs.clientWidth)) * (newtab-1);
    currentskilltab = newtab;

}


//DISCORD BUTTON

discorddiv = document.getElementById("DiscordAside");
discordpopup = document.getElementById("DiscordAsidePopup");

function showdiscord(){
    discordpopup.classList.remove("DiscordPopupHidden");
    document.documentElement.addEventListener("click",function(click){
        if (click.target != discorddiv && !discorddiv.contains(click.target)){
            discordpopup.classList.add("DiscordPopupHidden");
        }
    });
}

// Debug


function debug(){

    NoJS = document.getElementById("NoJSBody");
    JS = document.getElementById("JSBody");

    JS.classList.toggle("hidden");
    NoJS.classList.toggle('hidden');

}