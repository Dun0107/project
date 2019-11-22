var forge = require('node-forge');
var inputText = 'The quick brown fox jumps over the lazy dog';
console.log('Input Text: '+inputText);
  
var md = forge.md.md5.create();
md.update(inputText);
console.log('MD5: '+md.digest().toHex());

var md = forge.md.sha1.create();
md.update(inputText);
console.log('SHA1: '+md.digest().toHex());

var md = forge.md.sha256.create();
md.update(inputText);
console.log('SHA256: '+md.digest().toHex());

var md = forge.md.sha384.create();
md.update(inputText);
console.log('SHA384: '+md.digest().toHex());

var md = forge.md.sha512.create();
md.update(inputText);
console.log('SHA512: '+md.digest().toHex());

var md = forge.md.sha512.sha256.create();
md.update(inputText);
console.log('SHA512.SHA256: '+md.digest().toHex());
