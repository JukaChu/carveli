let samplesList = [...document.querySelectorAll('.single-sample-color')];
let samplesItems = [...document.querySelectorAll('.sample-item')];

let hdnSamples = document.querySelector('.hidden-sample');

function getSampleInfo(smp) {
    let img = smp.querySelector('img').src;
    let name = smp.dataset.sampleName;
    let id = smp.dataset.sampleId;
    for (let i = 0; i < samplesItems.length; i++) {
        if (samplesItems[i].classList.contains('not-active')) {
            samplesItems[i].querySelector('img').src = img;
            samplesItems[i].querySelector('span').innerHTML = name;
            samplesItems[i].classList.remove('not-active');
            samplesItems[i].setAttribute('data-item-id', id);
            break;
        }
    }
}

function removeSample(smp) {
    let img = smp.querySelector('img').src;
    let name = smp.dataset.sampleName;
    let id = smp.dataset.sampleId;
    for (let i = 0; i < samplesItems.length; i++) {
        if (samplesItems[i].dataset.itemId === id) {
            samplesItems[i].querySelector('img').src = '';
            samplesItems[i].querySelector('span').innerHTML = '';
            samplesItems[i].classList.add('not-active');
            samplesItems[i].setAttribute('data-item-id', 'none');
            break;
        }
    }
}

let samplesAmount = 0;

function selectSamples() {
    if (!samplesList.length) {

    } else {
        hdnSamples.addEventListener('click', () => {
            hdnSamples.closest('.sample-table').classList.toggle('active');

        });
        samplesList.forEach((smp, k) => {
            smp.setAttribute('data-sample-id', k);
            if (smp.classList.contains('active')) {
                smp.classList.add('active');
                samplesAmount += 1;
                hdnSamples.querySelector('strong').innerHTML = samplesAmount;
                getSampleInfo(smp);

            }
            samplesItems.forEach((item) => {
                item.querySelector('p').addEventListener('click', () => {
                    let id = item.dataset.itemId;
                    item.querySelector('img').src = '';
                    item.querySelector('span').innerHTML = '';
                    item.classList.add('not-active');
                    samplesAmount = samplesAmount - 1;
                    if (samplesAmount < 0) {
                        samplesAmount = 0;
                    }
                    hdnSamples.querySelector('strong').innerHTML = samplesAmount;
                    samplesList.forEach((smp2) => {
                        if (smp2.dataset.sampleId === id) {
                            smp2.classList.remove('active');

                        }
                    });


                })
            });
            smp.addEventListener('click', () => {

                if (smp.classList.contains('active')) {
                    smp.classList.remove('active');
                    samplesAmount = samplesAmount - 1;
                    hdnSamples.querySelector('strong').innerHTML = samplesAmount;
                    removeSample(smp);
                } else {

                    if (samplesAmount === 4) {

                    } else {
                        smp.classList.add('active');
                        getSampleInfo(smp);

                        samplesAmount = samplesAmount + 1;

                        hdnSamples.querySelector('strong').innerHTML = samplesAmount;
                    }

                }

                samplesItems = [...document.querySelectorAll('.sample-item')];
                samplesItems.forEach((item) => {
                    item.querySelector('p').addEventListener('click', () => {
                        let id = item.dataset.itemId;
                        item.querySelector('img').src = '';
                        item.querySelector('span').innerHTML = '';
                        item.classList.add('not-active');
                        let totalLength = [...document.querySelectorAll('.sample-item')].length;
                        let totalNotActive = [...document.querySelectorAll('.sample-item.not-active')].length;

                        console.log(samplesAmount);
                        samplesAmount = totalLength - totalNotActive;
                        console.log(samplesAmount);
                        if (samplesAmount < 0) {
                            samplesAmount = 0;
                        }
                        hdnSamples.querySelector('strong').innerHTML = samplesAmount;
                        samplesList.forEach((smp2) => {
                            if (smp2.dataset.sampleId === id) {
                                smp2.classList.remove('active');

                            }
                        });


                    })
                })


            })
        })
    }

}

selectSamples();


let smpLogin = document.querySelector('.sample-checkout__login');

function openModalSmpLog() {
        if (!smpLogin) {

        } else {
            smpLogin.addEventListener('click', () => {
                document.querySelector('.modal-login').classList.add('active');
            })
        }
}
openModalSmpLog();

let spanOpenNewAddress = document.querySelector('.sample-order__container--logged .checkout-form__container .default-form .form-mailing>span');

function openNewsAddress() {
    if (!spanOpenNewAddress) {

    } else {
        spanOpenNewAddress.addEventListener('click', () => {
            spanOpenNewAddress.closest('.sample-order__container').classList.add('sample-order__container--new-address');
        })
    }

}
openNewsAddress();