/* 
*Stefan Djokic
*august 2014.
*djokicstefan.com
 */


$(document).on('click','.add-tenant', function() {
    document.getElementById('number-of-tenants').value++;
    var NoT = document.getElementById('number-of-tenants').value;
    $("#tenants").append('<div class="row tenant"><h4 class="col-xs-12">Tenant Details #' + NoT +'</h4><div class="col-sm-6"><label for="tenant-name-' + NoT +'">Name</label><input type="text" class="form-control" id="tenant-name-' + NoT +'" name="tenant-name-' + NoT +'" required></div><div class="col-sm-6"><label for="tenant-surname' + NoT +'">Surname</label><input type="text" class="form-control" id="tenant-surname' + NoT +'" name="tenant-surname' + NoT +'" required></div><div class="col-sm-6"><label for="tenant-email' + NoT +'">Email</label><input type="email" class="form-control" id="tenant-email' + NoT +'" name="tenant-email' + NoT +'" required></div><div class="col-sm-6"><label for="tenant-mobile' + NoT +'">Mobile</label><input type="text" class="form-control" id="tenant-mobile' + NoT +'" name="tenant-mobile' + NoT +'" required></div><div class="col-sm-12"><a class="btn btn-default col-sm-3 col-xs-4 remove-tenant"><i class="fa fa-minus-square"></i> Remove</a></br></div></br></div>');   
});

$(document).on('click', '.remove-tenant', function() {
    document.getElementById('number-of-tenants').value--;
    $(this).closest('.tenant').remove();

});


$('#login').on('click', function() {
    $("#login-form").toggleClass('fadeOutUp');
    $('#login-form').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#login-form').toggleClass('hidden');
        $("#login-form").removeClass('fadeOutUp');
        $("#admin-form").removeClass('fadeOutDown');
        $('#admin-form').toggleClass('hidden');
        $('#admin-form').toggleClass('fadeInUp');
        $('#logout').removeClass('fadeOutRight');
        $('#logout').toggleClass('hidden');
        $('#logout').toggleClass('fadeInRight');
    });    
});

$('#logout').on('click', function() {
    $("#admin-form").toggleClass('fadeOutDown');
    $('#admin-form').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#admin-form').toggleClass('hidden');
        $("#admin-form").removeClass('fadeOutDown');
        $('#login-form').removeClass('fadeOutUp');
        $('#login-form').toggleClass('hidden');
        $('#login-form').toggleClass('fadeInDown');
        $('#logout').removeClass('fadeInRight');
        $('#logout').toggleClass('fadeOutRight');
        $('#logout').toggleClass('hidden');
    });    
});

/* ==============================================
Sticky Navbar
=============================================== */

$(document).ready(function(){
    $(".navbar").sticky({topSpacing:0});

    //countUp
    var options = {
          useEasing : true, 
          useGrouping : true, 
          separator : ',', 
          decimal : '.' 
        }
    var landlord_price = new countUp("landlord_counter", 0.00, 25.00, 2, 2.5, options);
    var tenant_price = new countUp("tenant_counter", 0.01, 10.00, 2, 2, options);
    var agent_price = new countUp("agent_counter", 0.01, 21.99, 2, 3, options);
    landlord_price.start();
    tenant_price.start();
    agent_price.start();

    $('#datepicker').datetimepicker({
                    pickTime: false
                });
    $('#timepicker').datetimepicker({
                    pickDate: false
                });
});




/* ==============================================
Auto Close Responsive Navbar on Click
=============================================== */

function close_toggle() {
if ($(window).width() <= 768) {
  $('.navbar-collapse a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
}
else {
 $('.navbar .navbar-default a').off('click');
}
}
close_toggle();

$(window).resize(close_toggle); 


    
/* ==============================================
Smooth Scroll To Anchor
=============================================== */

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar a,.btn').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
    



       /*=========================*/
     /*========tooltip and popovers====*/
     /*==========================*/
    $("[data-toggle=popover]").popover();
    
    $("[data-toggle=tooltip]").tooltip();


/*=========================*/
     /*========Animation on scroll with wow.js====*/
     /*==========================*/
     
   wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        mobile:       true
      }
    );
    wow.init();
    
    









