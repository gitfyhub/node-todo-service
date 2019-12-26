var express = require('express');
var cors = require('cors');
var app = express();

// Single Origin
// app.use(cors({
//     origin: 'http://localhost:8080'
//   }));

// Multiple Origin
var allowedOrigins = 
    ['http://localhost:8080',
    'http://localhost:8080/',
    'http://192.168.1.12:8080'
    ];
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

// Routes

// app.get('/', function (req, res) {
//     res.send('<html><body><h1>Hello World</h1></body></html>');
// });

app.get('/', function (req, res) {
    res.json([{ "userId": 1, "id": 1, "title": "Step 1", "completed": false }, { "userId": 1, "id": 2, "title": "Step 2", "completed": false }, { "userId": 1, "id": 3, "title": "Step 3", "completed": false }, { "userId": 1, "id": 4, "title": "Step 4", "completed": true }, { "userId": 1, "id": 5, "title": "Step 5", "completed": false }])
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(7070, function () {
    console.log('Node server is running..');
});


