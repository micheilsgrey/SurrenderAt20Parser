let cheerio = require('cheerio')
var http = require('http');

var options = {
    host: 'www.surrenderat20.net',
    port: 80,
    path: '/index.html'
};

var body = "";

http.get(options, function (resp) {
    resp.on('data', function (chunk) {
        //do something with chunk
        body += chunk;
        parseHttp(body);
    });
}).on("error", function (e) {
    console.log("Got error: " + e.message);
});

function parseHttp(body) {
    let $ = cheerio.load(body)
    //let data = $('#news').find($('.post-outer'))

    //$ =  $('#news').find($('.post-outer'))
    var a = 0;
    $('div.post-outer').each(function (i, elem) {
        //fruits[i] = $(this).text();
        console.log(elem);
         console.log("==========================================");
         a++;
         console.log(a);
         console.log("==========================================");
    });
    //console.log(data.html())
}