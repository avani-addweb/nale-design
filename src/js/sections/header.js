// const $ = require('jquery');
const matchHeight = require('jquery-match-height');
// const tooltip = require('tooltip-js');
// const select2 = require('select2');

module.exports = () => {
 
  $('a.menu-button').click(function(e){
      $('body').toggleClass('show-menu');
      e.preventDefault();
  });

  $('.mobile-menu .dropdown-toggle').click(function(e){
      $('.open').removeClass('open');
      $(this).parent().toggleClass('open');
      e.preventDefault();
  });

  $(document).ready(function (){
    if ($('SELECT').length){
        //$('SELECT').selectBox();
        // $('.select2').select2();
    }
    // $('.stResi').select2();

  });


  // $('.pricing-grid .row .col-sm-6').matchHeight();

  
};
