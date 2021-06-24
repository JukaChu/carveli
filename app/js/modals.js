let btnSizeOpen = [...document.querySelectorAll('.product-size__btn')];
let modalForProd = document.querySelector('.modal-for-prod');

function openModalProdDet(item) {
    modalForProd.appendChild(item);
    modalForProd.classList.add('active');
    document.body.classList.add('no-scroll');
    setTimeout(() => {
        modalForProd.querySelector('.menu-info').classList.add('active');
    }, 300);
    let menuInfoBg = [...document.querySelectorAll('.menu-info')];
    let menuCloseBtn = [...document.querySelectorAll('.close-modal')];

    function closeModalWindow() {
        if (!menuInfoBg.length) {

        } else {
            menuInfoBg.forEach((bg) => {
                bg.querySelector('.menu-info__content').addEventListener('click', (e) => {
                    e.stopPropagation();
                })
                bg.addEventListener('click', () => {
                    bg.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                    // document.querySelector('main').classList.remove('open-modal');

                    setTimeout(() => {
                        modalForProd.classList.remove('active');
                        modalForProd.innerHTML = '';
                    }, 600)


                })
            });
            menuCloseBtn.forEach((btn) => {
                btn.addEventListener('click', () => {
                    btn.closest('.menu-info').classList.remove('active');
                    setTimeout(() => {
                        modalForProd.classList.remove('active');
                        modalForProd.innerHTML = '';
                    }, 600)
                    document.body.classList.remove('no-scroll');
                    // document.querySelector('main').classList.remove('open-modal');

                })
            })
        }
    }

    closeModalWindow();

}


function openSizeModal() {
    if (!btnSizeOpen.length) {

    } else {
        btnSizeOpen.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                let itm = btn.closest('.product-size__single').querySelector('.menu-info').cloneNode(true);
                openModalProdDet(itm);

                // btn.closest('.product-size__single').querySelector('.menu-info').classList.add('active');
                // document.body.classList.add('no-scroll');
                // document.querySelector('main').classList.add('open-modal');
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
                // btn.closest('.product-card__single-detail').querySelector('.menu-info').classList.add('active');
                let btnFather = btn.closest('.product-card__single-detail');
                if (btnFather.classList.contains('single-detail--char')) {
                    if (window.innerWidth > 922) {

                            $([document.documentElement, document.body]).animate({
                                scrollTop: $(".global-info__list").offset().top - 140
                            }, 600);

                    } else {
                        let itm = btn.closest('.product-card__single-detail').querySelector('.menu-info').cloneNode(true);
                        openModalProdDet(itm);
                    }
                } else {
                    let itm = btn.closest('.product-card__single-detail').querySelector('.menu-info').cloneNode(true);
                    openModalProdDet(itm);
                }



                // document.body.classList.add('no-scroll');
                // document.querySelector('main').classList.add('open-modal');
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
                // document.querySelector('main').classList.remove('open-modal');
                setTimeout(() => {
                    modalForProd.classList.remove('active');
                    modalForProd.innerHTML = '';
                }, 600)
                bg.querySelector('.menu-info__content').addEventListener('click', (e) => {
                    e.stopPropagation();
                })

            })
        });
        menuCloseBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.menu-info').classList.remove('active');
                setTimeout(() => {
                    modalForProd.classList.remove('active');
                    modalForProd.innerHTML = '';
                }, 600)
                document.body.classList.remove('no-scroll');
                // document.querySelector('main').classList.remove('open-modal');

            })
        })
    }
}


closeModalWindow();

let btnAddToCart = document.querySelector('.product-card__buy .buy-btn');
let buyModalWindow = document.querySelector('.modal-buy');

function addToCartF() {
    if(!btnAddToCart) {

    } else {
        btnAddToCart.addEventListener('click', () => {
            buyModalWindow.classList.add('active');
            document.body.classList.add('no-scroll');
            setTimeout(() => {
                buyModalWindow.querySelector('.menu-info').classList.add('active');
            }, 300);
        });
        buyModalWindow.querySelector('.menu-info').addEventListener('click', (e) => {
            e.stopPropagation();
        });
        buyModalWindow.querySelector('.close-modal').addEventListener('click', () => {
            buyModalWindow.classList.remove('active');
        })

    }
}
addToCartF();
