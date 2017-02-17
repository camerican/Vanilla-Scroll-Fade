document.addEventListener("DOMContentLoaded",function(){
	handleScroll();	// trigger handling for first time
	window.addEventListener("scroll",handleScroll);
	// and everytime we scroll thereafter
});

function handleScroll(){
	var windowBottom = window.pageYOffset + window.innerHeight;
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
}