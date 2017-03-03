$('#jumpToBlog1').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});
$('#jumpToBlog2').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});

$('input[type="search"]').on('focus', function() {
    $('.ebm').addClass('move');
});

$('input[type="search"]').on('blur', function() {
    window.setTimeout(function(){
			$('.ebm').removeClass('move');
		},200);
});

$('input[type="search"]').off('focus', function() {
	window.setTimeout(function(){
		$('.ebm').removeClass('move');
	},200);
});

$('input[type="email"]').on('focus', function() {
    $('.help').addClass('help-visible');
});

$('input[type="email"]').on('blur', function() {
    $('.help').removeClass('help-visible');
});

$('input[type="email"]').off('focus', function() {
    $('.help').removeClass('help-visible');
});
