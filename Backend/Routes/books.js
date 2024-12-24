//record of all books, bookname, Noofbooks
import { response, Router } from 'express';
import models from '../DB/stdata.js';
const booksrouter = Router();
//function for registering books.....
async function record(req, res) {
    const {bookname, Noofbooks, bookyear} = req.body

    //checking for duplicate record
    const response = await models.booksmodel.findOne({
        bookname: bookname,
        bookyear: bookyear,
        Noofbooks: Noofbooks
    })
    if (!response) {
        models.booksmodel.create({
            bookname: bookname,
            Noofbooks: Noofbooks,
            bookyear: bookyear,
        })
        res.json({
            message: "book registered"
        })
        
    } else {
        res.json({
            message: "book already registered"
        })
    }
 
}
//function for finding books......
async function find(req, res) {
    console.log("find in book.js in Backend got hit");
    const {debouncedBook} = req.body;
    const response = await models.booksmodel.find({bookname : debouncedBook})
    if(response[0]){
        console.log(response);
        console.log("Response working fine in book.js in Backend");
        res.json({message:JSON.stringify(response[0])})
        return  
    }
    else{
        res.json({message: "No Book found"})  
    }
}

booksrouter.post('/record', record);
booksrouter.post('/find', find)
const books = {booksrouter, record};
export default books;