const { Schema, model } = require("mongoose");
const Joi = require("joi");

const addSchema = Joi.object({
  score: Joi.number().min(1).required(),
});

const scoreSchema = new Schema(
  {
    score: {
      type: Number,
      required: true,
    },
    // // в owner будемо записувати id людини, яка додала
    // // Schema.Types.ObjectId - особливий тип даних для id
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    //   // тут вказуємо, з якої колекції цей id
    // },
  },
  { versionKey: false, timestamps: true }
);

// Імпортуємо joi-схеми як окремий об'єкт joiShemas
const joiShemas = {
  add: addSchema,
};

// Створюємо модель Contact - це модель (іменник в однині). model() на основі схеми створює модель
// "contact" - назва колекції, з якою потрібно працювати, також в однині
const Score = model("score", scoreSchema);

module.exports = { Score, joiShemas };
