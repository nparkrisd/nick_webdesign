$(document).ready(function(){

	$('.button').click(function(){
		console.log('click detected');
		$('h1').fadeIn().fadeOut(
});

	$('.element').click(function(){
		console.log('element clicked');
		$(this).toggleClass('play');
	});

	$('h2').click(function(){
		var sample = $(this).text();
		console.log(sample);
		$('.a').text(sample).toggle();
		$('.b').toggle();
	});

});

