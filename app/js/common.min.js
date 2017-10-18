$(function() {	

	/* Mmenu */
	$("#my-menu").mmenu({
		extensions: ['theme-black', 'pagedim-black'],
		offCanvas: {
			position: "right"
		},
		navbar: {
			title: '<img src="img/logo-1.svg" />'
		}
	 }, {
		offCanvas: {
			pageSelector: "#page-wrapper",
		}
	 });

	var API = $("#my-menu").data("mmenu");
	var $menuBtn = $("header .hamburger");
	 
	API.bind( "open:finish", function() {
		$menuBtn.addClass('is-active');		
	});

	API.bind( "close:finish", function() {
		$menuBtn.removeClass('is-active');		
	});

	/* Regexp */
	$('.carousel-services-content .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	var king_h2 = $('.s-king .h2');
	king_h2.html(king_h2.html().replace(/(\S+)\s*$/, '<span>$1</span>'));

	/* OwlCarousel */
	$(".carousel-services").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 700,
		responsive: {
			0: { items: 1 },
			769: { items: 2 },
			993: { items: 3 }
		},
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		onInitialized: function() {
			setTimeout(function() { carouselService() }, 100);		
		}
	});


	function carouselService() {
		$('.carousel-services-content').equalHeights();
		$('.carousel-services-item').each(function() {
			var item   = $(this);
			var height = item.find('.carousel-services-content').outerHeight();
			item.find('.carousel-services-image').css('min-height', height);
		});
		
	}carouselService();

	window.onresize = carouselService;

	/* Callback */
	var success = $(".callback .success");

	$("form.callback").submit(function() {
		var th = $(this);

		success.addClass('active');
		setTimeout(function() {
			success.removeClass('active');
			th.trigger("reset");
		}, 3000);

		return false;
	});


});
