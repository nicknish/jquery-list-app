$(document).ready(function(){

$('input').on('keydown', function(e){
	if (e.which == 13) {
		// $('this').val().prependTo('input');
		// $('input').val().prependTo(this);
	};
}),

/* Cross Out Finished Items */
$('.checkMark').on('click', function(e){
	event.preventDefault();
	$(this).closest('.textbox').removeAttr('id').attr('id','finished');
}),

/* Delete Items */
$('.xMark').on('click', function(e){
	event.preventDefault();
	$(this).closest('.row').fadeOut();
});

// function addItem () {

// };

});