const { addIncome, getIcomes, deleteIncome } = require("../controllers/income");

const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIcomes)
  .delete("/delete-income/:id", deleteIncome);

module.exports = router;
