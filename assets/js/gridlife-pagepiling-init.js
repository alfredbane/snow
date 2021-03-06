/**
 * WPGL Slider Js
 *
 * Includes function for slick slider
 * init with settings
 *
 * @version 1.2.1
 * @author Memorres digital pvt. ltd.
 * @package WPGL v1.0
 *
 */

(function($){

  function gridlifepPagePilingInit() {

    $('[data-pp-enable="true"]').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: false,
        scrollingSpeed: 700,
        easing: 'swing',
        css3: true,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.c-section',
        animateAnchor: false,
        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){
          $("[data-scrolltype='pp-scroll']").on('click', function(event){
            event.preventDefault();
            var specialIndex = $('.c-weather-forecasts').index();
            $.fn.pagepiling.moveTo(specialIndex+1);
          });
        },
    });

  }

  $(document).ready(function(){
    $(window).resize(function(){
      if($(window).width() > 767) {
        gridlifepPagePilingInit();
      }
    });

    if($(window).width() > 767) {
      gridlifepPagePilingInit();
    }
  });

})(jQuery);
