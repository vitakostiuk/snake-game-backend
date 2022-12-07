// Тут ми робимо запити до бази
const { Score, joiShemas } = require("../../models/score");
const createError = require("../../helpers/createError");

const add = async (req, res, next) => {
  const { id: owner, name } = req.user;

  const { error } = joiShemas.add.validate(req.body);
  if (error) {
    throw createError(400, "Missing required value field");
  }

  const result = await Score.create({ ...req.body, owner, name });

  res.status(201).json(result);
};

module.exports = add;
