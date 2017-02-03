$(function () {
  $("[data-toggle='tooltip']").tooltip()
})

var $root = $("html, body");

$(".navbar-nav a").click(function() {
  $root.animate({
    scrollTop: $($.attr(this, "href")).offset().top - ($(this).attr("href") == "#about" ? 80 : 60)
  }, 500);

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
    $(this).scrollTop() >= $("#contact").position().top - 60) {
      changeActive("#contact");
  }
});

var changeActive = function(target) {
  $(".active").removeClass("active");
  $(".navbar-nav a[href='" + target + "']").parent().addClass("active");
  console.log(target);
}