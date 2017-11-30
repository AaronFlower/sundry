let time = Date.now()
let loops = 10000000
console.log('starting...')

for (let i = 1; i < loops; ++i) {
	Math.sqrt(i)
	if (i % 1000 === 0) {
		postMessage({
			type: 'progress',
			progress: '' + (i / loops * 100)
		})
	}
}

postMessage({
	type: 'time',
	time: '' + (Date.now() - time) + 'ms'
})
console.log('ended!')