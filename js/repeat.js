(function () {
	// if elements exists, bind event
	if( ( $( '[data-limesharp-test-repeat-input]' ).get( 0 ) !== undefined ) && ( $( '[data-limesharp-test-repeat-button]' ).get( 0 ) !== undefined ) ) {
		bindRepeatEvent();
	} else {
		return;
	}

})();

function bindRepeatEvent () {
	// bind click event on button
	$( '[data-limesharp-test-repeat-button]' ).on( 'click', onClickRepeat );
}

function onClickRepeat () {
	var _input;

	// get the value of the input field
	_input = $( '[data-limesharp-test-repeat-input]' ).val();
	repeat( _input );
}

function repeat ( input ) {
	var _input = input,
		_repeatedInput = '',
		_result = '';

	if ( _input !== '' ) {
		// remove the squre brakets from the input
		_input = _input.replace(/[\[\]]/g,'');

		// repeat value 3 times
		for ( i = 0; i <= 2; i++ ) {

			_repeatedInput += _input;

			if ( i !== 2 ){
				// this is the end of the input value, before repeating next and if not the 3rd repetition add a comma
				_repeatedInput += ',';
			}
		}
	}
	// add brakets around repeated value
	_result = '[' + _repeatedInput + ']';
	printResultRepeat( _result );
}

function printResultRepeat ( result ) {
	// print out repeated value
	$( '[data-limesharp-test-repeat-result]' ).html( result );
}