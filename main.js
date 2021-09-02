const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const close = document.querySelector('.js-close')
const modalContent = document.querySelector('.js-modal-content')

function showModal() {
    modal.classList.add('open')
}

function closeModal() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModal)
}

close.addEventListener('click', closeModal)

modal.addEventListener('click', closeModal)

modalContent.addEventListener('click', function (event) {
    event.stopPropagation()
})
// mobile responsive
var menuMobile = document.getElementById ('mobile-menu');
var header = document.getElementById('header');
var currentHeigh = header.clientHeight;
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')

// Đóng mở mobile menu
menuMobile.onclick = function () {
    var closedMenu = header.clientHeight === currentHeigh;
    if (closedMenu) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// tự động đóng thẻ menu mobile khi click vào thẻ
for (i = 0 ; i < menuItems.length ; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        var moreMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (moreMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}