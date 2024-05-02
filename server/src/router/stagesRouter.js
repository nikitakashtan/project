const express = require('express');
const { Stage } = require('../../db/models');

const stagesRouter = express.Router();

stagesRouter.route('/').get(async (req, res) => {
    const stages = await Stage.findAll();
    res.json(stages);
})

module.exports = stagesRouter;