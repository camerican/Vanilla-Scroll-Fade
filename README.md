# Vanilla JS Scroll Fade

This snippet shows content as you scroll down and hides it as you scroll up, as requested by a [StackOverflow Question](http://stackoverflow.com/questions/26694385) posed in November of 2014.  


User [MyFunkySide](http://stackoverflow.com/users/3407923/myfunkyside) crafted a jQuery version available for viewing that does the following:

1. Listen for window scroll
1. calculate's the distance to the bottom of the Window (windowBottom)
1. for each target element (.fade):
	1. calculate how far the element is from the bottom of the page (objectBottom)
	1. if the object's bottom y-coordinate is less than (aka physically higher up on the page than) the bottom of the page and it's hidden, we want to show it
	1. if the object's bottom y-coordiante is greater than (aka physically lower down on the page than) the bottom of the page and it's visible, we want to hide it

This code has been ported into Vanilla JavaScript by replacing jQuery functions with ES5 function calls and swapping out the fadeTo functions with CSS3 transitions on opacity.

## Tips

**offsetTop** is how far the element is from the top of the page
**offsetHeight** is how tall the object is inclusive of margin, border, and padding
