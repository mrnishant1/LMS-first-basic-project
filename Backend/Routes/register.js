//record of all students

import { Router } from "express";
const stdregister = Router();
import models from "../DB/stdata.js"

//checking for student already registered or not
async function check(req, res){
    
    const {name, year, branch} = req.body
    console.log(name,year,branch)
    try {
        if(name !="" && year !="" && branch != "")
    {
        const student = await models.stdmodel.findOne({
            name: name,
            year:year,
            branch: branch})

        if (student){
            
            res.json({
                message: "student already registered"
        })
        }

        else{
            await models.stdmodel.create({
                name: name,
                year: year,
                branch: branch
            })

            res.json({message: "successfully registered"})
        }
    }
    else{
        res.json({
            message: "please fill valid credentials"
        })
    }
    } catch (error) {
        res.error
    }
}


stdregister.post('/', check);

// app.post('/register', register)

export default stdregister;
