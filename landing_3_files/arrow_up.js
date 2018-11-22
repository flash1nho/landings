window.onscroll = function() {
  scrollFunction()
};

document.getElementById("js-back-to-top").onclick = function () {
  topFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("js-back-to-top").style.display = "block";
  } else {
    document.getElementById("js-back-to-top").style.display = "none";
  }
}

function topFunction() {
  $('body, html').animate({scrollTop: 0}, 200);
}
