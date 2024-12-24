import { Router } from "express";
const homepage = Router();

function home(req, res){
    res.json({
        message: " home page"
    })
}

homepage.get('/', home)


export default homepage;
