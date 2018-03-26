var operand = 0;
var justPerformed = false;
var operator;

function clearScript(){
	calculator.display.value = '';
	console.log(calculator.display.value);
	return '';
}

function clearButton(){
	calculator.display.value = '';
	operand = 0;
	console.log(calculator.display.value);
	return '';
}

function calculate(argument){
	if (operator=='sum') {
		return sumScript(argument);
	}
	if (operator=='sub') {
		return subScript(argument);
	}
	if (operator=='mul') {
		return mulScript(argument);
	}
	if (operator=='div') {
		return divScript(argument);
	}
}

function sumScript(argument) {
	operator = 'sum';
	if (operand == 0) {
		operand = parseInt(argument);
		console.log("Storing in operand: ", operand);
		return '';
	}

	if (operand != 0) {
		operand += parseInt(argument);
		justPerformed = true;
		console.log("justPerformed = ", justPerformed);
		return operand;
	}
}

function subScript(argument) {
	operator = 'sub';
	if (operand == 0) {
		operand = parseInt(argument);
		console.log("Storing in operand: ", operand);
		return '';
	}

	if (operand != 0) {
		operand -= parseInt(argument);
		justPerformed = true;
		console.log("justPerformed = ", justPerformed);
		return operand;
	}
}

function mulScript(argument) {
	operator = 'mul';
	if (operand == 0) {
		operand = parseInt(argument);
		console.log("Storing in operand: ", operand);
		return '';
	}

	if (operand != 0) {
		operand *= parseInt(argument);
		justPerformed = true;
		console.log("justPerformed = ", justPerformed);
		return operand;
	}
}

function divScript(argument) {
	operator = 'div';
	if (operand == 0) {
		operand = parseInt(argument);
		console.log("Storing in operand: ", operand);
		return '';
	}

	if (operand != 0) {
		operand /= parseInt(argument);
		justPerformed = true;
		console.log("justPerformed = ", justPerformed);
		return operand;
	}
}

function writeScript(argument){
	if (justPerformed) {
		clearScript();
		justPerformed = false;
		return argument;
	}
	calculator.display.value += argument;
	console.log(calculator.display.value);
	return calculator.display.value;
}