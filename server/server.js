const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Must serve up bundled file, use dist folder.
// app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../dist'));


app.set('port', process.env.PORT || 7070);

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}...`);
});
