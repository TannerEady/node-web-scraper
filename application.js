var request = require('request')
var cheerio = require('cheerio')
var http    = require('http')
var fs      = require('fs')

http.get('http://substack.net/images/' function(err, res, content) {

});

function getContent(content) {
  $ = cheerio.load(content)
}
