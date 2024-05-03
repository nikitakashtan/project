const express = require('express');
const { Canditate, User, Comment } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const commentRouter = express.Router();

commentRouter.route('/:candidate_id')
.get(async (req, res) => {
    const comments = await Comment.findAll({
      where: { candidate_id: req.params.candidate_id },
      include: {
        model: User,
      },
    });
    res.json(comments);
})
.post(verifyAccessToken, async (req, res) => {
    try {
        const newComment = await Comment.create({...req.body, candidate_id: req.params.candidate_id, userId: res.locals.user.id });
        res.json(newComment);
    } catch (error) {
        console.error('Ошибка при добавлении комментария:', error);
        res.status(500).json({ error: 'Ошибка при добавлении комментария' });
    }
})


module.exports = commentRouter;
