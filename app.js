import express from 'express';
import mongoose from 'mongoose';
import { render } from 'ejs';
import blogRouts from './routes/blogRouts.js';

const app = express();

const dbURI = 'mongodb+srv://AmitLearnNode:LearNode123@nodelearn.80p8by5.mongodb.net/'
mongoose.connect(dbURI)
    .then((res) => app.listen(3000))
    .catch((err) => console.log(err));


app.set('view engine', 'ejs')


//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use((req , res, next ) => {
    console.log('requset as been made');
    console.log('host:' , req.hostname)
    console.log('path:' , req.path)
    console.log('method:' , req.method)
    next()
});


app.get('/', (req, res) => {
    res.redirect('/blogs');
});


app.get('/about', (req, res) => {
    res.render('about' , {title: 'About' })
});


//blog routes
app.use('/blogs' , blogRouts);


// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
});