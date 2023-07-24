const expenseList = document.getElementById('expenseList');

function renderExpenses(expenses) {
  let expenseHTML = '';
  expenses.forEach((expense, index) => {
    expenseHTML += `
      <div>
        <span>${expense.description}</span>
        <span>$${expense.amount}</span>
        <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
      </div>
    `;
  });
  expenseList.innerHTML = expenseHTML;
}

module.exports = {
  renderExpenses
};
