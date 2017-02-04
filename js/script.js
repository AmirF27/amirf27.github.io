$(function() {
  // to be used later for smooth scroll animation
  var $root = $("html, body");

  var calcOffset = function(anchor) {
    var offset;

    offset = $($.attr(anchor, "href")).offset().top - 60;

    if ($(anchor).attr("href") == "#about") {
      offset -= 20;
    }
    else if ($(window).width() < 768) {
      offset += 10;
    }

    return offset;
  }

  var changeActive = function(target) {
    $(".active").removeClass("active");
    $(".navbar-nav a[href='" + target + "']").parent().addClass("active");
  }

  $("[data-toggle='tooltip']").tooltip();

  $(".nav a").on("click", function(){
    $(".navbar-collapse").collapse("hide");

    $root.animate({
      scrollTop: calcOffset(this)
    }, 700);

    return false;
  });

  $(document).on("scroll", function() {
    if(!$(".navbar-nav a[href='#about']").parent().hasClass("active") &&
      $(this).scrollTop() >= $("#about").position().top - 80 &&
      $(this).scrollTop() <= $("#projects").position().top - 180) {
        changeActive("#about");
    }
    else if (!$(".navbar-nav a[href='#projects']").parent().hasClass("active") &&
      $(this).scrollTop() >= $("#projects").position().top - 180 &&
      $(this).scrollTop() <= $("#contact").position().top - 180) {
        changeActive("#projects");
    }
    else if (!$(".navbar-nav a[href='#contact']").parent().hasClass("active") &&
      $(this).scrollTop() >= $("#contact").position().top - 180) {
        changeActive("#contact");
    }
  });
});