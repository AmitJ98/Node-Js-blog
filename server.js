import * as http from 'http'
import * as fs from 'fs'
import * as _ from 'lodash'
import * as express from 'express'

const server = http.createServer( (req , res) => {
        
    res.setHeader('Content-Type', 'text\plain');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html'  ;
            res.statusCode =200;
            break  ;
        
        case '/about':
            path += 'about.html';
            res.statusCode =200;
            break;
        
        default:
            res.statusCode =404;
            path += '404.html';
            break;
    }

    fs.readFile(path,(err,data) => {
        if (err)
        {
            console.log(err);
            res.end();
        }
        else
        {
            res.write(data);
            res.end();
        }
    });
    
});


server.listen(3000, 'localhost' , () => {

    console.log('listening for request from port 3000')

});

