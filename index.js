var express = require('express');
var app = express();
app.use(express.static(__dirname ));
var bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var books = require('google-books-search');
app.post('/findBooks',function(req,res){

	var key = req.body.key; 
	books.search(key, function(error, results) {
	if ( ! error ) {
		console.log("sending")
	    res.send({results});
	} else {
	    res.send({val : "error"});
	}
	});

});


app.get('/',function(req,res){
	res.sendfile('index.html');
});

app.listen(process.env.PORT || 3000,function()
{
	console.log('server is up and running on port 3000');
});