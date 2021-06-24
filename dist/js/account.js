// open orders

let orderHead = [...document.querySelectorAll('.account-order__head')];

function openAccOrder() {
    if (!orderHead.length){

    } else {
        orderHead.forEach((ord) => {
            ord.addEventListener('click', ()=> {
                ord.classList.toggle('open');
            })
        })
    }
}
openAccOrder();

let openBtnCreateAddress = document.querySelector('.account-address__head .btn');
let addressCreateField = document.querySelector('.address-create');
let addressInner = document.querySelector('.address-inner');
let saveAddress = document.querySelector('.save-address');
let countOfAddress = 0;
function removeOrEdit(id, item) {
    if (id !== 0) {
        item.closest('.single-address').remove();
    } else {

    }
}
function createNewAddress() {
        if (!openBtnCreateAddress) {

        } else {
            let idEditAdd = 0;
            openBtnCreateAddress.addEventListener('click', () => {
                addressCreateField.classList.add('open');
                openBtnCreateAddress.classList.add('hidden');
            });

            saveAddress.addEventListener('click', () => {
                let checkBox = saveAddress.closest('.address-create__content ').querySelector('.address-default');

                let allInputs = [...saveAddress.closest('.address-create__content').querySelectorAll('input[type="text"]')];

                let singleAdd = document.createElement('div');
                singleAdd.classList.add('single-address');
                singleAdd.id = `address-uniq--${countOfAddress}`;

                let blockId = singleAdd.id;
                countOfAddress += 1;

                let singleAddHead = document.createElement('div');
                singleAddHead.classList.add('single-address__head');
                let pHead = document.createElement('p');

                let btnHead = document.createElement('div');
                btnHead.classList.add('remove-add');



                let singleAddCont = document.createElement('div');
                singleAddCont.classList.add('single-address__content');

                let editBtn = document.createElement('button');

                editBtn.classList.add('btn');
                editBtn.classList.add('btn--grey');
                editBtn.innerHTML = addressCreateField.dataset.edit;

                if (checkBox.checked === true) {
                    pHead.innerHTML = checkBox.dataset.true;
                    checkBox.checked = false;
                } else {
                    pHead.innerHTML = checkBox.dataset.false;
                }


                singleAddHead.appendChild(pHead);
                singleAddHead.appendChild(btnHead);


                allInputs.forEach((inp, k) => {
                    let newP = document.createElement('p');
                    if (inp.value === '') {

                    } else {
                        newP.innerHTML = inp.value;
                        newP.dataset.inp = `${k}`;
                        singleAddCont.appendChild(newP);
                        inp.value = '';
                    }

                });
                singleAdd.appendChild(singleAddHead);
                singleAdd.appendChild(singleAddCont);

                singleAdd.appendChild(editBtn);

                editBtn.addEventListener('click', () => {
                    idEditAdd = editBtn.closest('.single-address').id;
                    let pT = [...document.querySelectorAll(`#${blockId} .single-address__content p`)];
                    addressCreateField.classList.add('open');
                    pT.forEach((p, l) => {
                       allInputs[p.dataset.inp].value = p.innerHTML;
                    });

                });
                btnHead.addEventListener('click', () => {
                    singleAdd.remove();
                });
                removeOrEdit(idEditAdd, editBtn);
                addressInner.appendChild(singleAdd);
                addressCreateField.classList.remove('open');
                openBtnCreateAddress.classList.remove('hidden');

            })
        }
}

createNewAddress();


//remove wish item


let wishItemBtn = [...document.querySelectorAll('.rem-wish')];

function removeWishItem() {
        if (!wishItemBtn.length) {

        } else {
            wishItemBtn.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    btn.closest('.wishlist-item').remove();
                })
            })
        }
}

removeWishItem();