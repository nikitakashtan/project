const express = require('express');
const { Canditate, Stage } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const candidatesRouter = express.Router();

candidatesRouter.route('/')
  .get(async (req, res) => {
    const candidates = await Canditate.findAll({
      include: {
        model: Stage,
      },
    });
    console.log(candidates)
    res.json(candidates);
  })
  .post(verifyAccessToken, async (req, res) => {
    const newPost = await Canditate.create({ ...req.body, userId: res.locals.user.id });
    const candidate = await Canditate.findByPk(newPost.id, { include: [Stage] });
    res.json(candidate);
  });

module.exports = candidatesRouter;
