// Тут ми робимо запити до бази
const { Score } = require("../../models/score");

const getAllUsersScores = async (req, res, next) => {
  const result = await Score.find();

  res.json(result);
};

module.exports = getAllUsersScores;
