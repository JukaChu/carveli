window.onscroll = function () {
    scrollFunction();

};
function checkScrollDir() {
    newValue = window.pageYOffset;
    if (oldValue < newValue) {

        if (document.body.querySelector(".header")) {
            document.body.querySelector(".header").classList.add('scroll-down');
        }
    } else if (oldValue > newValue) {
        if (document.body.querySelector(".header")) {
            document.body.querySelector(".header").classList.remove('scroll-down');
        }
    }
    oldValue = newValue;
}

let oldValue = 0;
let newValue = 0;
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if (document.body.querySelector(".header")) {
            document.body.querySelector(".header").classList.add('scrolled');
        }
        checkScrollDir()
    } else {
        if (document.body.querySelector(".header")) {
            document.body.querySelector(".header").classList.remove('scrolled');
            document.body.querySelector(".header").classList.remove('scroll-down');
        }

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

let menuItems = [...document.querySelectorAll('.header__left > ul > li')];

let itemIndexActiveMenu = 2;
document.addEventListener('DOMContentLoaded', () => {
    menuItems.forEach((item, k) => {
        if (item.classList.contains('active')) {
            itemIndexActiveMenu = k;
            console.log(itemIndexActiveMenu);
        } else {

        }
        let subMenusNext = [...item.querySelectorAll('.sub-menu__item')];

        subMenusNext.forEach((men, k) => {
            if (men.querySelector('.sub-next-menu')) {
                men.addEventListener('mouseover', () => {
                    men.querySelector('.sub-next-menu').classList.add('hov');
                    men.children[0].classList.add('hov');
                    // men.children[0];
                })
                men.addEventListener('mouseout', () => {
                    men.querySelector('.sub-next-menu').classList.remove('hov');
                   men.children[0].classList.remove('hov');

                })
            } else {

            }

        })
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
let footerChangeOptions = [...document.querySelectorAll('.footer-selector select option')];

function ifSelectFooter() {
    if(!footerChangeCity) {

    } else {
        let footerTabs = [...footerChangeCity.closest('.footer-menu').querySelectorAll('.footer-tab')];
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

let infoBannerOpen = document.querySelector('.info-banner-container');

function ifInfoBanner() {
    if(!infoBannerOpen) {

    } else {
        let btnOpeneer = infoBannerOpen.querySelector('.info-banner-btn');
        btnOpeneer.addEventListener('click', () => {
            infoBannerOpen.classList.toggle('open');
        })
    }
}
ifInfoBanner();

let langBtn = [...document.querySelectorAll('.btn-lang > span')];

function openLangMenu() {
    if (!langBtn.length) {

    } else {
        langBtn.forEach((btn) => {
            btn.addEventListener('click', ()=> {
                btn.classList.toggle('active');
            })
        })
    }
}
openLangMenu();

let mobileBg = document.querySelector('.header-mob__bg');
let mobCloseMenu = [...document.querySelectorAll('.close-mob')];

function closeMobileMenu() {
    if (!mobCloseMenu.length) {

    } else {
        mobCloseMenu.forEach((btn) => {
            btn.addEventListener('click', () => {
                headerMobile.classList.remove('open');
                document.body.classList.remove('no-scroll');
            })
        });
        mobileBg.addEventListener('click', () =>{
            headerMobile.classList.remove('open');
            document.body.classList.remove('no-scroll');
        })
    }
}
closeMobileMenu();


let menuMobLangSwitch = document.querySelector('.mob-switch-lang > span');

function ifHaveMobLang() {
    if (!menuMobLangSwitch) {

    } else {
        menuMobLangSwitch.addEventListener('click', () => {
            menuMobLangSwitch.classList.toggle('open');
        })
    }
}
ifHaveMobLang();


let mobHeaderTabSwitch = [...document.querySelectorAll('.header-mob__head ul li')];
let mobHeaderTabs = [...document.querySelectorAll('.mob-menu__tab')];


function changeActiveTabMob() {
    if (!mobHeaderTabSwitch.length) {

    } else {
        mobHeaderTabSwitch.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                let activeOne = document.querySelector('.header-mob__head ul li.active');
                if (activeOne) {
                    activeOne.classList.remove('active');
                    document.querySelector('.mob-menu__tab.active').classList.remove('active');
                } else {

                }
                mobHeaderTabs[k].classList.add('active');
                btn.classList.add('active');
            })
        })
    }
}
changeActiveTabMob();

let mobMenuItems = [...document.querySelectorAll('.mob-menu-item')];
let mobMenuTopSide = document.querySelector('.header-mob__top');

function slideMobMenu() {
        if(!mobMenuItems.length) {

        } else {
            mobMenuItems.forEach((btn) => {
                btn.addEventListener('click', () => {
                    let slideMenu = btn.closest('li').querySelector('.mob-side-menu');
                    if (slideMenu) {
                        btn.classList.add('active');
                        mobMenuTopSide.classList.add('slide');
                        console.log(slideMenu.offsetHeight);
                        mobMenuTopSide.style.height = `${slideMenu.offsetHeight}px`;
                        mobMenuTopSide.closest('.header-mob__container').classList.add('slide');

                        let btnGetBack = btn.closest('li').querySelector('.get-back');
                        btnGetBack.addEventListener('click', () => {

                            mobMenuTopSide.classList.remove('slide');
                            mobMenuTopSide.style.height = 'auto';
                            mobMenuTopSide.closest('.header-mob__container').classList.remove('slide');
                            setTimeout(() => {
                                btn.classList.remove('active');
                            }, 600)

                        })
                    } else {

                    }
                });


            })
        }
}
slideMobMenu();

//cart

let quanChange = [...document.querySelectorAll('.quan')];

function changeQuantity() {
    if (!quanChange.length) {

    } else {
        quanChange.forEach((q) => {
            q.addEventListener('click', () => {
                if (q.classList.contains('quan-minus')) {
                    q.nextElementSibling.value = Number(q.nextElementSibling.value) - 1;
                } else {
                    q.previousElementSibling.value = Number(q.previousElementSibling.value) + 1;
                }
            })
        })
    }

}

changeQuantity();

let actCouponP = document.querySelector('.activate-coupon');

function openCoupon() {
    if (!actCouponP) {

    } else {
        actCouponP.addEventListener('click', () => {
            actCouponP.closest('.cart-info__coupon').classList.add('active');
        })
    }
}

openCoupon();

//open help checkout

let btnCheckOutOpen = [...document.querySelectorAll('.checkout-help__single')];

function controlCheckoutHelp() {
    if (!btnCheckOutOpen.length) {

    } else {
        btnCheckOutOpen.forEach((btn) => {
            if (btn.querySelector('.more')) {
                let btn2 = btn.querySelector('.more');
                btn2.addEventListener('click', () => {
                    btn.classList.toggle('open');
                })
            } else {

            }

        })
    }
}
controlCheckoutHelp();

//checkout next


let checkoutNextBtn = [...document.querySelectorAll('.checkout-next')];

function checkoutNextChange() {

    if (!checkoutNextBtn.length) {

    } else {
        checkoutNextBtn.forEach((btn, k) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.closest('.checkout-step').classList.add('hidden');
                btn.closest('.checkout-step').nextElementSibling.classList.remove('hidden');
                [...document.querySelectorAll('.checkout-progress ul li')][k].classList.add('done');
                [...document.querySelectorAll('.checkout-progress ul li')][k].nextElementSibling.classList.add('active');
            })
        })
    }

}

checkoutNextChange();



