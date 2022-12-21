const { Contact } = require("../../models");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const updateContactById = await Contact.findByIdAndUpdate(
    { _id: contactId },
    req.body,
    { new: true }
  );
  if (!updateContactById) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }
  res.status(201).json({
    status: "success",
    code: 201,
    message: "Contact was updated",
    data: {
      result: updateContactById,
    },
  });
};

module.exports = updateById;
