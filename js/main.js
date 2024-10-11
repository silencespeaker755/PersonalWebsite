$(document).ready(() => {
  AOS.init({
    duration: 800,
    easing: "slide",
  });

  (function ($) {
    "use strict";

    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: "scroll",
    });

    // loader
    var loader = function () {
      setTimeout(function () {
        if ($("#ftco-loader").length > 0) {
          $("#ftco-loader").removeClass("show");
        }
      }, 1);
    };
    loader();

    // Scrollax
    $.Scrollax();

    var burgerMenu = function () {
      $(".js-colorlib-nav-toggle").on("click", function (event) {
        event.preventDefault();
        var $this = $(this);

        if ($("body").hasClass("offcanvas")) {
          $this.removeClass("active");
          $("body").removeClass("offcanvas");
        } else {
          $this.addClass("active");
          $("body").addClass("offcanvas");
        }
      });
    };
    burgerMenu();

    // Click outside of offcanvass
    var mobileMenuOutsideClick = function () {
      $(document).click(function (e) {
        var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($("body").hasClass("offcanvas")) {
            $("body").removeClass("offcanvas");
            $(".js-colorlib-nav-toggle").removeClass("active");
          }
        }
      });

      $(window).scroll(function () {
        if ($("body").hasClass("offcanvas")) {
          $("body").removeClass("offcanvas");
          $(".js-colorlib-nav-toggle").removeClass("active");
        }
      });
    };
    mobileMenuOutsideClick();

    var carousel = function () {
      $(".home-slider").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        nav: false,
        autoplayHoverPause: false,
        items: 1,
        navText: [
          "<span class='ion-md-arrow-back'></span>",
          "<span class='ion-chevron-right'></span>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });
    };
    carousel();

    function fading() {
      var i = 0;
      $(".ftco-animate").waypoint(
        function (direction) {
          if (
            direction === "down" &&
            !$(this.element).hasClass("ftco-animated")
          ) {
            i++;

            $(this.element).addClass("item-animate");
            setTimeout(function () {
              $("body .ftco-animate.item-animate").each(function (k) {
                var el = $(this);
                setTimeout(
                  function () {
                    var effect = el.data("animate-effect");
                    if (effect === "fadeIn") {
                      el.addClass("fadeIn ftco-animated");
                    } else if (effect === "fadeInLeft") {
                      el.addClass("fadeInLeft ftco-animated");
                    } else if (effect === "fadeInRight") {
                      el.addClass("fadeInRight ftco-animated");
                    } else {
                      el.addClass("fadeInUp ftco-animated");
                    }
                    el.removeClass("item-animate");
                  },
                  k * 50,
                  "easeInOutExpo"
                );
              });
            }, 100);
          }
        },
        { offset: "98%" }
      );
    }
    fading();
    window.addEventListener("click", fading);
  })(jQuery);
});
