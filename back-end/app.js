const express = require('express');
const fs = require('fs');
let db = require('./models');
const axios = require('axios');
const app = express();
const path = require('path');

PORT = process.env.PORT || 8080;
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.get('/api/getbooks', async (req, res) => {
    // console.log('api/getbooks called...');
    const result = await db.Bookshelf.find({});
    // console.log('response from database', result);
    res.json(result);
});
//this is for calling google api
app.get('/api/getbooks2/:q', async (req, res) => {
    // console.log('api/getbooks2 called...');
    let url = `https://www.googleapis.com/books/v1/volumes?q="${req.params.q}"&key=AIzaSyBAzph4dcGUEI9hkcIh7XuZJzpBuNhEJ9s&projection=lite`;
    const apiResponse = await axios.get(url).then((response) => response.data);
    // console.log(books);
    let books = apiResponse['searchValue']
        ? apiResponse['searchValue']
        : apiResponse;
    // console.log(books);
    const booksObject = books.items.map((element) => {
        return {
            title: element['volumeInfo']['title'],
            description: !element['volumeInfo']['description']
                ? 'No description available'
                : element['volumeInfo']['description'],
            authors: element['volumeInfo']['authors'],
            imgLink: element['volumeInfo']['imageLinks']
                ? element['volumeInfo']['imageLinks']['thumbnail']
                : '',
            previewLink: element['volumeInfo']['previewLink'],
        };
    });
    // console.log(booksObject);
    res.json(booksObject);
});

app.use(express.static('./public'));

app.get('/search', (req, res) => {
    const options = {
        root: path.join(__dirname, 'public'),
    };
    // console.log(options.root);
    res.sendFile('index.html', options);
});

app.get('/saved', (req, res) => {
    const options = {
        root: path.join(__dirname, 'public'),
    };
    // console.log(options.root);
    res.sendFile('index.html', options);
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.post('/api/storebook', async (req, res) => {
    // console.log('/api/storebook called');
    // console.log(req.body);
    const result = await db.Bookshelf.create(req.body);
    // console.log('result from creating workout in mongo', result);
    res.json({ answer: 'ok' });
});

app.listen(PORT, (req, res) => {
    console.log(`server started on port ${PORT} ...`);
});
