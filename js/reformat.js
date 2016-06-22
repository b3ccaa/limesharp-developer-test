(function () {
	// if elements exists, bind event
	if( ( $( '[data-limesharp-test-reformat-input]' ).get( 0 ) !== undefined ) && ( $( '[data-limesharp-test-reformat-button]' ).get( 0 ) !== undefined ) ) {
		bindReformatEvent();
	} else {
		return;
	}

})();

function bindReformatEvent () {
	// bind click event on button
	$( '[data-limesharp-test-reformat-button]' ).on( 'click', onClickReformat );
}

function onClickReformat () {
	var _input;

	// get the value of the input field
	_input = $( '[data-limesharp-test-reformat-input]' ).val();
	reformat( _input );
}

function reformat ( input ) {
	var _input = input,
		_reformatedInput = '',
		_result = '',
		regex = /[^aeiou]/g;

	if ( _input !== '' ) {
		// replace vowels with 'nothing'
		_reformatedInput = _input.replace(/[aeiou]/gi, '');
		// make string lower case
		_reformatedInput = _reformatedInput.toLowerCase();
		// make only first character capital
		_reformatedInput = _reformatedInput[0].toUpperCase() + _reformatedInput.slice(1);

	}
	_result =  _reformatedInput;
	printResultReformat( _result );
}

function printResultReformat ( result ) {
	// print reformated string
	$( '[data-limesharp-test-reformat-result]' ).html( result );
}