import mongoose from "mongoose";
const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://nishantkumaragra:NishantSingh@cluster0.yp92q.mongodb.net/LMS');
const ObjectId = Schema.ObjectId;

const students = new Schema({
    name: String,
    year: String,
    branch: String
})

const allotrecord = new Schema({
    stdId: ObjectId,
    bookId: ObjectId
})
const books = new Schema({
    bookname: String,
    year: String,
    Noofbooks: String
})

const stdmodel = mongoose.model("students", students);
const allotmodel = mongoose.model("allotrecord", allotrecord);
const booksmodel = mongoose.model("books", books)
const models = {stdmodel, allotmodel, booksmodel};
export default models;