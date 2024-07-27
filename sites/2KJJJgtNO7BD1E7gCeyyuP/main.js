function copyToClipboard() {
	const textToCopy = 'FwKD9VVSjAMxSyLaTK2H92g9vzYVdHrBAi4ZtkgBxNtc'
	navigator.clipboard
		.writeText(textToCopy)
		.then(() => {
			console.log('Text copied to clipboard')
		})
		.catch(err => {
			console.error('Failed to copy text: ', err)
		})
}
