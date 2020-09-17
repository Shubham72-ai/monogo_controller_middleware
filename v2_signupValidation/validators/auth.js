const { check } = require("express-validator");

exports.userSingupValidator = [
  check("name").not().isEmpty().withMessage("name is required"),
  check("email").isEmail().withMessage("must be a valid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password Must be 6 char long"),
];

//this massages will sent as an error
