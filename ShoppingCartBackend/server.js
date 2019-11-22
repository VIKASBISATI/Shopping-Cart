//Author :-sai venkata vikas bisati
const productRouter = require('./Router/productRouter');
const userRouter = require('./Router/userRouter');
const imageRouter=require('./Router/image-upload')
// const profileRouter=require('./MiddleWare/multer')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logger=require('./utils/logger')
const expressValidation = require('express-validator');
app.use(expressValidation());
const dataConfig = require('./Configuration/db.config')
const mongoose = require('mongoose');
require('dotenv').config()
require('http').createServer(app);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use('/product', productRouter);
app.use('/', userRouter);
app.use('/image',imageRouter)
// app.use('/profile',profileRouter)
mongoose.connect(dataConfig.url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to the database");
}).catch(() => {
    console.log("err connecting to the database");
})
app.get('/', (req, res) => {
    res.json("Message: Welcome to fundoo Notes");
});
app.listen(4000, () => {
    logger.info('server is running on 4000');
});
module.exports = app;
