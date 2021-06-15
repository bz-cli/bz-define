export const toBase64 = (source) => new Buffer.from(source).toString('base64');

/**
 * Generates a UUID.
 * Native implementation taken from Bizagi's connector editor.
 */
export const uuid = () => {
	const uuid = [];
	const rand = '0123456789abcdef';

	for (let n = 0; n < 36; n++) {
		let digit = rand.substr(Math.floor(16 * Math.random()), 1);
		uuid[n] = digit;
	}

	uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
	uuid[14] = '4';
	uuid[19] = rand.substr((3 & uuid[19]) | 8, 1);

	return uuid.join('');
}

export const toCamelCase = (source) => {
	const indexes = [];
	for (let i = 0; i < source.length; i++) {
		if (source[i] === '-') {
			indexes.push(i);
		}
	}

	for (let i = 0; i < indexes.length; i++) {
		source = source.replace('-', ' ');
	}

	const camelCased = source
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
			return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
		})
		.replace(/\s+/g, '');

	return camelCased;
}
