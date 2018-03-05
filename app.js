const express = require( 'express' );
const app = express();
const morgan = require('morgan')


app.use(function(req, res, next) {
    if (req.method === 'GET') {
        console.log('verbs: ', req.method, ' / 200');
    }
    next()
} )

app.use(morgan('combined'));

app.use('/', function(req, res, next) {
    console.log('route: ', req.route);
    next();
} )

app.use('/special',(req, res, next) => {
    console.log('this is very special');
    next();
} )

app.get('/', (req, res, next) => res.send('Good bye cruel world!'))

app.listen(3000, () => console.log('server listening'));

