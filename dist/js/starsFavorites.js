//stars

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

//favorites
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