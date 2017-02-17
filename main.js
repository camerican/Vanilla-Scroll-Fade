document.addEventListener("DOMContentLoaded",function(){
	window.addEventListener("scroll",function(){
		var windowBottom = this.pageYOffset + this.innerHeight;
		var elements = document.querySelectorAll(".fade");
		for( var i=0; i<elements.length; i++) {
			let elCurrent = elements[i];
			let objectBottom = elCurrent.offsetTop + elCurrent.offsetHeight;
			if( objectBottom < windowBottom ) {
				if( elCurrent.style.opacity == 0 ) {
					elCurrent.style.opacity = 1;
				}
			} else {
				if( elCurrent.style.opacity == 1 ) {
        	elCurrent.style.opacity = 0;
				}
			}
		}
	});
	// trigger scroll to top of the page on load
	document.body.scrollTop = 0;
});