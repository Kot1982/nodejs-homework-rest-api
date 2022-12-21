const express = require("express");
const {
  contactsSchema,
  contactsStatusSchema,
} = require("../../models/contact");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", auth, ctrlWrapper(ctrl.getById));

router.post("/", auth, validation(contactsSchema), ctrlWrapper(ctrl.add));

router.delete("/:contactId", auth, ctrlWrapper(ctrl.removeById));

router.put(
  "/:contactId",
  auth,
  validation(contactsSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  auth,
  validation(contactsStatusSchema),
  ctrlWrapper(ctrl.updateByStatus)
);

module.exports = router;
