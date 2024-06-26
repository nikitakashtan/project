const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const authRouter = require('./router/authRouter');
const tokensRouter = require('./router/tokensRouter');
const stagesRouter = require('./router/stagesRouter');
const candidatesRouter = require('./router/candidatesRouter');
const mailRouter = require('./router/mailRouter');
const commentRouter = require('./router/commentRouter');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());


app.use('/api/tokens', tokensRouter);
app.use('/api/auth', authRouter);
app.use('/api/stages', stagesRouter);
app.use('/api/candidates', candidatesRouter);
app.use('/api/sendmail', mailRouter);
app.use('/api/comments', commentRouter);

module.exports = app;
