let btnSizeOpen = [...document.querySelectorAll('.product-size__btn')];
let modalForProd = document.querySelector('.modal-for-prod');

function openModalProdDet(item) {
    modalForProd.appendChild(item);
    modalForProd.classList.add('active');
    document.body.classList.add('no-scroll');
    if (window.innerWidth > 922) {
        setTimeout(() => {
            modalForProd.querySelector('.menu-info').classList.add('active');
        }, 300);
    } else {
        setTimeout(() => {
            modalForProd.querySelector('.menu-info').classList.add('active');
        }, 100);
    }



    let menuInfoBg = [...document.querySelectorAll('.menu-info')];
    let menuCloseBtn = [...document.querySelectorAll('.close-modal')];

    function closeModalWindow() {
        if (!menuInfoBg.length) {

        } else {
            menuInfoBg.forEach((bg) => {
                bg.querySelector('.menu-info__content').addEventListener('click', (e) => {
                    e.stopPropagation();
                });
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
                    if (btn.closest('.menu-info')) {
                        btn.closest('.menu-info').classList.remove('active');
                        setTimeout(() => {
                            modalForProd.classList.remove('active');
                            modalForProd.innerHTML = '';
                        }, 600)
                        document.body.classList.remove('no-scroll');
                        // document.querySelector('main').classList.remove('open-modal');
                    }


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


                        openModalProdDet(itm, btn);
                    }
                } else {
                    let itm = btn.closest('.product-card__single-detail').querySelector('.menu-info').cloneNode(true);
                    openModalProdDet(itm, btn);
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
                if (btn.closest('.menu-info')) {
                    btn.closest('.menu-info').classList.remove('active');
                    setTimeout(() => {
                        modalForProd.classList.remove('active');
                        modalForProd.innerHTML = '';
                    }, 600);
                    document.body.classList.remove('no-scroll');
                    // document.querySelector('main').classList.remove('open-modal');
                }


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



//open login

let openLoginBtn = document.querySelector('.modal-login__login .btn');

function loginCheckoutBtn() {
    if (!openLoginBtn) {

    } else {
        let modalLogin = document.querySelector('.modal-login');
        modalLogin.addEventListener('click', () => {
           modalLogin.classList.remove('active');

        });

        let modalLoginBlock = document.querySelector('.modal-login-block');
        modalLoginBlock.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        let guestModalLogin = document.querySelector('.modal-login__guest');
        guestModalLogin.addEventListener('click', () => {
           modalLogin.classList.remove('active');
        });

        let closeModalLogin = document.querySelector('.close-modal');
        closeModalLogin.addEventListener('click',() => {
           modalLogin.classList.remove('active');

        });
        openLoginBtn.addEventListener('click', () => {
            openLoginBtn.closest('.modal-login__have-acc').classList.add('active');
        });


    }

}

loginCheckoutBtn();

let searchInputs = [...document.querySelectorAll('input[type="search"]')];
let bigSerchResult = document.querySelector('.search-big');

function openBigSearchWindow() {
    if (!searchInputs.length) {

    } else {
        searchInputs.forEach((inp) => {
            let timerId = setTimeout(() => {
                bigSerchResult.classList.remove('search-big--foc');
            }, 200);
            clearTimeout(timerId);
            inp.addEventListener('focus', () => {
                bigSerchResult.classList.add('search-big--foc');
            });
            inp.addEventListener('focusout', (e) => {
                timerId = setTimeout(() => {
                    bigSerchResult.classList.remove('search-big--foc');
                }, 200);

            });

            inp.addEventListener('input', () => {
                let inpVal = inp.value;
                if (inpVal === '') {
                    bigSerchResult.classList.remove('search-big--val');
                } else {
                    bigSerchResult.classList.add('search-big--val');
                }
            });
            document.addEventListener('click', (e) => {
                if (e.target.closest('.search-big')) {
                    clearTimeout(timerId);
                    bigSerchResult.classList.add('search-big--foc');

                } else {
                    if (e.target == inp) {

                    } else {
                        if(bigSerchResult) {
                            bigSerchResult.classList.remove('search-big--foc');
                        }

                    }

                }
            })

        })
    }

}
openBigSearchWindow();



//insta modals

let instaItem = [...document.querySelectorAll('.row-slides--insta .row-slides__slide')];
let modalInsta = document.querySelector('.modal-insta');
let instaLength = instaItem.length - 1;

let instaActiveSlide = 0;
function ifHaveInstaItem() {
        if (!instaItem.length) {

        } else {
            instaItem.forEach((item, k) => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    instaActiveSlide = k;

                    modalInsta.classList.add('open');
                    document.body.classList.add('no-scroll');

                    let img = item.querySelector('.img img').dataset.src;

                    let modalInstaImage = modalInsta.querySelector('.left .img img');
                    modalInstaImage.src = '';
                    modalInstaImage.src = img;
                    if (instaActiveSlide === 0) {
                        [...modalInsta.querySelectorAll('.control-btn')].forEach((btn) => {
                            btn.classList.remove('disabled');
                            if (btn.classList.contains('left-btn')) {
                                btn.classList.add('disabled');
                            }
                        })
                    } else {
                        [...modalInsta.querySelectorAll('.control-btn')].forEach((btn) => {
                            btn.classList.remove('disabled');
                        });
                        if (instaActiveSlide === instaLength) {
                            [...modalInsta.querySelectorAll('.control-btn')].forEach((btn) => {
                                btn.classList.remove('disabled');
                                if (btn.classList.contains('right-btn')) {
                                    btn.classList.add('disabled');
                                }
                            })
                        }
                    }
                });

            });
            modalInsta.addEventListener('click', () => {
                modalInsta.classList.remove('open');
                document.body.classList.remove('no-scroll');

            });
            modalInsta.querySelector('.modal-insta__block').addEventListener('click', (e)=>{
                e.stopPropagation();
            });
            modalInsta.querySelector('.close-modal').addEventListener('click', ()=>{
                modalInsta.classList.remove('open');
                document.body.classList.remove('no-scroll');
            });

            let modalInstaControls = [...modalInsta.querySelectorAll('.control-btn')];

            modalInstaControls.forEach((btn, l) => {

                btn.addEventListener('click', ()=> {
                    modalInstaControls.forEach((btn2) => {
                        btn2.classList.remove('disabled')
                    });
                    if (btn.classList.contains('left-btn')) {
                        instaActiveSlide = instaActiveSlide - 1;
                        if (instaActiveSlide === 0) {
                            btn.classList.add('disabled');
                        } else {
                            btn.classList.remove('disabled');
                        }
                        let newImg = instaItem[instaActiveSlide].querySelector('.img img').dataset.src;
                        let modalInstaImage = modalInsta.querySelector('.left .img img');
                        modalInstaImage.src = newImg;
                    } else {
                        instaActiveSlide = instaActiveSlide + 1;
                        if (instaActiveSlide === instaLength) {
                            btn.classList.add('disabled');
                        } else {
                            btn.classList.remove('disabled');
                        }
                        let newImg = instaItem[instaActiveSlide].querySelector('.img img').dataset.src;
                        let modalInstaImage = modalInsta.querySelector('.left .img img');
                        modalInstaImage.src = newImg;
                    }

                })
            })

        }
}

ifHaveInstaItem();