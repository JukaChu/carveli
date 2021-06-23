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