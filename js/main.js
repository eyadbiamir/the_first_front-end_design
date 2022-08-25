let icon = document.querySelector('.icon');
let list = document.querySelector('.list');
let iconChange = document.querySelector('.icon-change');

let page = document.querySelector('.page');
let header = document.querySelector('header');
let landing = document.querySelector('.landing');
let features = document.querySelector('.features');
let services = document.querySelector('.services');
let galary = document.querySelector('.galary');

let galaryBtn = document.querySelector('.galary-btn');
let featuresBtn = document.querySelector('.features-btn');
let homeBtn = document.querySelector('.home-btn');
let aboutMeBtn = document.querySelector('.about-me-btn');
let servicesBtn = document.querySelector('.services-btn');

let toTop = document.querySelector('.toTop');

featuresBtn.addEventListener('click', function() {
    scrollTo({ top: `${(landing.offsetHeight)}`, behavior: "smooth" })
})
homeBtn.addEventListener('click', function() {
    scrollTo({ top: 0, behavior: "smooth" })
})


servicesBtn.addEventListener('click', function() {
    scrollTo({ top: `${(landing.offsetHeight+features.offsetHeight)}`, behavior: "smooth" })
})


galaryBtn.addEventListener('click', function() {
    scrollTo({ top: `${landing.offsetHeight+features.offsetHeight+services.offsetHeight+70}`, behavior: "smooth" })
})

aboutMeBtn.addEventListener('click', function() {
    scrollTo({ top: `${landing.offsetHeight+features.offsetHeight+services.offsetHeight+galary.offsetHeight+70}`, behavior: "smooth" })
})

function closeList() {
    if (list.style.display === 'block') {
        list.style.display = 'none';
        iconChange.style.width = "70%"
    }
}
page.addEventListener('click', closeList);
icon.addEventListener('click', function() {
    if (list.style.display === 'none' || list.hasAttribute('style') === false) {
        list.style.display = 'block';
        iconChange.style.width = "100%"
    } else if (list.style.display === 'block') {
        list.style.display = 'none';
        iconChange.style.width = "70%"
    }
});
// scroll to top botton
window.addEventListener("scroll", function() {
    // if (window.scrollY >= 500 && window.scrollY <= 700) {
    //     toTop.style.bottom = `${(window.scrollY-600)*0.5}px`
    // } else if (window.scrollY <= 600) {
    //     toTop.style.bottom = `${(window.scrollY-600)*0.5}px`

    // } else if (window.scrollY >= 650) {
    //     toTop.style.bottom = `50px`
    // }
    if (window.scrollY >= 500) {
        toTop.style.bottom = "40px"
    } else {

        toTop.style.bottom = ""
    }
})


toTop.addEventListener("click", function() {
    scrollTo({ top: 0, behavior: "smooth" })

})