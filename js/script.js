$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// window.addEventListener("hashchange", function() { scrollBy(0, -50) })

var $root = $('html, body');

$('a').click(function() {
	$root.animate({
		scrollTop: $(this).attr("href") == "#about" ? 0 : $($.attr(this, 'href')).offset().top
	}, 500);

    return false;
});