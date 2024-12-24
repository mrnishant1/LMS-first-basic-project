import express from 'express';
const app = express();
app.use(express.json())
// allowing cors
import cors from 'cors'
app.use(cors())

// importing Routes;
import stdregister from './Routes/register.js';
import homepage from './Routes/home.js';
import allotment from './Routes/allotbooks.js';
import books from './Routes/books.js';


app.use('/newregister', stdregister);
app.use('/home', homepage);
app.use('/allot', allotment);
app.use('/book',  books.booksrouter);

app.listen(5000,
    ()=>{console.log("server is working")}
)
