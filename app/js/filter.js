let filterElOpen = [...document.querySelectorAll('.filter-part__btn')];
let jsFilterLinks = [...document.querySelectorAll('.js-filter-link')];
let filterPart = [...document.querySelectorAll('.filter-part')];
let modalFilter = document.querySelector('.modal-filter');
$("#button").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 300);
});
let numberForDisableBtn = 0;
let doesActiveFilters = 0;
let filterClearBtn = document.querySelector('.clear-filters');
let filterMobBtn = document.querySelector('.filter-btn');
let filterMobCLose = document.querySelector('.close-filter');
function changeClearButtonStatus(numb) {
    doesActiveFilters += numb;
    if (doesActiveFilters > 0 || numberForDisableBtn > 0) {
        filterClearBtn.classList.remove('disabled');
    } else {
        filterClearBtn.classList.add('disabled');
    }

}

function openFilterEl() {
    if (!filterElOpen.length) {

    } else {
        filterMobBtn.addEventListener('click', () => {
           document.body.classList.add('no-scroll');
            modalFilter.classList.add('active');
        });
        filterMobCLose.addEventListener('click', () => {
           document.body.classList.remove('no-scroll');
            modalFilter.classList.remove('active');
        });

        filterClearBtn.addEventListener('click', () => {
            let filterContainer = document.querySelector('.menu-filter__content');
            let inputChecked = [...filterContainer.querySelectorAll('input:checked')];
            inputChecked.forEach((inp) => {
                inp.nextElementSibling.click();
            });
            // let priceRangeCont = document.querySelector('.filter-part__el--price');
            clearRange();
            updateValues();
            changePlaceholderFilter(from, to, $range[0], max, min, $from[0], $to[0]);
        });

        filterElOpen.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                btn.closest('.filter-part').classList.toggle('open');
            })
        });

        jsFilterLinks.forEach((link, j) => {
            link.addEventListener('click', () => {
                modalFilter.classList.add('active');
                filterElOpen[j].closest('.filter-part').classList.add('open');
                document.body.classList.add('no-scroll');
            })
        });
        modalFilter.addEventListener('click', () => {
            modalFilter.classList.remove('active');
            let openFilters = [...document.querySelectorAll('.filter-part.open')];
            openFilters.forEach((flt) => {
                flt.classList.remove('open');
            });
            document.body.classList.remove('no-scroll');

        });
        modalFilter.querySelector('.menu-filter').addEventListener('click', (e) => {
            e.stopPropagation();
        });
        modalFilter.querySelector('.close-modal').addEventListener('click', () => {
            modalFilter.classList.remove('active');
            let openFilters = [...document.querySelectorAll('.filter-part.open')];
            openFilters.forEach((flt) => {
                flt.classList.remove('open');
            });
            document.body.classList.remove('no-scroll');
        });
        filterPart.forEach((part, z) => {
            //create arrays for filter text, to append in btn head
            let arrayOfFilters = [];
            let filterElText = [...part.querySelectorAll('.filter-part__el span')];
            let filterElLabel = [...part.querySelectorAll('.filter-part__el label')];
            filterElText.forEach((text) => {
                text.childNodes.forEach((nd) => {
                    if (nd.nodeType === 3) {
                        arrayOfFilters.push(nd.textContent);
                        // console.log(arrayOfFilters);
                        return arrayOfFilters;

                    }
                });
            });
            //input checked add text in btn,change number of set filters
            filterElLabel.forEach((lbl, m) => {
                let id = lbl.querySelector('input').id;
                let idSpan = lbl.querySelector('span');

                idSpan.addEventListener('click', (e) => {
                    // console.log(e.target);
                    let checkId = document.querySelector(`input#${id}`);
                    let chekOr = document.querySelector(`input#${id}:checked`);
                    let closesSpanBtn = checkId.closest('.filter-part').querySelector('.filter-part__btn span');
                    // console.log(chekOr);
                    if (!chekOr) {
                        let newSmall = document.createElement('small');


                        newSmall.innerHTML = arrayOfFilters[m];


                        newSmall.dataset.number = m;
                        closesSpanBtn.appendChild(newSmall);
                        jsFilterLinks[z].classList.add('filter-checked');
                        let smalls = [...closesSpanBtn.querySelectorAll('small')];
                        jsFilterLinks[z].querySelector('span').innerHTML = smalls.length;
                        changeClearButtonStatus(1)
                    } else {
                        let smalls = [...closesSpanBtn.querySelectorAll('small')];
                        smalls.forEach((sml, b) => {
                            if (Number(sml.dataset.number) === m) {
                                sml.remove();
                            }
                        });
                        changeClearButtonStatus(-1)
                        smalls = [...closesSpanBtn.querySelectorAll('small')];
                        jsFilterLinks[z].querySelector('span').innerHTML = smalls.length;
                        if (smalls.length === 0) {
                            jsFilterLinks[z].classList.remove('filter-checked');
                        }

                    }
                })
            });
            let btnSpan = part.querySelector('.filter-part__btn span');
        })
    }
}

openFilterEl();

let colorFilters = [...document.querySelectorAll('.filter-part--color .filter-part__el ul li')];

function changeColorBgs() {
    if (!colorFilters.length) {

    } else {
        colorFilters.forEach((li) => {
            let label = li.querySelector('label').dataset.color;
            let span = li.querySelector('span');

            let styler = window.getComputedStyle(span, '::before');
            let color = styler.getPropertyValue('background');
            // console.log(styler);
            let stylesheetLabel = document.createElement('style');
            stylesheetLabel.innerHTML =
                `[data-color='${label}'] span::before {
                    background: ${label} !important;
                    }
                
                `;
            li.appendChild(stylesheetLabel);

            // console.log(color);
        })
    }
}
changeColorBgs();

let rangeNumbersInput = [...document.querySelectorAll('.range-price__numbers input')];
let filterLinkPrice = document.querySelector('.js-filter-link--price');
let innerTextPrice = !filterLinkPrice ? 0 : filterLinkPrice.innerHTML;


function changePlaceholderFilter(from, to, range, max, min, from2, to2) {

    let newStringText = `${from}₴ - ${to}₴`;
    let newSmall = document.createElement('small');


    newSmall.innerHTML = newStringText;

    // console.log(range);
    let rangeSpan = range.closest('.filter-part').querySelector('.filter-part__btn span');

    let rangeSpanSmall = rangeSpan.querySelector('small');
    if (from === min && to === max) {
        if (!rangeSpanSmall) {
            filterLinkPrice.innerHTML = innerTextPrice;

        } else {
            rangeSpanSmall.remove();
            filterLinkPrice.innerHTML = innerTextPrice;
        }
        from2.value = '';
        to2.value = '';
        numberForDisableBtn = 0;
    } else {
        numberForDisableBtn = 1;
        if (!rangeSpanSmall) {
            rangeSpan.appendChild(newSmall);
            //IF DATA FROM === DATA MIN AND DATA TO === DATA MAX;
        } else {
            rangeSpanSmall.remove();
            rangeSpan.appendChild(newSmall);

        }
        filterLinkPrice.innerHTML = newStringText;
    }
    changeClearButtonStatus(0);


}

var $range = $(".js-range-slider"),
    $from = $(".from-range"),
    $to = $(".to-range"),
    range,
    min = $range.data('min'),
    max = $range.data('max'),
    from,
    to;

var updateValues = function () {
    $from.prop("value", from);
    $to.prop("value", to);
};


$range.ionRangeSlider({
    onChange: function (data) {
        from = data.from;
        to = data.to;
        updateValues();
        changePlaceholderFilter(from, to, $range[0], max, min, $from[0], $to[0]);
    }
});

range = $range.data("ionRangeSlider");
var updateRange = function () {
    range.update({
        from: from,
        to: to
    });
};
var clearRange = function() {
    range.update({
        from: min,
        to: max
    });
    from = min;
    to = max;
};

$from.on("input", function () {
    from = +$(this).prop("value");
    if (from < min) {
        from = min;
    }
    if (from > to) {
        from = to;
    }
    updateValues();
    updateRange();
    changePlaceholderFilter(from, to, $range[0], max, min, $from[0], $to[0]);
});

$to.on("input", function () {
    to = +$(this).prop("value");
    if (to > max) {
        to = max;
    }
    if (to < from) {
        to = from;
    }
    updateValues();
    updateRange();
    changePlaceholderFilter(from, to, $range[0], max, min, $from[0], $to[0]);
});


//showroom filter

let showRoomFilters = [...document.querySelectorAll('.showroom-filter')];

function changeActiveShowroomFilter() {
    if (!showRoomFilters.length) {

    } else {
        showRoomFilters.forEach((btn) => {
            btn.addEventListener('click', () => {
                let active = document.querySelector('.showroom-filter.active');
                if (!active) {

                } else {
                    active.classList.remove('active');
                    btn.classList.add('active')
                }
            })
        })
    }
}
changeActiveShowroomFilter();