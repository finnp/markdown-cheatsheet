var fs = require('fs')
var path = require('path')

module.exports = function () {
  return fs.readFileSync(path.join(__dirname, 'cheatsheet.md'), 'utf-8')
}