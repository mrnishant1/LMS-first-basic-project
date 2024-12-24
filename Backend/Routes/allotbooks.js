//record of book allotments

import { Router } from "express";
const allotment = Router();
import models from "../DB/stdata.js";
// import books from "./books.js";
// joi validation library could be used for imput validation as middleware
//..................................................................................
async function allot(req, res){
    const {name, year, branch, bookname} = req.body;
    console.log(name,year,branch,bookname);

    //creating a function to FindOrCreate a book
    async function findOrCreateBook(bookname, year) {
        let book = await models.booksmodel.findOne({ bookname, year });
        if (!book) {
            book = await models.booksmodel.create({ bookname, year, Noofbooks: 1 });
            console.log("Book was not registered............done registering")
        }
        return book;
    }
    //calling it
    
    const book = await findOrCreateBook(bookname,year)
    console.log(book)
   
    //creating a function to FindOrCreate a student   
    async function findOrCreateStudent(name, year, branch) {
        let student = await models.stdmodel.findOne({name, year, branch});
        if(!student){
            student = await models.stdmodel.create({name, year, branch});
            console.log("student was not registered............done registering")
        }
        return student;
    }
    //calling it
    const student = await findOrCreateStudent(name,year,branch)
    console.log(student);
    

    
    async function findOrAllotBook(book, student) {
        const bookId = book._id
        const stdId = student._id
        let allotment = await models.allotmodel.findOne({bookId, stdId})
        if(!allotment){
            await models.allotmodel.create({bookId, stdId})
            res.json({message: "you got the book"})
        }
        else{
            res.json({message: "you already have the book"})
        }
    }

    findOrAllotBook(book, student);
    
}

allotment.post('/' ,allot)


export default allotment;
