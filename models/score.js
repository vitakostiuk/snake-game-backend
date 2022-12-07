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
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
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
