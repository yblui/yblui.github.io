function kup(event) {
	switch (event.keyCode) {
		case 27:
			history.go(-1);
			break;
		case 66:
			window.location = "/yblui-b";
			break;
		case 68:
			window.location = "/yblui-d";
			break;
		case 69:
			window.location = "/yblui-e";
			break;
		case 70:
			window.location = "/yblui-f";
			break;
	}
}
