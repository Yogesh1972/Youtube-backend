import dotenv from 'dotenv';
dotenv.config({});


import connectDB from "./Database/index.js";

connectDB();


// import express from "express";
// const app=express();

// ;(async ()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.error("ERROR: ", error)
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//     }catch(error){
//         console.error("ERROR: ", error)
//         throw error
//     }
// })() // IIFE semi-colon is required here as this is a standalone statement

// one approch to connect to the database