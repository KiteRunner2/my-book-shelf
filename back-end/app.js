const express = require('express');
const fs = require('fs');
let db = require('./models');
const app = express();

PORT = process.env.PORT || 8080;

app.get('/api/getbooks', async (req, res) => {
    console.log('api/getbooks called...');
    const result = await db.Bookshelf.find({});
    console.log('response from database', result);
    res.json(result);
});

app.use(express.static('../front-end/build'));
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.get('*', (req, res) => {
    res.redirect('/');
});

app.post('/api/storebook', async (req, res) => {
    console.log('/api/storebook called');
    console.log(req.body);

    // let data = {
    //     day:new Date().setDate(new Date().getDate()),
    //     exercises:[{
    //         type:req.body.type,
    //         name:req.body.name,
    //         duration:req.body.duration,
    //         weight:req.body.weight,
    //         reps:req.body.reps,
    //         sets:req.body.sets
    //     }
    //     ]
    // }
    // console.log(data);
    const result = await db.Bookshelf.create(req.body);
    console.log('result from creating workout in mongo', result);
    res.json({ answer: 'ok' });
});

app.listen(PORT, (req, res) => {
    console.log(`server started on port ${PORT} ...`);
});
