export function capitalize(word: string | string[]) {
	const str = typeof word === 'object' ? word[0] : word;
	return str
	.toLowerCase()
	.replace(/\w/, (firstLetter) => firstLetter.toUpperCase());
}
