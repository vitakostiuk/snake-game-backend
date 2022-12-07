// Тут ми робимо запити до бази
const { Score, joiShemas } = require("../../models/score");
const createError = require("../../helpers/createError");

const add = async (req, res, next) => {
  const { error } = joiShemas.add.validate(req.body);
  if (error) {
    throw createError(400, "Missing required value field");
  }

  // // В req.user у нас доступна інформація про користувача, який робив запит
  // // отримали її з мідлвари login
  // // З req.user забираємо id користувача, який робить запит, під ім'ям owner
  // // і додаємо його пізніше в result, а далі на фронтенд
  // const { id: owner } = req.user;
  // console.log(req.user);

  // const result = await Score.create({ ...req.body, owner });
  const result = await Score.create(req.body);
  // і ми цей об'єкт повертаємо на фронтенд
  res.status(201).json(result);
};

module.exports = add;
