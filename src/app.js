import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors
    ({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
);

app.use(express.json({ limit: "16kb" })); //to limit the size of the request body
app.use(express.urlencoded({ extended: true,limit:"16kb", })); //to parse the url encoded data as data may come from url
app.use(express.static("public")); //to serve static files like images, css, js etc
app.use(cookieParser());


export { app }