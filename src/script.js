const ALPHABET = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

const ROTATION = 3;

function cipher(message, dir) {
	let messageEncrypt = "";

	for (letter of message) {
		if (ALPHABET.includes(letter)) {
			let letterIndex = ALPHABET.indexOf(letter);
			messageEncrypt +=
				ALPHABET[(letterIndex + dir * ROTATION) % ALPHABET.length];
		} else {
			messageEncrypt += letter;
		}
	}
	return messageEncrypt;
}

function encrypt(message) {
	return cipher(message.toLowerCase(), 1);
}

function decrypt(message) {
	return cipher(message.toLowerCase(), -1);
}

console.log(decrypt("1d.d"));
