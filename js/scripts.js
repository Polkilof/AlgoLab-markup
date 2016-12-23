$(document).ready(function() {

	$('.visual').each(function() {
		if ($(this).find('> img').length) {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
		}
	});

	var $menu = $('#mobile-menu');
	$menu.mmenu({
		navbar: {
			titleLink: "anchor"
		},
		offCanvas: {
			position: "right",
			zposition: "front",
			menuInjectMethod:'append',
			menuWrapperSelector:'#wrapper'
		}
	});
	var mmenuAPI = $menu.data('mmenu'),
		mobileNav = $('#mobile-menu');
	$('<span class="btn-menu-close"></span>').appendTo('.mm-menu .mm-panel');
	$('.btn-menu, .btn-menu-close').click(function(){
		if ($('html').hasClass('mm-opened')) {
			mmenuAPI.close();
		} else{
			mmenuAPI.open();
		}
		return false;
	});

	if ($(window).width() > 991) {
		$('.navbar-sticky').Stickyfill();
	}

	$(window).on('resize', function() {
		if ($('.navbar-sticky').length) {
			if ($(window).width() < 992) {
				Stickyfill.stop();
			} else{
				Stickyfill.init();
			}
		}
	});

	$(document).on('change', ':file', function() {
		var input = $(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	});

	$(':file').on('fileselect', function(event, numFiles, label) {
		var input = $(this).parents('.form-file').find(':text'),
		log = numFiles > 1 ? numFiles + ' files selected' : label;
		if( input.length ) {
			input.val(log);
		} else {
			if( log ) alert(log);
		}
	});
});