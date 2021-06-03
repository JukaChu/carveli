let filterElOpen = [...document.querySelectorAll('.filter-part__btn')];
let jsFilterLinks = [...document.querySelectorAll('.js-filter-link')];
let filterPart = [...document.querySelectorAll('.filter-part')];
let modalFilter = document.querySelector('.modal-filter');
$("#button").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 300);
});

function openFilterEl() {
    if (!filterElOpen.length) {

    } else {
        filterElOpen.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                btn.closest('.filter-part').classList.toggle('open');
            })
        });

        jsFilterLinks.forEach((link, j) => {
            link.addEventListener('click', () => {
                modalFilter.classList.add('active');
                filterElOpen[j].closest('.filter-part').classList.add('open');
                console.log(filterElOpen[j].getBoundingClientRect().top);
                // $(['.menu-filter__content']).animate({
                //     scrollTop: $(filterElOpen[j]).offset().top
                // }, 300);
            })
        });
        modalFilter.addEventListener('click', () => {
            modalFilter.classList.remove('active');
            let openFilters = [...document.querySelectorAll('.filter-part.open')];
            openFilters.forEach((flt) => {
                flt.classList.remove('open');
            })

        });
        modalFilter.querySelector('.menu-filter').addEventListener('click', (e) => {
            e.stopPropagation();
        });
        modalFilter.querySelector('.close-modal').addEventListener('click', () => {
            modalFilter.classList.remove('active');
            let openFilters = [...document.querySelectorAll('.filter-part.open')];
            openFilters.forEach((flt) => {
                flt.classList.remove('open');
            })
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
                        console.log(arrayOfFilters);
                        return arrayOfFilters;

                    }
                });
            });
            //input checked add text in btn,change number of set filters
            filterElLabel.forEach((lbl, m) => {
                let id = lbl.querySelector('input').id;
                let idSpan = lbl.querySelector('span');

                idSpan.addEventListener('click', (e) => {
                    console.log(e.target);
                    let checkId = document.querySelector(`input#${id}`);
                    let chekOr = document.querySelector(`input#${id}:checked`);
                    let closesSpanBtn = checkId.closest('.filter-part').querySelector('.filter-part__btn span');
                    console.log(chekOr);
                    if (!chekOr) {
                        let newSmall = document.createElement('small');


                        newSmall.innerHTML = arrayOfFilters[m];


                        newSmall.dataset.number = m;
                        closesSpanBtn.appendChild(newSmall);
                        jsFilterLinks[z].classList.add('filter-checked');
                        let smalls = [...closesSpanBtn.querySelectorAll('small')];
                        jsFilterLinks[z].querySelector('span').innerHTML = smalls.length;
                    } else {
                        let smalls = [...closesSpanBtn.querySelectorAll('small')];
                        smalls.forEach((sml, b) => {
                            if (Number(sml.dataset.number) === m) {
                                sml.remove();
                            }
                        });
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