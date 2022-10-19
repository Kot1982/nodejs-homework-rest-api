const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

const registerJoiSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
  subscription: Joi.string().valid("starter", "pro", "business"),
  //   token: Joi.string()
});

const loginJoiSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
  //   token: Joi.string()
});

module.exports = { User, registerJoiSchema, loginJoiSchema };
