const expenseForm = document.getElementById('expenseForm');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');

expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  if (description && amount) {
    handleAddExpense(description, amount);
    expenseForm.reset();
  }
});

async function handleAddExpense(description, amount) {
  try {
    const response = await fetch('/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, amount }),
    });

    if (!response.ok) {
      throw new Error('Failed to add expense');
    }

    const newExpense = await response.json();
    console.log('Added expense:', newExpense);
  } catch (error) {
    console.error('Error adding expense:', error);
  }
}

function deleteExpense(index) {
  handleDeleteExpense(index);
}

async function handleDeleteExpense(id) {
  try {
    const response = await fetch(`/expenses/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete expense');
    }

    const deletedExpense = await response.json();
    console.log('Deleted expense:', deletedExpense);
  } catch (error) {
    console.error('Error deleting expense:', error);
  }
}
