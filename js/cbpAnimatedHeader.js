/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 300,
		// aboutMe = document.querySelector('.navbar-about-me'),
		collapsedAboutMe = document.querySelector('.navbar-about-me-hidden');

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			// classie.add( aboutMe, 'navbar-about-me-hidden');
			classie.remove(collapsedAboutMe, 'navbar-about-me-hidden');
		}
		else {
			classie.remove( header, 'navbar-shrink' );
			//classie.remove( aboutMe, 'navbar-about-me-hidden');
			classie.add(collapsedAboutMe, 'navbar-about-me-hidden');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();