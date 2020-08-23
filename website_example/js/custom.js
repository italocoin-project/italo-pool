/* Insert your pool's unique Javascript here */

$(function(){
    $("head").append('<link id="themeCss" type="text/css" rel="stylesheet" href="' + themeCssDark + '">');

	if (Cookies.get('light_mode') === '1')
	{
		changeCSS(themeCss, 5);
		$('.switch-checkbox').prop('checked', false);
	}
	else
	{
		changeCSS(themeCssDark, 5);
		$('.switch-checkbox').prop('checked', true);
	}
	$('.switch-checkbox').on('change', function() {
		setNightMode();
	});
});

function setNightMode(isSet){
	if ($('.switch-checkbox:checked').val()) {
		Cookies.set('light_mode', 0, {expires: 365});
		changeCSS(themeCssDark, 5);
	}
	else {
		Cookies.set('light_mode', 1, {expires: 365});
		changeCSS(themeCss, 5);
	}
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
