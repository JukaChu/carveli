
//row slides controls

let allRowSliders = [...document.querySelectorAll('.row-slides')];


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
                console.log(slidesContainer.offsetWidth);
                if (lastSlide.getBoundingClientRect().right < slidesContainer.offsetWidth) {
                    btn.classList.add('disabled');

                } else {
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
                }

            })
        })
    }
}
// ifHaveSlidesRow();

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
// ifHaveSliderGallery();
// getDotsSlider();
let startPosNews = 0;

function ifHaveProdGallery() {
    if (!newsScreenContainer) {

    } else {
        newsScreenContainer.addEventListener('touchstart', handleTouchStart, false);
        newsScreenContainer.addEventListener('touchmove', handleTouchMove, false);

    }

}
// ifHaveProdGallery();
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
        if (!newsBlocksScreen) {

        } else {
            newsBlocksScreen.style.transform = `translate(0, 0) translate(0, 0)`;
        }

        // currentSlideLegend = 0;
    } else {
        if (!newsBlocksScreen) {

        } else {
            newsBlocksScreen.style.transform = `translate(-${startPosNews * 100}%, 0)`;

        }

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

// ifProdListContains2();

let rowSlidersCont = [...document.querySelectorAll('.row-slides')];

function startCarousel() {
    if (!rowSlidersCont.length) {

    } else {
        rowSlidersCont.forEach((row) => {
            let sliderCont = row.querySelector('.row-slides__container');
            let btnPrev = row.querySelector('.slides-btn--prev');
            let btnNext = row.querySelector('.slides-btn--next');

            const swiper = new Swiper(sliderCont, {
                // Optional parameters
                direction: 'horizontal',
                loop: false,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                // If we need pagination
                simulateTouch: false,

                // Navigation arrows
                navigation: {
                    nextEl: btnNext,
                    prevEl: btnPrev,
                    disabledClass: 'disabled'
                },
                cssMode: true,
                mousewheel: true,

                breakpoints: {
                    240: {
                        draggable: true,
                        spaceBetween: 5,
                    },
                    650: {
                        draggable: true,
                        spaceBetween: 20,
                    },
                    992: {
                        draggable: false,
                        spaceBetween: 30,
                    },

                }
                // And if we need scrollbar

            });
        })
    }
}
startCarousel();




let rowGalleryMob = [...document.querySelectorAll('.product-gallery-mob')];

function startCarouselGal() {
    if (!rowGalleryMob.length) {

    } else {
        rowGalleryMob.forEach((row) => {
            let sliderCont = row.querySelector('.row-slides__container');
            let btnDots = row.querySelector('.gallery-mob__dots');

            const swiper = new Swiper(row, {
                // Optional parameters
                direction: 'horizontal',
                loop: false,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                // If we need pagination
                simulateTouch: false,
                spaceBetween: 0,
                draggable: true,
                // Navigation arrows

                cssMode: true,
                mousewheel: true,
                pagination: {
                    el: btnDots,
                    type: 'bullets',
                    bulletClass: 'gallery-dot',
                    bulletActiveClass: 'active',
                    bulletElement: 'div',
                    clickable: true,

                }
                // And if we need scrollbar
            });
        })
    }
}
startCarouselGal();