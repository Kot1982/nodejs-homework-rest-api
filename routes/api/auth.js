const express = require("express");
const { registerJoiSchema, loginJoiSchema } = require("../../models/user");
const { auth: ctrl } = require("../../controllers");
const { auth, validation, ctrlWrapper } = require("../../middlewares");

const router = express.Router();

router.post(
  "/register",
  validation(registerJoiSchema),
  ctrlWrapper(ctrl.register)
);
router.post("/login", validation(loginJoiSchema), ctrlWrapper(ctrl.login));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
