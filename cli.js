const program = require('commander');
const mongoose = require('mongoose');
const { addExpense, getAllExpenses, deleteExpense } = require('./expenseModel');

// Rest of the code remains the same


// MongoDB connection URI (replace with your actual MongoDB URI)
const MONGODB_URI = 'mongodb://localhost:27017';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Command: add
program
  .command('add <description> <amount>')
  .description('Add a new expense')
  .action(async (description, amount) => {
    try {
      const newExpense = await addExpense(description, parseFloat(amount));
      console.log('Expense added:', newExpense);
      mongoose.disconnect();
    } catch (error) {
      console.error('Error adding expense:', error);
      mongoose.disconnect();
    }
  });

// Command: list
program
  .command('list')
  .description('List all expenses')
  .action(async () => {
    try {
      const expenses = await getAllExpenses();
      console.log('All Expenses:', expenses);
      mongoose.disconnect();
    } catch (error) {
      console.error('Error fetching expenses:', error);
      mongoose.disconnect();
    }
  });

// Command: delete
program
  .command('delete <id>')
  .description('Delete an expense')
  .action(async (id) => {
    try {
      const deletedExpense = await deleteExpense(id);
      console.log('Deleted Expense:', deletedExpense);
      mongoose.disconnect();
    } catch (error) {
      console.error('Error deleting expense:', error);
      mongoose.disconnect();
    }
  });

program.parse(process.argv);
