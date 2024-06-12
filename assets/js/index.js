// window.onscroll = function () {
//     scrollFunction();
// };
// var first = true;
// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementById("navbar").classList.add('activenavbar');
//     }
//     else {
//         document.getElementById("navbar").classList.remove('activenavbar');
//     }
// }window.onload = init;



// dark and light theme toggle 
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme === "dark" || (localStorageTheme === null && systemSettingDark.matches)) {
    return "dark"; // Set default to dark if localStorage theme is "dark" or if localStorage theme is null and system setting is dark
  }

  return "light";
}

function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "Change to light theme" : "Change to dark theme";
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerText = newCta;
}

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});

// Ensure theme consistency on page load
if (currentThemeSetting === "dark") {
  localStorage.setItem("theme", "dark");
} else {
  localStorage.setItem("theme", "light");
}




// Show the first tab and hide the rest


// text rotate animation 

var Emblem = {
  init: function(el, str) {
    var element = document.querySelector(el);
    var text = str ? str : element.innerHTML;
    element.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      var letter = text[i];
      var span = document.createElement('span');
      var node = document.createTextNode(letter);
      var r = (360/text.length)*(i);
      var x = (Math.PI/text.length).toFixed(0) * (i);
      var y = (Math.PI/text.length).toFixed(0) * (i);
      span.appendChild(node);
      span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      element.appendChild(span);
    }
  }
};

Emblem.init('.emblem');


// hero section slider 
//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning =3000;
let timeAutoNext = 12000;
// let timeAutoNext = 145000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}





// service card animation js 
let items = document.querySelectorAll('.servicenew');
console.log(items);
items.forEach(item => {
    item.addEventListener('mousemove', (e)=>{
        let positionPx = e.x - item.getBoundingClientRect().left;
        let positionX = (positionPx / item.offsetWidth) * 100;
        console.log(positionX, positionPx);

        let positionPy = event.y - item.getBoundingClientRect().top;
        let positionY = (positionPy / item.offsetHeight) * 100;

        
        item.style.setProperty('--rX', (0.5)*(50 - positionY) + 'deg');
        item.style.setProperty('--rY', -(0.5)*(50 - positionX) + 'deg');
    })
    item.addEventListener('mouseout', ()=>{
        item.style.setProperty('--rX', '0deg');
        item.style.setProperty('--rY', '0deg');
    })
})



