
export const dateFormatterLocalTime = timestamp => {
	let date = timestamp.toDate()
	let mm = date.getMonth()
	let dd = date.getDate()
	let yyyy = date.getFullYear()
    let time = date.toLocaleTimeString('en-US')

	date = yyyy + '-' + mm + '-' + dd + ' ' + time
	return date
}