const PwEL = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const numberEl = document.getElementById("number");
//first change
// const upperLatters = document.getElementById("ABSDEFGHIJKLMNOPQRSTUVWXYZ");
// const lowerLatters = document.getElementById("abcdefghijklmnopqrstuvwxyz");
const upperLatters = "ABSDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLatters = "abcdefghijklmnopqrstuvwxyz";
//
//second change

// const numbers = document.getElementById("0123456789");
// const symbol = document.getElementById("~!@#$%^&*()_+=|");
const numbers = "0123456789";
const symbol = "~!@#$%^&";



function getLowercase() {
	return lowerLatters[Math.floor(Math.random() * lowerLatters.length)];
}

function getUppercase() {
	return upperLatters[Math.floor(Math.random() * upperLatters.length)];
}

function getNumber() {
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
	return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePassword() {
	const len = lenEl.value;
	let password = "";
	for (let i = 0; i < len; i++) {
		const x = generateX();
		password += x;
	}
	PwEL.innerText = password;

}

function generateX() {
	const xs = [];
	if (upperEl.checked) {
		xs.push(getUppercase());
	}

	if (lowerEl.checked) {
		xs.push(getLowercase());
	}

	if (numberEl.checked) {
		xs.push(getNumber());
	}

	if (symbolEl.checked) {
		xs.push(getSymbol());
	}

	if (xs.length === 0) return "";
	return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);
copyEl.addEventListener("click", function () {
	const textarea = document.createElement("textarea");
	const password = PwEL.innerText;
	if (!password) {
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();
	alert('password copied to clipboard');
});