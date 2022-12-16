// Lấy tất cả class có tên .js-buy-tickets
const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');
const modalPay = document.querySelector('.js-modal-pay-btn');


// Hàm hiện modal mua vé (thêm class open)
function showBuyTickets() {
    modal.classList.add('open')
}

// Hàm ẩn modal mua vé (gỡ class open)
function hideBuyTickets() {
    modal.classList.remove('open') 
}


// Lặp qua từng button buy Ticket
for(const buyBtn of buyBtns ) {
    buyBtn.addEventListener('click', showBuyTickets)
}
// Nghe hành vi click và thực hiện hàm
modalClose.addEventListener('click', hideBuyTickets)
modalPay.addEventListener('click', hideBuyTickets)
modal.addEventListener('click', hideBuyTickets)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

// Đóng mở mobile menu
var header = document.getElementById('header');
var menuBarBtn = document.getElementById('menu-bar-btn');
var headerHeight = header.clientHeight;

menuBarBtn.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tự động đóng mở mobile menu
var menuItems = document.querySelectorAll('.nav-bar > li > a[href*="#"]');
console.log(menuItems);
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('sub-nav')
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
        
    }

    console.log(menuItem.nextElementSibling)
}