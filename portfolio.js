// BARS DROPDOWN PART STARTS HERE#################
let bars = document.querySelector("#bars");
let socialContainer = document.querySelector(".socialmedia-container")
let barValue = "close";

bars.addEventListener("click", () =>{
    if(barValue === "close"){
        socialContainer.style.transform= "scale(1.4)";
        barValue = "open";
    } else if(barValue === "open") {
        socialContainer.style.transform= "scale(0)";
        barValue = "close";
    }    
});

// DROPDOWN PART STARTS HERE#################
let dropDown = document.querySelector("#drop-down");
let navItemsContainer = document.querySelector(".navItems-container");
let containMain =document.querySelector("#contain-main"); 
let dropDownValue = "close";

dropDown.addEventListener("click", () =>{
    if(dropDownValue === "close"){
        navItemsContainer.style.transform= "scale(1)";
        dropDownValue = "open";
        containMain.style.filter = "blur(10px)"
    } else if(dropDownValue === "open") {
        navItemsContainer.style.transform= "scale(0)";
        dropDownValue = "close";
        containMain.style.filter = "none"
    }    
});

// DROP DOWN AUTO CLOSE AND BACKGROUND UNBLUR ON CLICKING HOME ABOUT ETC.. LOGIC PART######
let mobileItems = document.querySelectorAll(".mobile-items");
let mobileItemsValue = "inactive";

mobileItems.forEach(item => {
    item.addEventListener("click", () => {
        if(mobileItemsValue === "inactive") {
            mobileItemsValue = "active";
            navItemsContainer.style.transform= "scale(0)";
            containMain.style.filter = "none"
        } else if(mobileItemsValue = "active") {
            navItemsContainer.style.transform= "scale(0)";
            containMain.style.filter = "none"
        }
    });
});

// PARALLAX EFFECT LOGIC HERE(ABOUT CONTAINER SCROLL)###############
let aboutParallax = document.querySelector("#about-container");

window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;
    aboutParallax.style.backgroundPositionY = offset * 0.7 + "px";
});

// ON SCROLL HOME DIVE EFFECT LOGIC###############
let sheetOneText = document.querySelector("#home-container");

window.addEventListener("scroll", () => {
    if(window.scrollY === 0){
        sheetOneText.style.opacity = "1";   
    }else if(window.scrollY > 100) {
        sheetOneText.style.opacity = "0.2";
        sheetOneText.style.transition = " all 0.2s ease-in-out";
    }
});

// ABOUT TEXT POP-UP LOGIC#####################
let aboutTwo = document.querySelector("#about-two");
let aboutPopup = document.querySelector("#about-popup");

aboutTwo.addEventListener("click", () => {
    aboutPopup.style.transform = "scale(1)"
});

let aboutPopCloseBtn = document.querySelector("#aboutPop-closeBtn");

aboutPopCloseBtn.addEventListener("click", () => {
    aboutPopup.style.transform = "scale(0)"
});

// PARALLAX EFFECT LOGIC HERE(PROJECT CONTAINER SCROLL)###############
let projectParallax = document.querySelector("#project-container");

window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;
    projectParallax.style.backgroundPositionY = offset * 0.6 + "px";
});

// PARALLAX EFFECT LOGIC HERE(last CONTAINER SCROLL)###############
let lastParallax = document.querySelector("#last");

window.addEventListener("scroll", () => {
    let offset2 = window.pageYOffset;
    lastParallax.style.backgroundPositionY = offset2 * 0.6 + "px";
});

// PARALLAX EFFECT LOGIC HERE(last CONTAINER SCROLL)###############
let bestWishParallax = document.querySelector("#best-wish");

window.addEventListener("scroll", () => {
    let offset3 = window.pageYOffset;
    bestWishParallax.style.backgroundPositionY = offset3 * 0.6 + "px";
});




