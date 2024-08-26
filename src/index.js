import dotenv from 'dotenv';
dotenv.config({ });


import connectDB from "./Database/index.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT ||8000 ,()=>{
        console.log(`Server is runing on port ${process.env.PORT}`)
    })

    app.on("error",(error)=>{
        console.error("Error: ", error)
        process.exit(1)
    })


})
.catch((error)=>{
    console.error("Error: ", error)
    process.exit(1)
})






















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