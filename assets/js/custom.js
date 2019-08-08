jQuery(document).ready(function(){
	var t, e, n;
	t = $(".custum-range-slider"), e = $(".custum-range-slider__range"), n = $(".custum-range-slider__value"), t.each(function() {
		n.each(function() {
			var t = $(this).prev().attr("value");
			$(this).html(t)
		}), e.on("input", function() {
			$(this).next(n).html(this.value)
		})
	})
	jQuery('.form-wizard-wrapper').find('.form-wizard-link').click(function() {
		jQuery('.form-wizard-link').removeClass('active');
		var innerWidth = jQuery(this).innerWidth();
		jQuery(this).addClass('active');
		var position = jQuery(this).position();
		jQuery('.form-wizardmove-button').css({
			"left": position.left,
			"width": innerWidth
		});
		var attr = jQuery(this).attr('data-attr');
		jQuery('.form-wizard-content').each(function() {
			if (jQuery(this).attr('data-tab-content') == attr) {
				jQuery(this).addClass('show');
			} else {
				jQuery(this).removeClass('show');
			}
		});
	});
	jQuery('.form-wizard-next-btn').click(function() {
		var next = jQuery(this);
		next.parents('.form-wizard-content').removeClass('show');
		next.parents('.form-wizard-content').next('.form-wizard-content').addClass('show');
		jQuery(document).find('.form-wizard-content').each(function() {
			if (jQuery(this).hasClass('show')) {
				var formAtrr = jQuery(this).attr('data-tab-content');
				jQuery(document).find('.form-wizard-wrapper li a').each(function() {
					if (jQuery(this).attr('data-attr') == formAtrr) {
						jQuery(this).addClass('active');
						var innerWidth = jQuery(this).innerWidth();
						var position = jQuery(this).position();
						jQuery(document).find('.form-wizardmove-button').css({
							"left": position.left,
							"width": innerWidth
						});
					} else {
						jQuery(this).removeClass('active');
					}
				});
			}
		});
	});
	jQuery('.form-wizard-previous-btn').click(function() {
		var prev = jQuery(this);
		prev.parents('.form-wizard-content').removeClass('show');
		prev.parents('.form-wizard-content').prev('.form-wizard-content').addClass('show');
		jQuery(document).find('.form-wizard-content').each(function() {
			if (jQuery(this).hasClass('show')) {
				var formAtrr = jQuery(this).attr('data-tab-content');
				jQuery(document).find('.form-wizard-wrapper li a').each(function() {
					if (jQuery(this).attr('data-attr') == formAtrr) {
						jQuery(this).addClass('active');
						var innerWidth = jQuery(this).innerWidth();
						var position = jQuery(this).position();
						jQuery(document).find('.form-wizardmove-button').css({
							"left": position.left,
							"width": innerWidth
						});
					} else {
						jQuery(this).removeClass('active');
					}
				});
			}
		});
	});
});