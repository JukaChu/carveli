let catalogItems = [...document.querySelectorAll('.catalog-item')];

function changeCatalogItemActive() {
        if (!catalogItems.length) {

        } else {
            catalogItems.forEach((item, k) => {
                let colorsItem = [...item.querySelectorAll('.get-color > a')];
                let justItems = [...item.querySelectorAll('.row-slides__slide')];

                colorsItem.forEach((col, j) => {
                    col.addEventListener('mouseover', () => {
                        if (col.classList.contains('active')) {

                        } else {
                            item.querySelector('.row-slides__slide.active').classList.remove('active');
                            justItems[j].classList.add('active');
                            item.querySelector('.get-color > a.active').classList.remove('active');
                            col.classList.add('active');
                        }
                    })
                })
            })
        }
}
changeCatalogItemActive();