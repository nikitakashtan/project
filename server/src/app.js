const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
// const authRouter = require('./router/authRouter');
// const tokensRouter = require('./router/tokensRouter');
// const postsRouter = require('./router/postsRouter');
const stagesRouter = require('./routes/stagesRouter');

const app = express();

app.use(morgan('dev'));
// app.use(cookieParser());
app.use(express.json());

// app.use('/api/tokens', tokensRouter);
// app.use('/api/auth', authRouter);
// app.use('/api/posts', postsRouter);

module.exports = app;
