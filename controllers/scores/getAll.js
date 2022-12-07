// Тут ми робимо запити до бази
const { Score } = require("../../models/score");

const getAll = async (req, res, next) => {
  const result = await Score.find();

  res.json(result);
};

module.exports = getAll;
