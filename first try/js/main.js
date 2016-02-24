$(document).ready(function(){
	var $window = $(window);
	var windowHeight = $window.height();
	var $homeInfo = $('#home .info');
	var $aboutInfo = $('#about .info');
	var $contactInfo = $('#contact .info');

	var bounds = {};
	bounds['home'] = {'upper': 0, 'lower': windowHeight};
	bounds['about'] = {'upper': windowHeight, 'lower': 3 * windowHeight};
	bounds['contact'] = {'upper': windowHeight * 3, 'lower': 5 * windowHeight};

	console.log(bounds['home']['lower']);
	$window.on('scroll', function(){
		var offset = $(document).scrollTop();
		var view = checkView(offset, bounds);
		console.log(view);

	    if(view == 'home') {
	    	var animationDuration = offset/windowHeight;
	    	var translateY = animationDuration * (-windowHeight/6);
	        var opacity = 1 - animationDuration;
	        $aboutInfo.css('display', 'none');
	        $homeInfo.css('display', 'block');
	        $homeInfo.css('opacity', opacity);
	    	$homeInfo.find('h1').css('transform', 'translateY(' + translateY + 'px)');
	    	$homeInfo.find('p').css('transform', 'translateY(' + (translateY/1.2) + 'px)');
	    } else if(view == 'about') {
	    	var offsetPos = offset - bounds['about']['upper'];
	    	var fadeOutPos = 1.3 * windowHeight;
	    	var fadeOutDuration = 0.7 * windowHeight;

	    	$homeInfo.css('display', 'none');
	    	$contactInfo.css('display', 'none');
	    	$aboutInfo.css('display', 'block');

	    	if(offsetPos <= windowHeight){
	    		var animationDuration = offsetPos/windowHeight;
	    		var opacity = animationDuration;
		    	$aboutInfo.css('opacity', opacity);
		    	var translateY = animationDuration * (-windowHeight * 0.8);
		    	$aboutInfo.css('transform', 'translateY(' + (translateY) + 'px)');
	    	} else if (offsetPos > fadeOutPos) {
	    		var animationDuration = (offsetPos - fadeOutPos)/fadeOutDuration;
	    		var scale = animationDuration * 0.05;
	    		opacity = 1 - animationDuration;
	    		$aboutInfo.css('opacity', opacity);
	    		$aboutInfo.find('.title').css('transform', 'scale(' + (1 - scale) + ', ' + (1 - scale) +')');
	    		$aboutInfo.find('.description').css('transform', 'scale(' + (1 - scale) + ', ' + (1 - scale) +')');
	    	}
	    } else if (view == 'contact'){
	    	var offsetPos = offset - bounds['contact']['upper'];
	    	var fadeOutPos = 1.3 * windowHeight;
	    	var fadeOutDuration = 0.7 * windowHeight;

	    	$aboutInfo.css('display', 'none');
	    	$contactInfo.css('display', 'block');

	    	if(offsetPos <= windowHeight){
	    		var animationDuration = offsetPos/windowHeight;
	    		opacity = animationDuration;
		    	$contactInfo.css('opacity', opacity);
	    	} else if (offsetPos > fadeOutPos) {
	    		var animationDuration = (offsetPos - fadeOutPos)/fadeOutDuration;
	    		opacity = 1 - animationDuration;
	    		$contactInfo.css('opacity', opacity);
	    	}
	    }
	});
});

function checkView(offset, bounds){
	if (offset < bounds['home']['lower'] && offset >= bounds['home']['upper']) {
		return 'home';
	}

	if (offset < bounds['about']['lower'] && offset >= bounds['about']['upper']) {
		return 'about';
	}

	if (offset < bounds['contact']['lower'] && offset >= bounds['contact']['upper']) {
		return 'contact';
	}
}

function createAnimation(selector, translateX, translateY, scale){
	selector.css('transform', 'translateX(' + translateX + 'px) translateY(' + translateY + 'px) scale(' + scale + ')');
}