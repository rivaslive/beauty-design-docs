export function capitalize(word: string | string[]) {
	const str = typeof word === 'object' ? word[0] : word;
	return str
	.toLowerCase()
	.replace(/\w/, (firstLetter) => firstLetter.toUpperCase());
}

export const decodeUTF8Text = (text: string) => {
	let newText = text || '';
	newText = newText.replace(/&aacute;/g, 'á');
	newText = newText.replace(/&eacute;/g, 'é');
	newText = newText.replace(/&iacute;/g, 'í');
	newText = newText.replace(/&oacute;/g, 'ó');
	newText = newText.replace(/&uacute;/g, 'ú');
	newText = newText.replace(/&ntilde;/g, 'ñ');
	return newText
}
