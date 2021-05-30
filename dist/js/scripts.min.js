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

$('.rating-stars').raty(
    {
        readOnly:   true,
        starHalf: './img/half-star.svg',
        starOn: './img/star.svg',
        starOff: './img/star-clear.svg',
        hints: ['a', null, '', null, '', null]
    }
);

$('.stars').raty(
    {
        readOnly:   true,
        starHalf: './img/half-star.svg',
        starOn: './img/star.svg',
        starOff: './img/star-clear.svg',
        hints: ['a', null, '', null, '', null]
    }
);

let btnSizeOpen = [...document.querySelectorAll('.product-size__btn')];
function openSizeModal() {
    if (!btnSizeOpen.length) {

    } else {
        btnSizeOpen.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                btn.closest('.product-size__single').querySelector('.menu-info').classList.add('active');
                document.body.classList.add('no-scroll');
                document.querySelector('main').classList.add('open-modal');
            })
        })
    }
}
openSizeModal();
let btnDetailOpen = [...document.querySelectorAll('.product-detail__btn')];
function btnDetailOpenFnc() {
    if (!btnDetailOpen.length) {

    } else {
        btnDetailOpen.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                btn.closest('.product-card__single-detail').querySelector('.menu-info').classList.add('active');
                document.body.classList.add('no-scroll');
                document.querySelector('main').classList.add('open-modal');
            })
        })
    }
}
btnDetailOpenFnc();

let menuInfoBg = [...document.querySelectorAll('.menu-info')];
let menuCloseBtn = [...document.querySelectorAll('.close-modal')];

function closeModalWindow() {
    if (!menuInfoBg.length) {

    } else {
        menuInfoBg.forEach((bg) => {
            bg.addEventListener('click', () => {
                bg.classList.remove('active');
                document.body.classList.remove('no-scroll');
                document.querySelector('main').classList.remove('open-modal');

                bg.querySelector('.menu-info__content').addEventListener('click', (e) => {
                    e.stopPropagation();
                })

            })
        });
        menuCloseBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.menu-info').classList.remove('active');
                document.body.classList.remove('no-scroll');
                document.querySelector('main').classList.remove('open-modal');

            })
        })
    }
}

closeModalWindow();

//row slides controls

let allRowSliders = [...document.querySelectorAll('.row-slides')];


function brbrs(slide) {
    let testSlide = slide;
    let brr = testSlide.getBoundingClientRect().left;
    console.log(brr + ' sho ce');
    console.log(testSlide.offsetLeft + ' left?')
}
function changeDisabledBtn(way, slide) {
    if (way !== 0) {
        let disBtn = slide.closest('.row-slides').querySelector('.slides-btn.disabled');
        if (!disBtn) {

        } else {
            disBtn.classList.remove('disabled');
        }
    } else {
        let disLeft = slide.closest('.row-slides').querySelector('.slides-btn--prev');
        disLeft.classList.add('disabled');
    }
}

function useSliderRow(way, slide, width, margin, lastSlide, dir) {
    console.log('slides-pos ++ ' + way);
    changeDisabledBtn(way, slide);
    let toLeftWidth = lastSlide.getBoundingClientRect().left;

    if ((toLeftWidth) < window.innerWidth) {


        let dopTrans = (toLeftWidth - window.innerWidth);
        if (dir > 0) {
            slide.style.transform = `translate(${way * width}px, 0) translate(${way * margin}px, 0) `;

        } else {
            slide.style.transform = `translate(${way * width}px, 0) translate(${way * margin}px, 0) translate(${-dopTrans}px, 0)`;
            let disBtn = slide.closest('.row-slides').querySelector('.slides-btn--next');
            disBtn.classList.add('disabled');
        }

    } else {
        slide.style.transform = `translate(${way * width}px, 0) translate(${way * margin}px)`;
    }
    brbrs(lastSlide);

    // setTimeout(brbrs, 300);
    console.log('lastSlide = ' + lastSlide);
    // console.log('sumOfMargin = ' + sumOfMargin + ' slidewidth = ' + slideWidth);

}



function ifHaveSlidesRow() {
        if (!allRowSliders.length) {

        } else {
            allRowSliders.forEach((row) => {
                let sliderPos = 0;
                let sliderControlBtns = [...row.querySelectorAll('.slides-btn')];
                let slidesContainer = row.querySelector('.row-slides__track');
                let amountOfSlides = [...row.querySelectorAll('.row-slides__slide')].length;
                let slideWidth = slidesContainer.querySelector('.row-slides__slide').offsetWidth;
                let style = slidesContainer.querySelector('.row-slides__slide').currentStyle || window.getComputedStyle(slidesContainer.querySelector('.row-slides__slide'));
                let lastSlide = [...row.querySelectorAll('.row-slides__slide')][amountOfSlides -1];
                sliderControlBtns.forEach((btn) => {
                    btn.addEventListener('click',() => {
                        if (btn.classList.contains('disabled')) {

                        } else {
                            if (btn.classList.contains('slides-btn--prev')) {
                                let way = 1;
                                sliderPos += way;
                                let margin = 0;
                                let dir = 1;
                                if (window.innerWidth > 768) {
                                    margin = 30;
                                } else {
                                    margin = 5;
                                }
                                useSliderRow(sliderPos, slidesContainer, slideWidth, margin, lastSlide, dir);
                                return sliderPos;
                            } else {
                                let way = -1;
                                let dir = -1;
                                console.log('click-next');
                                sliderPos += way;
                                let margin = 0;
                                if (window.innerWidth > 768) {
                                    margin = 30;
                                } else {
                                    margin = 5;
                                }
                                useSliderRow(sliderPos, slidesContainer, slideWidth, margin, lastSlide, dir);
                                return sliderPos;
                            }
                        }
                    })
                })
            })
        }
}
ifHaveSlidesRow();