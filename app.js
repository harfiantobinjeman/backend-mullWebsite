const express = require('express');
const app = express();

//panggil body parser
const bodyParser = require('body-parser');
const postRouters = require('./routes/post');
const categoryRouter = require('./routes/category');
const usersRouter = require('./routes/user');
const imageRoute = require('./routes/image');
const subCategoryRouter = require('./routes/subCategory');
const contentRouter = require('./routes/content');

app.use('/', postRouters);
app.use(bodyParser.json());
app.use('/category', categoryRouter);
app.use('/user', usersRouter);
app.use('/image', imageRoute);
app.use('/subCategory', subCategoryRouter);
app.use('/content', contentRouter);

app.get('/berita', (req, res)=>{
    res.send("hello berita terkini");
});

module.exports = app;