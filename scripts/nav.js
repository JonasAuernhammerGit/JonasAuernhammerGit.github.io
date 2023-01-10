const aBurger = document.getElementById('a-burger');
const aClose = document.getElementById('a-close');
const mobileMenu = document.getElementById('mobile-menu');
console.log(mobileMenu);
aBurger.addEventListener('click', openMobileNav);
aClose.addEventListener('click', closeMobileNav);

function openMobileNav() {
    if(mobileMenu.classList.contains('hidden'))
    {
        mobileMenu.classList.remove('hidden');
    } 
}

function closeMobileNav() {
    if(!mobileMenu.classList.contains('hidden'))
    {
        mobileMenu.classList.add('hidden');
    } 
}

window.onunload = function() {
    aBurger.removeEventListener('click', openMobileNav);
    aClose.removeEventListener('click', closeMobileNav);
    return;
}