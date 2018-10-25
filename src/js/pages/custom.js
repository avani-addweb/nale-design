window.onscroll = function() {
  if(jQuery( window ).width() > 767) {
    subFunction()
  }
  if(jQuery( window ).width() <= 767) {
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

jQuery(".banner-section .anchor-section nav ul li a").click(function() {

	jQuery('html, body').animate({
		scrollTop: jQuery($.attr(this, 'href')).offset().top - 80
	}, 1000);	
   
});


jQuery(".header .menu_section nav ul li .mega-menu .column ul li").mouseover(function(){          
  jQuery(".header .menu_section nav ul li .mega-menu .column ul li").removeClass("active");
  jQuery(this).addClass("active");          
});

jQuery(".header .menu_section nav ul li.position-inherit").hover(function(){
	jQuery(".header .menu_section nav ul li .mega-menu .column ul li").removeClass("active");
  jQuery(this).find(".mega-menu .column ul li:first-child").addClass("active");
});

jQuery(".header .menu_section nav ul li .caret").click(function(){
  jQuery(this).toggleClass("bottom");
  if(jQuery(this).hasClass("bottom")){
    jQuery(this).next().show();
  }
  else{
    jQuery(this).next().hide();
  }
});

jQuery(".img-hemburger").click(function(){
  jQuery(".header .menu_section").toggleClass("show");
});

jQuery(".img-grid-wrap").click(function(){
  window.location.href = window.location.hostname + $(this).find("h3").find("a").attr("href");
});

var width = jQuery(window).width();
jQuery(window).on('resize', function(){
   if(jQuery(width > 767)){
      jQuery(".header .site_title_section").removeClass("sticky");
   }
   else{
      jQuery(".header .site_title_section").addClass("sticky");
   }
});

jQuery(".nale-view-link").click(function(){
  document.location.href = jQuery(this).find("a.nale-view-contnet").attr("href");
});