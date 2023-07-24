const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: String,
  amount: Number,
});

const Expense = mongoose.model('Expense', expenseSchema);

function addExpense(description, amount) {
  const newExpense = new Expense({
    description,
    amount,
  });

  return newExpense.save();
}

async function getAllExpenses() {
  return Expense.find();
}

function deleteExpense(id) {
  return Expense.findByIdAndDelete(id);
}

module.exports = {
  addExpense,
  getAllExpenses,
  deleteExpense,
};
