$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// window.addEventListener("hashchange", function() { scrollBy(0, -50) })

var $root = $('html, body');

$('a').click(function() {
	$root.animate({
		scrollTop: $($.attr(this, 'href')).offset().top - ($(this).attr("href") == "#about" ? 80 : 60)
	}, 500);

    return false;
});