'use strict';
var through = require('through2');
var extMap = {
	'.png': 'image/png',
	'.gif': 'image/gif',
	'.jpeg': 'image/jpeg',
	'.bmp': 'image/bmp',
	'.jpg': 'image/jpeg'
};
module.exports = function(option, info) {
	return through(function(buffer, encoding, callback) {
		var str = buffer;
		if(info.type == 'file') {
			if(info.ext.match(/png|jpg|gif|jpeg|bmp/)) {
				str = str.toString('base64');
				str = 'data:'+extMap[info.ext]+';base64,'+str;
			} else {
				console.log('    jt-img2base64: only support image file type!');
			}
		} else {
			console.log('    jt-img2base64: not support value type!');
		}
		callback(null, str);
	});
};