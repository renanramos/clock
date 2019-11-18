$(document).ready(() => {

	setInterval(() => {		
		$('.clock').text(this.time());
	}, 1000);

	$('#toggle').click(() => this.changeModeView());

});

/**
 * @description Returns a string time formatted 
 */
time = () => {
	
	let date = new Date();

	return date.toLocaleTimeString(undefined, {
		hour12: false,
		timeZone: 'America/Sao_Paulo',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	});
}

/**
 * @description Changes the css when the toggle button it's clicked
 */
changeModeView = () => {

	if(!this.toggleState) {
		$('body').css('background-color', '#353535');
		$('body').css('color', '#faf9f9');
		this.toggleState = true;
	} else {
		$('body').css('background-color', '#faf9f9');
		$('body').css('color', 'black');
		this.toggleState = false;			
	}

}
