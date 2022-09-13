

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// Tab-Pane change function
function tabChange() {
    var tabs = $('.nav-tabs > li');
    var active = tabs.filter('.active');
    var next = active.next('li').length ? active.next('li').find('a') : tabs.filter(':first-child').find('a');
    next.tab('show');
}

$('.tab-pane').hover(function () {
    clearInterval(tabCycle);
}, function () {
    tabCycle = setInterval(tabChange, 5000);
});

// Tab Cycle function
var tabCycle = setInterval(tabChange, 5000)

// Tab click event handler
$(function () {
    $('.nav-tabs a').click(function (e) {
        e.preventDefault();
        clearInterval(tabCycle);
        $(this).tab('show')
        tabCycle = setInterval(tabChange, 5000);
    });
});

