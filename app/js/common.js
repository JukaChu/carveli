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
    // console.log(brr + ' sho ce');
    // console.log(testSlide.offsetLeft + ' left?')
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
    // console.log('slides-pos ++ ' + way);
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
    // console.log('lastSlide = ' + lastSlide);
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
                                if (window.innerWidth > 992) {
                                    margin = 30;
                                } else if (window.innerWidth > 650 && window.innerWidth < 991) {
                                    margin = 20;
                                } else {
                                    margin = 5;
                                }
                                useSliderRow(sliderPos, slidesContainer, slideWidth, margin, lastSlide, dir);
                                return sliderPos;
                            } else {
                                let way = -1;
                                let dir = -1;
                                // console.log('click-next');
                                sliderPos += way;
                                let margin = 0;
                                if (window.innerWidth > 992) {
                                    margin = 30;
                                } else if (window.innerWidth > 650 && window.innerWidth < 991) {
                                    margin = 20;
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

//swipe prod
let newsScreenContainer = document.querySelector('.product-gallery-mob');
let newsBlocksScreen = document.querySelector('.gallery-mob__track');
let sliderItemsGallery = [...document.querySelectorAll('.gallery-mob__track .img')];
let sliderGalleryLength = 0;
let sliderLinks = [];
function createDots(itm, k) {
    let newDot = document.createElement('div');
    newDot.classList.add('gallery-dot');
    if (k === 0) {
        newDot.classList.add('active');
        if (itm.classList.contains('img--big')) {
            newDot.dataset.big = true;

        } else {
        }
    } else {
        if (itm.classList.contains('img--big')) {
            newDot.dataset.big = true;
        } else {
        }

    }
    newDot.dataset.slideNumber = k;
    document.querySelector('.gallery-mob__dots').appendChild(newDot);


}

function ifHaveSliderGallery() {
    if (!sliderItemsGallery.length) {

    } else {

        sliderItemsGallery.forEach((itm, k) => {
            createDots(itm, k);
            if (itm.classList.contains('img--big')) {
                sliderGalleryLength +=2;
                sliderLinks.push(k + 1);
                return sliderGalleryLength;
            } else {
                sliderGalleryLength += 1;
                // console.log(sliderGalleryLength + ' length-total');
                sliderLinks.push(k);
                return sliderGalleryLength;

            }
        });



    }
}
function getDotsSlider() {
    let dots = [...document.querySelectorAll('.gallery-dot')];
    if (!dots.length) {

    } else {
        let plusItem = 0;
        dots.forEach((dot, j) => {
            if (dot.dataset.big) {
                dot.dataset.slide = j + plusItem;
                plusItem = plusItem + 1;

                // console.log(plusItem);
                dots[j + 1].dataset.slide = j + plusItem;
            } else {
                dot.dataset.slide = j + plusItem;
            }
            dot.addEventListener('click', () => {
                startPosNews = Number(dot.dataset.slide);

                newsBlocksScreen.style.transform = `translate(-${startPosNews * 100}%, 0)`;
                document.querySelector('.gallery-dot.active').classList.remove('active');
                dot.classList.add('active');
            });
            return plusItem;
        });
    }

}
ifHaveSliderGallery();
getDotsSlider();
let startPosNews = 0;
newsScreenContainer.addEventListener('touchstart', handleTouchStart, false);
newsScreenContainer.addEventListener('touchmove', handleTouchMove, false);

var xDown2 = null;
var yDown2 = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown2 = firstTouch.clientX;
    yDown2 = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown2 || ! yDown2 ) {
        return;
    }
    var xUp2 = evt.touches[0].clientX;
    var yUp2 = evt.touches[0].clientY;

    var xDiff2 = xDown2 - xUp2;
    var yDiff2 = yDown2 - yUp2;

    if ( Math.abs( xDiff2 ) > Math.abs( yDiff2 ) ) {/*most significant*/
        if ( xDiff2 > 0 ) {
            /* left swipe */
            if (startPosNews === (sliderGalleryLength - 1)) {

            } else {
                startPosNews = startPosNews + 1;

                // console.log(startPosNews + ' start + total ' + sliderGalleryLength);
                let currentDot = document.querySelector(`.gallery-dot[data-slide='${startPosNews}']`);
                if (!currentDot) {

                } else {
                    document.querySelector('.gallery-dot.active').classList.remove('active');
                    currentDot.classList.add('active');
                }

                newsBlocksScreen.style.transform = `translate(-${startPosNews * 100}%, 0)`;
            }

        } else {
            if (startPosNews === 0) {

            } else {
                startPosNews = startPosNews - 1;
                let currentDot = document.querySelector(`.gallery-dot[data-slide='${startPosNews}']`);
                if (!currentDot) {
                    // console.log('startPos =' + startPosNews);
                    document.querySelector('.gallery-dot.active').classList.remove('active');
                    let prevPos = startPosNews - 1;
                    // console.log(prevPos);
                    let newCurrent = document.querySelector(`.gallery-dot[data-slide='${startPosNews - 1}']`);
                    newCurrent.classList.add('active');

                } else {
                    document.querySelector('.gallery-dot.active').classList.remove('active');
                    currentDot.classList.add('active');
                }
                newsBlocksScreen.style.transform = `translate(-${startPosNews * 100}%, 0)`;
            }
            /* right swipe */
        }
    } else {
        if ( yDiff2 > 0 ) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown2 = null;
    yDown2 = null;
};

window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        newsBlocksScreen.style.transform = `translate(0, 0) translate(0, 0)`;
        // currentSlideLegend = 0;
    } else {
        newsBlocksScreen.style.transform = `translate(-${startPosNews * 100}%, 0)`;

    }
});

//slider row
function getTouchesProd(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

let prodLineScroll = [...document.querySelectorAll('.row-slides__container')];


function ifProdListContains2() {
    if (!prodLineScroll.length) {

    } else {

        prodLineScroll.forEach((line,k) => {
            let prodBlocksScreenLine = [...line.querySelectorAll('.row-slides__slide')].length;
            let prevBtn = line.closest('.row-slides').querySelector('.slides-btn--prev');
            let nextBtn = line.closest('.row-slides').querySelector('.slides-btn--next');
            let startPosProd2 = 0;
            line.addEventListener('touchstart', handleTouchStartProd2, false);
            line.addEventListener('touchmove', handleTouchMoveProd2, false);
            var xDown4 = null;
            var yDown4 = null;

            function getTouchesProd2(evt) {
                return evt.touches ||             // browser API
                    evt.originalEvent.touches; // jQuery
            }

            function handleTouchStartProd2(evt) {
                const firstTouch = getTouchesProd(evt)[0];
                xDown4 = firstTouch.clientX;
                yDown4 = firstTouch.clientY;
            };

            function handleTouchMoveProd2(evt) {
                if (!xDown4 || !yDown4) {
                    return;
                }
                var xUp4 = evt.touches[0].clientX;
                var yUp4 = evt.touches[0].clientY;

                var xDiff4 = xDown4 - xUp4;
                var yDiff4 = yDown4 - yUp4;

                if (Math.abs(xDiff4) > Math.abs(yDiff4)) {/*most significant*/
                    if (xDiff4 > 0) {
                        /* left swipe */
                        // console.log(prodBlocksScreenLine + ' start of left swipe');
                        // console.log(startPosProd2);
                        nextBtn.click();


                    } else {
                        prevBtn.click();

                    }
                } else {
                    if (yDiff4 > 0) {
                        /* up swipe */
                    } else {
                        /* down swipe */
                    }
                }
                /* reset values */
                xDown4 = null;
                yDown4 = null;
                return startPosProd2;
            };

        });

    }
}

ifProdListContains2();

let favBtns = [...document.querySelectorAll('.fav-btn')];

function clickFavBtn() {
    if (!favBtns.length) {

    } else {
        favBtns.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                event.stopPropagation();
                event.preventDefault();

                btn.classList.toggle('like');
            })
        })
    }

}
clickFavBtn();
