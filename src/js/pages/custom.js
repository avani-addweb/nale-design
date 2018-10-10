window.onscroll = function() {
  if($( window ).width() > 767) {
    subFunction()
  }
  if($( window ).width() <= 767) {
    mainFunction()
  }
};

var mainheader = document.getElementById("mainmenu");
var subheader = document.getElementById("submenu");

function mainFunction() {
  var sticky = mainheader.offsetTop;
  if (window.pageYOffset > sticky) {
    mainheader.classList.add("sticky");
  } else {
    mainheader.classList.remove("sticky");
  }
}

function subFunction() {
  var sticky = subheader.offsetTop;
  if (window.pageYOffset > sticky) {
    subheader.classList.add("sticky");
  } else {
    subheader.classList.remove("sticky");
  }
}

$(".banner-section .anchor-section nav ul li a").click(function() {

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top - 80
	}, 1000);	
   
});


$(".header .menu_section nav ul li .mega-menu .column ul li").mouseover(function(){          
  $(".header .menu_section nav ul li .mega-menu .column ul li").removeClass("active");
  $(this).addClass("active");          
});

$(".header .menu_section nav ul li.position-inherit").hover(function(){
	$(".header .menu_section nav ul li .mega-menu .column ul li").removeClass("active");
  $(this).find(".mega-menu .column ul li:first-child").addClass("active");
});

$(".header .menu_section nav ul li .caret").click(function(){
  $(this).toggleClass("bottom");
  if($(this).hasClass("bottom")){
    $(this).next().show();
  }
  else{
    $(this).next().hide();
  }
});

$(".img-hemburger").click(function(){
  $(".header .menu_section").toggleClass("show");
});
