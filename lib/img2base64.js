'use strict';
var through = require('through2');

module.exports = function(option, info) {
	return through(function(buffer, encoding, callback) {
		var str = buffer;
		if(info.type == 'file') {
			if(info.ext.match(/png|jpg|gif|jpeg|bmp/)) {
				str = str.toString('base64');
			} else {
				console.log('    jt-img2base64: only support image file type!');
			}
		} else {
			console.log('    jt-img2base64: not support value type!');
		}
		callback(null, str);
	});
};