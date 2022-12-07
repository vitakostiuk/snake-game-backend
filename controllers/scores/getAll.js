// Тут ми робимо запити до бази
const { Score } = require("../../models/score");

const getAll = async (req, res, next) => {
  const { id: owner } = req.user;

  const result = await Score.find({ owner }).populate("owner", "name");

  res.json(result);
};

module.exports = getAll;
