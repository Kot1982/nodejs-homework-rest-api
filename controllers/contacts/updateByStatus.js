const { Contact } = require("../../models");

const updateByStatus = async (req, res) => {
  const { contactId } = req.params;
  const updateFavoriteContactById = await Contact.findByIdAndUpdate(
    { _id: contactId },
    req.body,
    { new: true }
  );
  if (!updateFavoriteContactById) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }
  res.status(201).json({
    status: "success",
    code: 201,
    message: "Contact status was updated",
    data: {
      result: updateFavoriteContactById,
    },
  });
};

module.exports = updateByStatus;
