window.onscroll = function() {myFunction()};

var header = document.getElementById("mainmenu");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
$(".banner-section .anchor-section nav ul li a").click(function() {

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top - 80
	}, 1000);	
   
});