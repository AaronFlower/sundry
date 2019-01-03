/**
 * 构建一下 css 目录服务
 */
var path = require('path')
var express = require('express')
var app = new express()
var serveIndex = require('serve-index')


app.set('port', (process.env.PORT || 8089))
app.use('/', express.static(path.join(__dirname)))
app.use('/', serveIndex(path.join(__dirname)))
var port = app.get('port')
app.listen(port, function () {
	console.log('Server started, http://localhost:' + port + '/')
})

app.get('/user', function() {
	
})