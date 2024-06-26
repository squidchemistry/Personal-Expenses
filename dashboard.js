// dashboard.js

document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    var amount = parseFloat(document.getElementById('amount').value);
    var expenseType = document.getElementById('expenseType').value;
    var description = document.getElementById('description').value;

    // Update the spent amount
    var spentAmount = parseFloat(document.getElementById('spentAmount').textContent);
    spentAmount += amount;
    document.getElementById('spentAmount').textContent = spentAmount;

    // Update the savings amount
    var savingsAmount = parseFloat(document.getElementById('savingsAmount').textContent);
    if (expenseType === 'Savings') {
        savingsAmount += amount;
        document.getElementById('savingsAmount').textContent = savingsAmount;
    }

    // Update the investment amount
    var investmentAmount = parseFloat(document.getElementById('investmentAmount').textContent);
    if (expenseType === 'Investment') {
        investmentAmount += amount;
        document.getElementById('investmentAmount').textContent = investmentAmount;
    }

    // Reset the form
    document.getElementById('amount').value = '';
    document.getElementById('expenseType').value = '';
    document.getElementById('description').value = '';
});