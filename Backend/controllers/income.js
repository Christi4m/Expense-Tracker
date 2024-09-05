const Income = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, date, category, description } = req.body;
  console.log(title, amount, date, category, description);
  const income = new Income({
    title,
    amount,
    date,
    category,
    description,
  });

  try {
    //validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fileds are rquired!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number!" });
    }
    await income.save();
    res.status(200).json({ message: "Income Added" });
  } catch (error) {}
};
