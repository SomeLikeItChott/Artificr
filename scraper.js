var request = require('request');
var cheerio = require('cheerio');


var url = 'http://www.cspinet.org/reports/chemcuisine.htm';
request(url, function(err, resp, body) {
	if (err)
		throw err;
	$ = cheerio.load(body);
	
	var obj = {{ing: "Some text"},{des: "A description"}};

	$('.additive').each(function() {
		var ingred;
		var desc;
		$('.additive h5').each(function() {
			ingred = $(this).text();
			
		});
		$('.additive p').each(function() {
			desc = $(this).text();
			
		});
		obj += {ingred:desc};
		
	});
	console.log(obj);
	
});
