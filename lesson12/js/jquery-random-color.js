;(function($) {
	"user strict";

	$.fn.randomColor = function(opacity = 1) {
		if(opacity > 1) opacity = 1;
		else if(opacity < 0) opacity = 0;

		let generateBg = function() {
			$(this)
			.css('background', `rgba(
				${getRC()},
				${getRC()},
				${getRC()},
				${opacity})`);
		}.bind(this);

		function getRC() {
			return Math.round(Math.random() * 255);
		}

		$(this).on('click', () => generateBg());

		generateBg();
	};

})(jQuery);