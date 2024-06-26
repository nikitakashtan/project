const express = require('express');
const bcrypt = require('bcrypt');
const {User} = require ('../../db/models');
const generateTokens = require('../utils/generateTokens');
const cookiesConfig = require('../configs/cookiesConfig');

const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const targetUser = await User.findOne({ where: { email } });
    if (!targetUser) return res.sendStatus(401);
  
    const isValid = await bcrypt.compare(password, targetUser.hashpass);
    if (!isValid) return res.sendStatus(401);
  
    const user = targetUser.get();
    delete user.hashpass;
  
    const { accessToken, refreshToken } = generateTokens({ user });
  
    res
      .cookie('refreshToken', refreshToken, cookiesConfig)
      .json({ accessToken, user });
  });

  authRouter.get('/logout', (req, res) => {
    res.clearCookie('refreshToken').sendStatus(200);
  });
  

module.exports = authRouter;