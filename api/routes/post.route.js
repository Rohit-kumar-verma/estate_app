import express from "express";


const router = express.Router()

router.get('/test_2', (req, res)=>{
    console.log("router works!");
})

export default router