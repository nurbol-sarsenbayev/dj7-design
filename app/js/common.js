$(function() {	

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

});
