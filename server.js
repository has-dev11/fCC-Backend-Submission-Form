import express from "express"
import apiRouter from "./routes/api.routes.js"
import { notFoundHandler, finalErrorHandler } from "./middleware/error.middleware.js";
const app = express()
// const PORT = 3000

function next() {}

app.use((req, res, next) => {
    console.log(req)
    console.log(req.url)
    next()
});


app.use("/api" ,apiRouter)

app.use(notFoundHandler)
app.use(finalErrorHandler)

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`)
})