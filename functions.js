var maxSkillSections;
var currentSkillSection = 0;
var previousButton = document.getElementById("Previous");
var nextButton = document.getElementById("Next");
var skillCarousel = document.getElementById("Skills-Carousel");
// Setting Skill Bars To Their Data-Percent

function setSkillBars(){
    var SkillBars = document.querySelectorAll('[data-percent');

    for (var Skill in SkillBars){
        if (SkillBars.hasOwnProperty(Skill)){
            let percent = SkillBars[Skill].getAttribute('data-percent');
            SkillBars[Skill].style.backgroundImage='linear-gradient(to right,var(--discord-lightergray) 0% ' + percent + ' ,var(--discord-lightestgray) ' + percent + ' 100%)';
        }
    }
}

// Skill Navigation Bar

function setupSkillNavigationBar(){

    maxSkillSections = (document.getElementsByClassName("Skill-Section").length) - 1;
    updateSkillNavigationButtons();
}

function updateSkillNavigationButtons(){
    if (currentSkillSection == 0){
        previousButton.style.display='none';
    }
    else{
        previousButton.style.display='block';
    }

    if (currentSkillSection == maxSkillSections){
        nextButton.style.display='none';
    }
    else{
        nextButton.style.display='block';
    }

}

function previousSkillSection(){
    currentSkillSection -= 1;
    skillCarousel.style.translate="-" + 1*currentSkillSection + "00%";
    updateSkillNavigationButtons();
    skillCarousel.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function nextSkillSection(){
    currentSkillSection += 1;
    skillCarousel.style.translate="-" + 1*currentSkillSection + "00%";
    updateSkillNavigationButtons();
    skillCarousel.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

// Scroll Function

function NavigationScroll(elementID){
    let element = document.getElementById(elementID);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}