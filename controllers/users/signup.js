const jwt = require("jsonwebtoken");

const { User, joiSchemas } = require("../../models/user");
const createError = require("../../helpers/createError");

const { SECRET_KEY } = process.env;

const signup = async (req, res, next) => {
  const { error } = joiSchemas.name.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }

  let response;

  const { name } = req.body;

  const user = await User.findOne({ name });
  console.log("user", user);
  if (user) {
    response = {
      token: user.token,
      user: {
        name: user.name,
      },
    };
    // throw createError(409, `${name} in use`);
  }

  if (!user) {
    const newUser = await User.create(req.body);

    const payload = {
      id: newUser._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });

    const result = await User.findByIdAndUpdate(newUser._id, { token });

    response = {
      token,
      user: {
        name: result.name,
      },
    };
  }

  res.status(200).json(response);
};

module.exports = signup;
