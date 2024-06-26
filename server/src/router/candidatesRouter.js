const express = require('express');
const { Canditate, Stage } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const candidatesRouter = express.Router();

candidatesRouter.route('/')
  .get(async (req, res) => {
    try {
      const candidates = await Canditate.findAll({
        include: {
          model: Stage,
        },
      });
      console.log(candidates)
      res.json(candidates);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
    })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const newPost = await Canditate.create({ ...req.body, userId: res.locals.user.id });
      const candidate = await Canditate.findByPk(newPost.id, { include: [Stage] });
      res.json(candidate);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  })

  candidatesRouter.route('/:id').put(verifyAccessToken, async (req, res) => {
    try {
        const candidate = await Canditate.findByPk(req.params.id);
        if (!candidate) return res.status(404).json({ error: 'Кандидат не найден' })

        await candidate.update(req.body);
        res.json(candidate);
    } catch (error) {
        console.error('Ошибка при обновлении данных кандидата:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});


module.exports = candidatesRouter;
