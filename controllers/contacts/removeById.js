const { Contact } = require("../../models");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const deleteContact = await Contact.findByIdAndRemove({
    _id: contactId,
  });
  if (!deleteContact) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Contact with id ${contactId} not found`,
    });
  }
  res.status(200).json({
    status: "success",
    code: 200,
    message: "Contact was deleted",
    data: {
      result: deleteContact,
    },
  });
};

module.exports = removeById;
