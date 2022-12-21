const express = require("express");
const { users: ctrl } = require("../../controllers");
const { auth, ctrlWrapper, upload, validation } = require("../../middlewares");
const { verifyLoginJoiSchema } = require("../../models/user");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post(
  "/verify",
  validation(verifyLoginJoiSchema),
  ctrlWrapper(ctrl.resendVerifyEmail)
);

module.exports = router;
