var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');


var url = 'http://www.cspinet.org/reports/chemcuisine.htm';
request(url, function(err, resp, body) {
	if (err)
		throw err;
	$ = cheerio.load(body);

	var list = [];
	
	$('.additive').each(function() {
		ingred = $(this).text();
		//console.log(ingred);
		list.push(ingred);
	});
	var jason = JSON.stringify(list);
	fs.writeFileSync("data.json", jason);
});
