// Create a web server
// Create a route for /comments
// When the user visits /comments, return a list of comments
// The comments should be an array of objects, each object should have an id and a comment key
// The id should be a unique number
// The comment should be a string
// The comments should be saved in a file called comments.json
// When the user visits /comments, read the comments from the file and return them

const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

app.get('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            res.send([]);
        } else {
            res.send(JSON.parse(data));
        }
    });
});

app.post('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            const comments = [];
            comments.push({
                id: 1,
                comment: req.body.comment
            });
            fs.writeFile('comments.json', JSON.stringify(comments), () => {
                res.send(comments);
            });
        } else {
            const comments = JSON.parse(data);
            const newComment = {
                id: comments.length + 1,
                comment: req.body.comment
            };
            comments.push(newComment);
            fs.writeFile('comments.json', JSON.stringify(comments), () => {
                res.send(comments);
            });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});