const expenseModel = require('../models/expenseModel');
const expenseView = require('../views/expenseView');

async function handleAddExpense(description, amount) {
  try {
    // Add the expense to the database
    await expenseModel.addExpense(description, amount);
    // Fetch all expenses from the database
    const allExpenses = await expenseModel.getAllExpenses();
    // Render the updated expenses on the view
    expenseView.renderExpenses(allExpenses);
  } catch (error) {
    console.error('Error handling add expense:', error);
  }
}

async function handleDeleteExpense(index) {
  try {
    // Delete the expense from the database
    await expenseModel.deleteExpense(index);
    // Fetch all expenses from the database
    const allExpenses = await expenseModel.getAllExpenses();
    // Render the updated expenses on the view
    expenseView.renderExpenses(allExpenses);
  } catch (error) {
    console.error('Error handling delete expense:', error);
  }
}

module.exports = {
  handleAddExpense,
  handleDeleteExpense
};
