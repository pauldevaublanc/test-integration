window.onscroll = function() {
  var nav = document.getElementById('js-navbar');
  if ( window.pageYOffset > 80 ) {
      nav.classList.add("scrolled");
  } else {
      nav.classList.remove("scrolled");
  }
}

var badge = document.getElementsByClassName('js-badge');
var link = document.getElementsByClassName('js-navbar');
var buttonCart = document.getElementsByClassName('js-button-cart')[0]
var buttonClose = document.getElementsByClassName('js-button-close')[0]
var cartDetail = document.getElementsByClassName('js-cart-detail')[0]
var shadow = document.getElementsByClassName('js-shadow')[0]


buttonCart.addEventListener('click', function () {
  cartDetail.classList.add('open')
  shadow.classList.add('visible')
})

buttonClose.addEventListener('click', function () {
  cartDetail.classList.remove('open')
  shadow.classList.remove('visible')
})


function toggleColor(name, elem) {
  for (i = 0; i < name.length; i++) {
    name[i].classList.remove('active')
  }
  elem.classList.add('active');
}


