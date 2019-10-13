// reads the CSRF token cookie value and adds a hidden field to the form
function addToken() {
	var cookiesArray = document.cookie.split(";");

	for (var i = 0; i < cookiesArray.length; i++) {
		var c = cookiesArray[i];

		while (" " === c.charAt(0)) {
			c = c.substring(1);
		} // end while

		if (0 === c.indexOf("token")) {
			var token = document.createElement("INPUT");
			token.setAttribute("type", "hidden");
			token.setAttribute("name", "token");
			token.setAttribute("value", c.substring(6, c.length));
			document.welcome.appendChild(token);
			
			break;
		} // end if
	} // end for
} // end function addToken