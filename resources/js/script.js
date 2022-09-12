

$(document).ready(function(){

    /*----------------stick nav--------------- */
    var waypoint = new Waypoint({
        element: document.getElementsByClassName('js--section-features'),
        handler: function(direction) {
          if(direction == "down"){
              $('nav').addClass('stick');
          } else{
              $('nav').removeClass('stick');
          }
        }, 
        offset: 200
      });


    /*--------scroll on buttons--------------- */
      $('.js--scroll-to-plan').click(function(){
          $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top -60},1000);

        });

     $('.js-scroll-to-start').click(function(){
            $('html, body').animate({ scrollTop: $('.js--section-features').offset().top -60},1000);
  
        });
        

   $('.js--scroll-to-steps').click(function(){
            $('html, body').animate({ scrollTop: $('.js--section-steps').offset().top -60},1000);
  
        }); 

    

    $('.js--scroll-to-cities').click(function(){
            $('html, body').animate({ scrollTop: $('.js--section-cities').offset().top -60},1000);
  
        });

    $('.js--scroll-to-contact-form').click(function(){
            $('html, body').animate({ scrollTop: $('.js--section-contact-form').offset().top -60},1000);
  
        });

    /* scroll up */

    var waypoint = new Waypoint({
        element: document.getElementsByClassName('js--section-features'),
        handler: function(direction) {
          if(direction == "down"){
              $('#1').addClass('show');
          } else{
              $('#1').removeClass('show');
          }
        }, 
      });

      $('.js--scroll-up').click(function(){
        $('html, body').animate({ scrollTop: $('header').offset().top -60},1000);

      });





     /*--------Animation on scroll-------------- */
        $('.js--wp-1').waypoint(function(){
            $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        }, {offset: '50%'});

        $('.js--wp-2').waypoint(function(){
            $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
        }, {offset: '50%'});

        $('.js--wp-3').waypoint(function(){
            $('.js--wp-3').addClass('animate__animated animate__pulse');
        }, {offset: '50%'});
        

     /*--------mobile nav-------------- */

        $('.js--nav-icon').click(function(){
            var nav = $('.main-nav');
            var icon = document.querySelector('.mobile-nav-icon-btn');

            nav.slideToggle(200);


            if(icon.name == 'menu-outline'){
                icon.name = 'close-outline';
            }else {
                icon.name = 'menu-outline';
            }
        })
});

