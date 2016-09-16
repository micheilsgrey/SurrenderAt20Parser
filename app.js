let cheerio = require('cheerio')
var http = require('http');

var options = {
    host: 'www.surrenderat20.net',
    port: 80,
    path: '/index.html'
};

var body = "";
let newsUrlArray = [];
let newsTitleArray = [];

http.get(options, function (res) {
    var body = '';
    res.on('data', function (chunk) {
        body += chunk;
    });
    res.on('end', function () {
        console.log("done");
        parseHttp(body);
    });
}).on('error', function (e) {
    console.log("Got error: " + e.message);
})

function parseHttp(body) {
    let $ = cheerio.load(body)
    let $nodes = $('#news').find($('.post-outer'));
    $nodes.each(function (index, node) {
        $node = $(node);

        let $newsNode = ($node).find($('.news-title'));
        let $newsUrl = ($newsNode).children().attr('href')
        let $newsTitle = ($newsNode).children().text()
        //console.log($newsUrl.text())
        newsUrlArray.push($newsUrl)
        newsTitleArray.push($newsTitle)
    })
    console.log(newsTitleArray[0])
    console.log(newsUrlArray[0])
}

