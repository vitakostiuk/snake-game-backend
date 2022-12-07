const { Schema, model } = require("mongoose");
const Joi = require("joi");

const nameSchema = Joi.object({
  name: Joi.string().min(2).required(),
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      required: [true, "Name is required"],
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchemas = {
  name: nameSchema,
};

const User = model("user", userSchema);

module.exports = { User, joiSchemas };
