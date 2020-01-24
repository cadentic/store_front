var favicon;

var phone, touch, ltie9, dh, ar, fonts, ieMobile;

var ua = navigator.userAgent;

var isChrome = !!window.chrome;
var is_newer_ie = ua.match(/msie (9|([1-9][0-9]))/i);
var is_older_ie = ua.match(/msie/i) && !is_newer_ie;
var is_ancient_ie = ua.match(/msie 6/i);
var is_ie = is_ancient_ie || is_older_ie || is_newer_ie;
var is_mobile_ie = navigator.userAgent.indexOf('IEMobile') !== -1;
var is_mobile = ua.match(/mobile/i);
var is_OSX = ua.match(/(iPad|iPhone|iPod|Macintosh)/g) ? true : false;
var iOS = getIOSVersion(ua);

var windowWidth = window.innerWidth,
	windowHeight = window.innerHeight;

(function () {
	'use strict';

	var vendors = ['webkit', 'moz'];
	for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
		var vp = vendors[i];
		window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame']
		|| window[vp + 'CancelRequestAnimationFrame']);
	}
	if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
		|| !window.requestAnimationFrame || !window.cancelAnimationFrame) {
		var lastTime = 0;
		window.requestAnimationFrame = function (callback) {
			var now = Date.now();
			var nextTime = Math.max(lastTime + 16, now);
			return setTimeout(function () {
					callback(lastTime = nextTime);
				},
				nextTime - now);
		};
		window.cancelAnimationFrame = clearTimeout;
	}
}());


!function ($, window, _) {
	'use strict';

	var $doc = $(document),
		win = $(window),
		$body = $('body'),
		$html = $('html'),
		documentHeight = $doc.height(),
		windowHeight = win.height(),
		AnimationsArray = [];


	var latestKnownScrollY = $('html').scrollTop() || $('body').scrollTop(),
		ticking = false;

	function updateStuff() {
		ticking = false;

		CSMX.parallax.update();
		CSMX.parallax_slider.update();
		//CSMX.pagetitle.update();
	}

	function requestTick() {
		if (!ticking) {
			requestAnimationFrame(updateStuff);
		}
		ticking = true;
	}

	window.CSMX = {
		init              : function () {
			var self = this,
				obj;

			for (obj in self) {
				if (self.hasOwnProperty(obj)) {
					var _method = self[obj];
					if (_method.selector !== undefined && _method.init !== undefined) {
						if ($(_method.selector).length > 0) {
							_method.init();
						}
					}
				}
			}
		},
		load              : function () {
			var self = this,
				obj;

			for (obj in self) {
				if (self.hasOwnProperty(obj)) {
					var _method = self[obj];
					if (_method.selector !== undefined && _method.load !== undefined) {
						if ($(_method.selector).length > 0) {
							_method.load();
						}
					}
				}
			}
		},
		reverseAnimations : {
			start: function (container) {
				for (var out = _.difference(AnimationsArray, container), i = 0; i < out.length; ++i) out[i].progress() > 0 && (out[i].timeScale(1.6).reverse(),
					$(".mobile-menu-toggle").data("toggled", !1));
			}
		},
		loadRetinaLogo    : {
			selector: '.csmx-logo',
			init    : function () {
				"devicePixelRatio"in window && window.devicePixelRatio > 1 && $(".csmx-logo img, .csmx-logo-badge img").each(function () {
					var t = $(this), i = t.attr("data-retina");
					if (i && 0 !== i.legth) {
						t.attr("src", i);
					}
				})
			}
		},
		fixedHeader       : {
			selector: ".to-fixed",
			init    : function () {
				var base = this, container = $(base.selector),
					headerSlideClass = container.data('header-slide-class');
				container.clone().addClass("header-fixed").addClass(headerSlideClass).removeClass("header--light").prependTo("#csmx-page");
				var fixedmenu = $(".csmx-header.header-fixed");
				win.scroll(function () {
					base.scroll(fixedmenu);
				});
			},
			scroll  : function (container) {
				var animationOffset = container.data("offset"),
					wOffset = win.scrollTop(),
					headerSlideClass = container.data('header-slide-class'),
					stick = container.data('stick-class') + ' ' + headerSlideClass,
					unstick = container.data('unstick-class') + ' ' + headerSlideClass;
				wOffset > animationOffset ? (container.hasClass(unstick) && container.removeClass(unstick),
				container.hasClass(stick) || setTimeout(function () {
					container.addClass(stick);
				}, 10)) : animationOffset > wOffset && wOffset > 0 ? container.hasClass(stick) && (container.removeClass(stick),
					container.addClass(unstick)) : (container.removeClass(stick), container.removeClass(unstick));
			}
		}
	}

	// on Resize & Scroll
	win.resize(function () {
	});
	win.scroll(function (e) {
		latestKnownScrollY = $('html').scrollTop() || $('body').scrollTop();
		requestTick();
	});
	win.load(function () {
		//niceScrollInit();
		CSMX.load();
	});
	$doc.ready(function () {

		CSMX.init();

	});



}(jQuery, this, _);

