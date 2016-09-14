let cheerio = require('cheerio')
var http = require('http');

var options = {
    host: 'www.surrenderat20.net',
    port: 80,
    path: '/index.html'
};

var body = "";

http.get(options, function (res) {
    var body = '';
    res.on('data', function (chunk) {
        body += chunk;
    });
    res.on('end', function () {
        //console.log(body);
        console.log("done");
        parseHttp(body);
    });
}).on('error', function (e) {
    console.log("Got error: " + e.message);
})

function parseHttp(body) {
    let $ = cheerio.load(body)
    let $node = $('#news').find($('.post-outer'));
    //console.log($node.length);
    var a = 0;
    $node.each(function (index, node) {
        $node = $(node);
        console.log(($node).find($('a')).text());
        a++;
        //console.log(a);
    })
    //$ =  $('#news').find($('.post-outer'))
    var a = 0;
    $('div.post-outer').each(function (i, elem) {
        //fruits[i] = $(this).text();

        // console.log($(this).find($('a')).text())
        // console.log(elem)
    });


    //console.log(data.html())
}