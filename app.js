$(document).ready(function(){

/* Add new items */
$('input').on('keydown', function(e) {
	if (e.which == 13) {
		addItem(); 
		$(this).val('') // Clear entry box
	};
}),

/* Cross Out Finished Items */
$('.checkMark').on('click', function(e){
	event.preventDefault(); // Prevent link
	$(this).closest('.row').find('.textbox').removeAttr('id').attr('id','finished');
	// $(this).closest('.row:first').removeAttr('id').attr('id','finished'); // Didn't work, bad selectors
}),

/* Delete Items */
$('.xMark').on('click', function(e){
	event.preventDefault(); // Prevent link
	$(this).closest('.row').fadeOut();
})

function addItem() {
	var value = $('input:text').val(); // Take input value
	$('.row:first').clone().prependTo('.list'); // Clone row
	$('.textbox:first').text(value).attr('id','active'); // Insert input value
};

});

/* Questions 

1) How do I fadeIn items? When I chained hide().fadeIn()
items became more and more transparent

2) How do I make the check/x buttons work for new items?
   The new row's buttons have href=#, but the click handler
   doesn't work anymore and doesn't preventDefault.

3) What are the differences between these two methods?:
	$(this).closest('.row').find('.textbox').removeAttr('id').attr('id','finished'); // Working
	$(this).closest('.row:first-child').removeAttr('id').attr('id','finished'); // Broken

4) How do I write the if statement to disable entry
   if the input box is empty?

*/