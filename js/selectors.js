// ----- toggle sections
$(function() {
    $('.body').hide();
    $('.header').click(function() {
        var currentHeader = $(this);
        // hide all the body divs
        $('.body').hide();
        // show the next body div
        currentHeader.next('.body').show();
    });
});

// ----- load() function

// only alerts on first load (e.g. in new tab)
$('#img_d3').load(function(){
	$('#p_img').text("image loaded");
});

// alert when the iframe has finished loading
$('iframe').load(function(){
	$('#p_iframe').text("iframe loaded");
});


// ----- Simple Selectors

// replace text of every paragraph (within div)
$('#div_simple_selectors').find('p').text('text inserted by jQuery');

// replace all paragraphs with text
// $('p').text('text inserted by jQuery');

// replace text of element with id 'para'
$('#para').text('id selected');



// ----- My first event handled buttons

// change text on (any) button upon click (within div)
$('#div_buttons').find(':button').click(function(){
	// change all button texts if clicked on button
	// $(':button').attr('value', 'clicked on button');

	// change only button texts of currently clicked button
	$(this).attr('value', 'clicked on button');
});

//to reference input type use ':'
$(':submit').click(function(){
	alert('Successfully submitted');
});


// ----- Style changes

// change bg color of text field when clicking into it
$('#div_style_changes').find(':text').focusin(function() {
	$(this).css('background-color', 'lightyellow');
});

// change bg color of text field when clicking out of
$('#div_style_changes').find(':text').focusout(function() {
	$(this).css('background-color', 'white');
});

// -> does not apply to text fields outside div_style_changes

// change bg color of text area when clicking into it
$('#div_style_changes').find('textarea').focusin(function() {
	$(this).css('background-color', 'lightblue');
});

// change bg color of text area when clicking out of
$('#div_style_changes').find('textarea').focusout(function() {
	$(this).css('background-color', 'white');
});

/*
// change bg color of all input fields (also incl. buttons!) when clicking into it
// ! overwrites previous style changes definition
$('#div_style_changes').find(':input').focusin(function() {
	$(this).css('background-color', 'lightgreen');
});

// change bg color of all input fields (also incl. buttons!) when clicking out of
$('#div_style_changes').find(':input').focusout(function() {
	$(this).css('background-color', 'white');
});
*/


// upon click on button change style of paragraph
$('#css_button1').click(function() {
	$('#css_para').css('background-color', 'black').css('color', 'white');
});

$('#css_button2').click(function() {
	$('#css_para').css('background-color', 'white').css('color', 'black');
});



// ----- Multiple selector

// reference by id
$('#mult_sel_button, #mult_sel_para').click(function() {
	alert('Button or paragraph was clicked upon');
});

// reference by type
$('#div_multiple_selector').find('input:button, p').click(function() {
	alert('Something within this was pressed/clicked');
});



// ----- Even/odd selector

$(document).ready(function() {
	// color rows
	$('#table1 tr:even').addClass('highlight_green');
	
	// try to color columns
	$('#table2 td:even').addClass('highlight_pink');

	// actually color columns
	$('#table3 td:nth-child(even)').addClass('highlight_pink');

	$('#div_to_color p:even').addClass('highlight_blue');
});



// ----- Attribute selector

$(document).ready(function() {
	var email_default = 'Enter your email address';
	var password_default = 'Enter your password';

	// create default behavior for all email fields
	$('input[type="email"]')
		// enter default value into field
		.attr('value', email_default)
		// remove default value from email field when focussing into it
		.focus(function() {
			if ($(this).val() == email_default) {
				$(this).attr('value', '');
			};
		})
		// re-enter default value into field if left empty
		.blur(function() {
			if ($(this).val() == '') {
				$(this).attr('value', email_default);
			};
		});

	// create default behavior for all email fields
	$('input[type="password"]')
		// enter default value into field
		.attr('value', password_default)
		// clear field when focussing into it (regardless which content it has)
		.focus(function() {
			$(this).attr('value', '');
		})
		// re-enter default value into field if left empty
		.blur(function() {
			if ($(this).val() == '') {
				$(this).attr('value', password_default);
			};
		});

	// make all external links open in a new window
	$('a').attr('target', '_blank');
});



// ----- Contains selector








