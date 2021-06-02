window.onscroll = function () {
    scrollFunction();
};


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.body.querySelector(".header").classList.add('scrolled');
    } else {
        document.body.querySelector(".header").classList.remove('scrolled');
    }
}

document.onload = () => {
    scrollFunction();
};

let allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();

//hover items menu

let menuItems = [...document.querySelectorAll('.header__left li')];

let itemIndexActiveMenu = 2;
document.addEventListener('DOMContentLoaded', () => {
    menuItems.forEach((item, k) => {
        if (item.classList.contains('active')) {
            itemIndexActiveMenu = k;
            console.log(itemIndexActiveMenu);
        } else {

        }
    })
});

function headerMenus() {
    if (!menuItems.length) {

    } else {
        menuItems.forEach((item) => {
            item.addEventListener('mouseover', () => {
                // item.querySelector('.sub-menu').classList.add('active');
                menuItems[itemIndexActiveMenu].classList.remove('active');
                item.classList.add('active');
                if (document.body.querySelector(".header").classList.contains('scrolled')) {
                    if (!item.querySelector('.sub-menu')) {

                    } else {
                        item.querySelector('.sub-menu').classList.add('hovered');
                    }

                } else {
                    if (!item.querySelector('.sub-menu')) {

                    } else {
                        item.querySelector('.sub-menu').classList.remove('hovered');
                    }


                }
            });

            item.addEventListener('mouseout', () => {

                item.classList.remove('active');
                menuItems[itemIndexActiveMenu].classList.add('active');
                if (document.body.querySelector(".header").classList.contains('scrolled')) {
                    if (!item.querySelector('.sub-menu')) {

                    } else {
                        item.querySelector('.sub-menu').classList.remove('hovered');
                    }
                }
            })
        })
    }
}

headerMenus();

let burgerBtn = document.querySelector('.burger-btn');
let headerMobile = document.querySelector('.header-mob');

function openMobMenu() {
    if (!burgerBtn) {

    } else {
        burgerBtn.addEventListener('click', () => {
            headerMobile.classList.add('open');
            document.body.classList.add('no-scroll');
        })
    }
}

openMobMenu();



let footerChangeCity = document.querySelector('.footer-selector');
let footerChangeOptions = [...footerChangeCity.querySelectorAll('select option')];
let footerTabs = [...footerChangeCity.closest('.footer-menu').querySelectorAll('.footer-tab')];

function ifSelectFooter() {
    if(!footerChangeCity) {

    } else {
        footerChangeCity.querySelector('select').addEventListener('change', () => {
            let value = footerChangeCity.querySelector('select').value;
            footerChangeOptions.forEach((optio, k) => {
                if (optio.value === value) {
                    footerChangeCity.closest('.footer-menu').querySelector('.footer-tab.active').classList.remove('active');
                    footerTabs[k].classList.add('active');
                }
            })
        })
    }
}
ifSelectFooter();


let footerMobMenuTabs = [...document.querySelectorAll('.footer-menu>span')];

function ifHaveFooterMobMenu() {
    if(!footerMobMenuTabs.length) {

    } else {
        footerMobMenuTabs.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.footer-menu').classList.toggle('open');
            })
        })
    }
}
ifHaveFooterMobMenu();
